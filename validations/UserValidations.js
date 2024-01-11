const Joi = require("@hapi/joi");

const signupSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string()
    .min(10)
    .max(15)
    .pattern(/^[0-9]+$/)
    .required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(8).required(),
  confirm_password: Joi.string().valid(Joi.ref("password")),
});
module.exports={
    signupSchema
}
