const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class AuthContoller {
  static async UserRegister(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log("masuk regis");

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw { code: 400, message: "Email already registered" };
      }

      const newUser = await User.create({ email, password, role: "user" });

      res.status(201).json({
        message: "User registered successfully",
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      });
    } catch (error) {
      console.log(error, ">> regis controller");
      next(error);
    }
  }

  static async AdminRegister(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log("masuk regis");

      const existingAdmin = await User.findOne({ where: { email } });
      if (existingAdmin) {
        throw { code: 400, message: "Email already registered" };
      }

      const newAdmin = await User.create({ email, password, role: "admin" });

      res.status(201).json({
        message: "User registered successfully",
        id: newAdmin.id,
        email: newAdmin.email,
        role: newAdmin.role,
      });
    } catch (error) {
      console.log(error, ">> regis controller");
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // console.log("masuk login");

      if (!email) {
        throw { code: 400, message: "Email is required" };
      }

      if (!password) {
        throw { code: 400, message: "Password is required" };
      }

      const dataLogin = await User.findOne({ where: { email } });
      if (!dataLogin) {
        throw { code: 401, message: "Invalid email or password" };
      }

      // console.log(dataLogin, "data login controller");

      const comparedPassword = comparePassword(password, dataLogin.password);
      if (!comparedPassword) {
        throw { code: 401, message: "Invalid email or password" };
      }

      const payload = { id: dataLogin.id };
      const access_token = createToken(payload);
      res.status(200).json({ access_token: access_token, role: dataLogin.role, id: dataLogin.id });
    } catch (error) {
      console.log(error, ">> regis controller");
      next(error);
    }
  }
}

module.exports = AuthContoller;
