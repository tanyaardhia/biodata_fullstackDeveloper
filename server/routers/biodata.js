const express = require("express");
const BiodataController = require("../controllers/userController");
const biodata = express.Router();

biodata.post("/form-biodata", BiodataController.FormulirKaryawan);

module.exports = biodata;
