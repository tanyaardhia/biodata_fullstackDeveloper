const { Biodata } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const biodata = await Biodata.findByPk(id);

    if (!biodata) throw { message: "Not Found" };

    if (req.user.role === "admin") {
      next();
    } else {
        console.log(">>> masuk authorization");
      if (req.user.id !== biodata.userId) {
        throw { message: "Forbidden" };
      } else {
        next();
      }
    }
  } catch (error) {
    console.log(error, ">>> authorization error");
    next(error);
  }
}

module.exports = authorization;
