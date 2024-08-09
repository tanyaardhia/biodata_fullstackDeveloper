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

  static async getDataUserById(req, res){
    try {
      const {id} = req.params
      console.log(id, ">> get Id dari Admin Controller")

      const databaseById = await Biodata.findByPk(id)

      if (!databaseById) {
        throw { code: 404, message: "Database Not Found"}
      }
      res.status(200).json(databaseById)
      
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
