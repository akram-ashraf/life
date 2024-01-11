
const Sequelize = require("sequelize");
const  {signupSchema}=require("../validations/UserValidations")
const models = require("../models");
const { valid } = require("@hapi/joi");
const md5 = require('md5') 
const authService = require('../services/auth.service')
const UserController=()=>{
    const signup=async (req,res)=>{
        try{
            
            const checkReq = await signupSchema.validateAsync(req.body);
            const{name,phone,email,password}=req.body;
            //check same username of email exist
            console.log()
            const userValidation=await checkUser(email,phone);
            if(userValidation.is_valid==false){
                return res.status(400).json({status:"fail","description":userValidation.message})
            }
            const newUser= await models.user.create({
                name,
                email,
                phone,
                password:md5(password)
            })
            console.log(newUser.dataValues)
            const userData={user_id:newUser.dataValues.user_id,name,email,phone}
            const token=authService().issue(userData)
            return res
              .status(200)
              .json({ 
                status: "success",
                 message: "signup success",
                 data:userData,
                 token
             });
        }catch(err){
            if(err.isJoi===true){
                return res.status(400).json({status:"fail","description":err.details[0].message})
            }
        }
    }

    //parameters user_key [it can be either email or phone number], password 
    const login=async(req,res)=>{
        const {user_key,password}=req.body;
        let condition={}
        if(validateEmailPhone(user_key)=="Email"){
            condition.email = user_key
        }else if (validateEmailPhone(user_key)=="Phone"){
            condition.phone = user_key
        }else{
            return res.status(400).json(
                {
                    status:"fail",
                    message:"invailed email or phone number"
                }
            )
        }
        const userData=await models.user.findOne({ 
            where :condition
        })
        if(!userData){
            return res.status(400).json(
                {
                    status:"fail",
                    message:"No user found!"
                }
            )
        }
        if(md5(password) != userData.dataValues.password){
            return res.status(400).json(
                {
                    status:"fail",
                    message:"Invalied password!"
                }
            )
        }
        const verifiedUser={
            user_id:userData.dataValues.user_id,
            name:userData.dataValues.name,
            email:userData.dataValues.email,
            phone:userData.dataValues.phone,

        }
        const token=authService().issue(verifiedUser)
        return res.status(200).json({
            status:"success",
            data:verifiedUser,
            token
        })
    }

    function validateEmailPhone(str) {
        //Validates the email address
        var emailRegex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (emailRegex.test(str)) {
          return "Email";
        }
    
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        if (phoneRegex.test(str)) {
          return "Phone";
        }
        return "nun";
      }

    const checkUser=async (email,phone)=>{
        const valid={
            is_valid:true
        }
        const Op= Sequelize.Op;
        let condition={
            [Op.or]:[{email},{phone}]
        }
        console.log(condition)
        userData= await models.user.findOne({
            where: condition
        })
        console.log(userData)
        if(userData){
            valid.is_valid=false
            if (userData.dataValues.email == email)
              valid.message = "user with this email id already exist";
            if (userData.dataValues.phone == phone)
              valid.message = "user with this Phone number already exist";
        }
        return valid;
    }
    return{
        signup,
        login
    }

}
module.exports=UserController;