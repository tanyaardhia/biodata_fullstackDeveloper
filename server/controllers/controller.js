const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class Contoller {
  static async register(req, res) {
    try {
      const { email, password } = req.body;
      console.log("masuk regis");

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw { code: 400, message: "Email already registered" };
      }

      const newUser = await User.create({ email, password });

      res.status(201).json({
        message: "User registered successfully",
        id: newUser.id,
        email: newUser.email,
      });
    } catch (error) {
      console.log(error, ">> regis controller");
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

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      console.log("masuk login");

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

      console.log(dataLogin, "data login controller");

      const comparedPassword = comparePassword(password, dataLogin.password);
      if (!comparedPassword) {
        throw { code: 401, message: "Invalid email or password" };
      }

      const payload = { id: dataLogin.id };
      const access_token = createToken(payload);
      res.status(200).json({ access_token: access_token });
    } catch (error) {
      console.log(error, ">> regis controller");
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

module.exports = Contoller;
