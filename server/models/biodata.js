"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Biodata.hasMany(models.Education, {
        foreignKey: "biodataId",
      });
      Biodata.hasMany(models.Training, {
        foreignKey: "biodataId",
      });
      Biodata.hasMany(models.WorkExperience, {
        foreignKey: "biodataId",
      });
    }
  }
  Biodata.init(
    {
      position: DataTypes.STRING,
      name: DataTypes.STRING,
      no_ktp: DataTypes.STRING,
      birthPlace: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      gender: DataTypes.STRING,
      religion: DataTypes.STRING,
      blood_type: DataTypes.STRING,
      status: DataTypes.STRING,
      address_ktp: DataTypes.STRING,
      address_residence: DataTypes.STRING,
      email: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      contact_emergency: DataTypes.STRING,
      willing_to_be_placed: DataTypes.STRING,
      expected_income: DataTypes.INTEGER,
      signature: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Biodata",
    }
  );
  return Biodata;
};
