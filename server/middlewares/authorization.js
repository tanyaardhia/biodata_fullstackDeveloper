const { Biodata } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const biodata = await Biodata.findByPk(id);

    if (!biodata) {
      return next({ status: 404, message: "Not Found" });
    }

    if (!req.user) {
      return next({ status: 401, message: "Unauthorized" });
    }

    if (req.user.role === "admin") {
      next();
    } else {
      // console.log(">>> masuk authorization");
      if (req.user.id !== biodata.userId) {
        return next({ status: 403, message: "Forbidden" });
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
