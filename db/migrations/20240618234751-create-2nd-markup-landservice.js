'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('2ndMarkupLandservices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      markup_id: {
        type: Sequelize.INTEGER
      },
      tariff_id: {
        type: Sequelize.INTEGER
      },
      markup_type_id: {
        type: Sequelize.INTEGER
      },
      markup_currency_id: {
        type: Sequelize.INTEGER
      },
      markup_adult: {
        type: Sequelize.DOUBLE
      },
      markup_child: {
        type: Sequelize.DOUBLE
      },
      markup_child2: {
        type: Sequelize.DOUBLE
      },
      markup_infant: {
        type: Sequelize.DOUBLE
      },
      markup_vehicle: {
        type: Sequelize.DOUBLE
      },
      createdBy: {
        type: Sequelize.STRING
      },
      updatedBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('2ndMarkupLandservices');
  }
};