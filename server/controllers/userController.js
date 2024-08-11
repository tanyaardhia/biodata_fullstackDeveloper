const { Biodata, Education, Training, WorkExperience } = require("../models");

class BiodataController {
  static async FormulirKaryawan(req, res, next) {
    try {
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
        skill,
        no_telp,
        contact_emergency,
        willing_to_be_placed,
        expected_income,
        signature,
        education = [],
        training = [],
        workExperience = [],
      } = req.body;

      console.log(req.body, "ID formulier");

      const biodata = await Biodata.create({
        userId: req.user.id,
        position,
        name,
        no_ktp,
        birthPlace,
        date_of_birth,
        gender,
        religion,
        skill,
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

      // console.log(biodata, ">> usercontrollers");

      if (education.length > 0) {
        await Education.bulkCreate(
          education.map((edu) => ({
            biodataId: biodata.id,
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
            biodataId: biodata.id,
            course_name: train.course_name,
            certificate: train.certificate,
            year: train.year,
          }))
        );
      }

      if (workExperience.length > 0) {
        await WorkExperience.bulkCreate(
          workExperience.map((work) => ({
            biodataId: biodata.id,
            company_name: work.company_name,
            last_position: work.last_position,
            last_revenue: work.last_revenue,
            year: work.year,
          }))
        );
      }

      res.status(201).json({ message: "form successfully created!" });
    } catch (error) {
      next(error);
    }
  }

  static async GetBiodataUserById(req, res, next) {
    try {
      const { biodataId } = req.params;
      console.log(biodataId, ">>>>>>>>>. biodata user by id");

      if (!req.user || !req.user.id) {
        throw { code: 401, message: "Unauthorized" };
      }

      const databaseById = await Biodata.findByPk(biodataId, {
        include: [
          { model: Education },
          { model: Training },
          { model: WorkExperience },
        ],
      });

      if (!databaseById) {
        throw { code: 404, message: "Database Not Found" };
      }

      if (req.user.id !== databaseById.userId) {
        throw { code: 403, message: "Forbidden" };
      }

      res
        .status(200)
        .json({ biodata_id: databaseById.id, biodata: databaseById });
    } catch (error) {
      console.log(error, ">> get biodata id user");
      next(error);
    }
  }
}

module.exports = BiodataController;
