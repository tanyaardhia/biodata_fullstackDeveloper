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
admin.delete("/admin/database/:id", adminAuthorization, AdminController.deleteDatabaseById)
admin.post("/admin/database/search", adminAuthorization, AdminController.searchDatabaseByName)

module.exports = admin;
