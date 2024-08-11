async function adminAuthorization(req, res, next) {
  try {
    console.log(req.user, ">>> loginya apa?");

    if (req.user && req.user.role === "admin") {
      // console.log(req.user, "=== role nih");
      next();
    } else {
      // console.log(">> role is not Admin");
      throw { status: 403, message: "You are not authorized" };
    }
  } catch (error) {
    // console.log(error, "Admin authorization error");
    next(error);
  }
}

module.exports = adminAuthorization;
