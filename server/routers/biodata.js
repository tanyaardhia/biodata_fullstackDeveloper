const express = require("express");
const BiodataController = require("../controllers/userController");
const biodata = express.Router();

biodata.post("/form-biodata", BiodataController.FormulirKaryawan);
biodata.get("/my-data", BiodataController.GetDatabase);
biodata.get("/my-data/formulir/:biodataId", BiodataController.GetBiodataUserById);

module.exports = biodata;
