async function adminAuthorization(req, res, next) {
  try {
    console.log(req.user, ">>> loginya apa?");

    if (req.user && req.user.role === "admin") {
      console.log(req.user, "=== role nih");
      next();
    } else {
      console.log(">> role is not Admin");
      throw { message: "Forbidden" };
    }
  } catch (error) {
    console.log(error, "Admin authorization error");
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = adminAuthorization;
