async function adminAuthorization(req, res, next) {
  try {
    console.log(req.user, ">>> user");

    if (req.user.role === "Admin") {
      console.log(req.user, "=== user nih");
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (error) {
    console.log(error, "Admin authorization error");
    next(error);
  }
}

module.exports = adminAuthorization;
