const jwt = require("jsonwebtoken");
require("dotenv").config()

const secret=   process.env.JWT_SECRET;
const refrshSecret= process.env.JWT_REFRESH_SECRET;

const authService = () => {
    const issue = (payload) => jwt.sign(payload, secret, { expiresIn: "8d" });
    const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
    const refreshVerify = (token, cb) => jwt.verify(token, refrshSecret, {}, cb);
    const refreshToken = (payload) => jwt.sign(payload, refrshSecret);
    return {
      issue,
      verify,
      refreshToken,
      refreshVerify,
    };
  };
  
  module.exports = authService;