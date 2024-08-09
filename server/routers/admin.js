const express = require("express");
const AdminController = require("../controllers/adminController");
const adminAuthorization = require("../middlewares/adminAuthorization");
const admin = express.Router();

admin.get(
  "/admin/database", 
  adminAuthorization,
  AdminController.AdminGetDatabase
);
admin.get("/admin/database/:id", adminAuthorization, AdminController.getDataUserById)
admin.put("/admin/database/edit/:id", adminAuthorization, AdminController.updateDatabaseById)

module.exports = admin;
