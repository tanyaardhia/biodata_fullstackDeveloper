class BiodataController {
  static async FormulirKaryawan(req, res) {
    try {
        res.send("formulirrrrrr")
    } catch (error) {
      console.log(error, ">> regis controller");
      if (error.code && error.message) {
        res.status(error.code).json({ message: error.message });
      } else if (
        error.name === "SequelizeUniqueConstraintError" ||
        error.name === "SequelizeValidationError"
      ) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}

module.exports = BiodataController;