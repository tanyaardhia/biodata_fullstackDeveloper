const { Biodata } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const biodata = await Biodata.findByPk(id);

    if (!biodata) throw { name: "Not Found" };

    if (req.user.role === "Admin") {
      next();
    } else {
        console.log(">>> masuk authorization");
      if (req.user.id !== biodata.userId) {
        throw { name: "Forbidden" };
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
