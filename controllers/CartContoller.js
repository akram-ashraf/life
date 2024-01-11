const Sequelize = require("sequelize");
const models = require("../models");

const CartContoller=()=>{

    //This function used to add item to the cart list
    // parameters
    //     product_id
    //     qty
    const add=async (req,res)=>{
        console.log(req.params)
        const cartDetails={
            user_id:req.token.user_id,
            product_id:req.body.product_id,
        }
        checkItemExist=await models.cart.findOne({where:cartDetails})
        //checking the item is already exist on the cart
        if(checkItemExist){
            return res.status(400).json({
                status:"Fail",
                message:"Item already added to cart"
            })
        }
        cartDetails.qty=req.body.qty
        // adding item to the cart
        await models.cart.create(cartDetails)
        return res.status(200).json({
            status:"success",
            message:"Item added to cart!"
        })
    }
    return {
        add
    }
}
module.exports=CartContoller;