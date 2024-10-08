const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    // console.log(req.headers, "req heade authen");
    let access_token = req.headers.authorization;
    // console.log(access_token, "authen nih");
    // console.log("masuk b");

    if (!access_token) {
      // console.log("masok 1");
      throw { message: "InvalidToken" };
    }
    // console.log("masuk a");
    

    if (access_token.slice(0, 7) !== "Bearer ") {
      // console.log("masok 2");
      throw { message: "InvalidToken" };
    }

    access_token = access_token.slice(7);
    // console.log(access_token, ">>> bearer");
    
    let payload = verifyToken(access_token);
    // console.log(payload, "authen");

    let user = await User.findByPk(payload.id);
    // console.log(user,"user nic");

    if (!user) {
      // console.log("masok 3");
      throw { message: "InvalidToken" };
    }

    // console.log("masuk e");

    req.user = { id: user.id, role: user.role };
    // console.log(req.user);

    next();
  } catch (error) {
    console.log(error);
    if (error.name === "InvalidToken" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "InvalidToken" });
    }
    res.status(500).json({message: "Internal Server Error"});
  }
}

module.exports = authentication;
