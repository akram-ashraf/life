const JWTService = require("../services/auth.service");

module.exports = (req, res, next) => {
  let tokenToVerify;

  if (req.header("Authorization")) {
    tokenToVerify = req.header("Authorization");
      
  } else if (req.body.token) {
    tokenToVerify = req.body.token;
    delete req.query.token;
  } else {
    return res.status(401).json({ msg: "No Authorization was found" });
  }

  return JWTService().verify(tokenToVerify, (err, thisToken) => {
    // console.log(err, thisToken);
    if (err) return res.status(401).json({ err });
    req.token = thisToken;
    return next();
  });
};
