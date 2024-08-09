const { Biodata } = require("../models");

class AdminController {
  static async AdminGetDatabase(req, res) {
    try {
      const formulirDatabase = await Biodata.findAll();
      console.log(formulirDatabase, ">> get all dr admin controller");

      res.status(200).json(formulirDatabase);
    } catch (error) {
      console.log(error, ">> FormulirKaryawan controller");
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

module.exports = AdminController;
