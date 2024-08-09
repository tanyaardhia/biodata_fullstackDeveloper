"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WorkExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkExperience.belongsTo(models.Biodata, {
        foreignKey: "biodataId",
      });
    }
  }
  WorkExperience.init(
    {
      company_name: DataTypes.STRING,
      last_position: DataTypes.STRING,
      last_revenue: DataTypes.INTEGER,
      year: DataTypes.DATE,
      biodataId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "WorkExperience",
    }
  );
  return WorkExperience;
};
