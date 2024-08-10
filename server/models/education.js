"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Education.belongsTo(models.Biodata, {
        foreignKey: "biodataId",
      });
    }
  }
  Education.init(
    {
      level_of_education: DataTypes.STRING,
      name_institution: DataTypes.STRING,
      major: DataTypes.STRING,
      year_graduated: DataTypes.STRING,
      grade: DataTypes.STRING,
      biodataId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
