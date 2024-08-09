const { Biodata, Education, Training, WorkExperience } = require("../models");

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

  static async getDataUserById(req, res) {
    try {
      const { id } = req.params;
      console.log(id, ">> get Id dari Admin Controller");

      const databaseById = await Biodata.findByPk(id);

      if (!databaseById) {
        throw { code: 404, message: "Database Not Found" };
      }
      res.status(200).json(databaseById);
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

  static async updateDatabaseById(req, res) {
    try {
      const { id } = req.params;
      console.log(id, ">> update By Id dari admin controller");
  
      const {
        position,
        name,
        no_ktp,
        birthPlace,
        date_of_birth,
        gender,
        religion,
        blood_type,
        status,
        address_ktp,
        address_residence,
        email,
        no_telp,
        contact_emergency,
        willing_to_be_placed,
        expected_income,
        signature,
        education = [],
        training = [],
        workExperience = [],
      } = req.body;
  
      const biodata = await Biodata.findByPk(id);
      console.log(biodata, ">> update");
      
      if (!biodata) {
        throw { code: 404, message: "Database Not Found" };
      }
    
      await biodata.update({
        position,
        name,
        no_ktp,
        birthPlace,
        date_of_birth,
        gender,
        religion,
        blood_type,
        status,
        address_ktp,
        address_residence,
        email,
        no_telp,
        contact_emergency,
        willing_to_be_placed,
        expected_income,
        signature,
      });
  
      if (education.length > 0) {
        await Education.bulkCreate(
          education.map((edu) => ({
            biodataId: id,
            level_of_education: edu.level_of_education,
            name_institution: edu.name_institution,
            major: edu.major,
            year_graduated: edu.year_graduated,
            grade: edu.grade,
          }))
        );
      }
  
      if (training.length > 0) {
        await Training.bulkCreate(
          training.map((train) => ({
            biodataId: id,
            course_name: train.course_name,
            certificate: train.certificate,
            year: train.year,
          }))
        );
      }
  
      if (workExperience.length > 0) {
        await WorkExperience.bulkCreate(
          workExperience.map((work) => ({
            biodataId: id,
            company_name: work.company_name,
            last_position: work.last_position,
            last_revenue: work.last_revenue,
            year: work.year,
          }))
        );
      }
  
      res.status(200).json({ message: "Database Updated Successfully" });
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
