const Joi = require("@hapi/joi");
const getProductSchema=Joi.object({
    page: Joi.number(),
    limit: Joi.number(),
    q:Joi.string(),
    price_gt:Joi.number(),
    price_ls:Joi.number(),
})
module.exports={
    getProductSchema
}