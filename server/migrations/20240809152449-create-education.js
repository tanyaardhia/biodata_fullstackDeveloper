"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Education", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      level_of_education: {
        type: Sequelize.STRING,
      },
      name_institution: {
        type: Sequelize.STRING,
      },
      major: {
        type: Sequelize.STRING,
      },
      year_graduated: {
        type: Sequelize.STRING,
      },
      grade: {
        type: Sequelize.STRING,
      },
      biodataId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Biodata",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Education");
  },
};
