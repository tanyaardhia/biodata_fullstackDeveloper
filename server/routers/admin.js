const express = require("express");
const AdminController = require("../controllers/adminController");
const adminAuthorization = require("../middlewares/adminAuthorization");
const admin = express.Router();

admin.get(
  "/admin/database",
  adminAuthorization,
  AdminController.AdminGetDatabase
);

module.exports = admin;
