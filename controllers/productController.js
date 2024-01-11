const Sequelize = require("sequelize");
const { getProductSchema } = require("../validations/ProductSchema");
const models = require("../models");
const { valid } = require("@hapi/joi");
const md5 = require("md5");
const authService = require("../services/auth.service");
const productController = () => {
  const list = async (req, res) => {
    try {
        console.log(req.query)
      const checkReq = await getProductSchema.validateAsync(req.query);
      
      const Op = Sequelize.Op;
      const page = parseInt(req.query.page, 10) || 0;
      const limit = parseInt(req.query.limit, 10) || "";
      const price_gt = req.query.price_gt;
      const price_ls = req.query.price_ls;
      const q = req.query.q || "";
      
      const condition = {};
      if (q) {
        condition.product_name = { [Op.like]: "%" + q + "%" };
      }
      if(price_gt && price_ls){
        condition.price = { [Op.between]:  [price_gt , price_ls ]};
      }else{

          if (price_gt) {
            condition.price = { [Op.gt]: price_gt };
          }
          if (price_ls) {
            condition.price = { [Op.lt]: price_ls };
          }
      }
      var param = {
        where: condition,
      };
      if (limit) {
        param.offset = page * limit;
        param.limit = limit;
      }
      console.log(param)
      let productList= await models.product.findAndCountAll(param);
      return res.status(200).json({
        status: "success",
        total_count: productList.count,
        no_of_items: productList.count,
        data: productList.rows,
      });
    } catch (err) {
      if (err.isJoi === true) {
        return res
          .status(400)
          .json({ status: "fail", description: err.details[0].message });
      }
    }
  };
  return {list}
};
module.exports=productController
