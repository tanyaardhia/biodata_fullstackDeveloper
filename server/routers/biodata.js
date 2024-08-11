const express = require("express");
const BiodataController = require("../controllers/userController");
const biodata = express.Router();

biodata.post("/form-biodata", BiodataController.FormulirKaryawan);
biodata.get("/myBiodata/:biodataId", BiodataController.GetBiodataUserById)

module.exports = biodata;
