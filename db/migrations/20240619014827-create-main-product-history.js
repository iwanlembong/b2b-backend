'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MainProductHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      list_id: {
        type: Sequelize.INTEGER
      },
      hotel_id: {
        type: Sequelize.INTEGER
      },
      date_from: {
        type: Sequelize.DATE
      },
      date_to: {
        type: Sequelize.DATE
      },
      product_cat_id: {
        type: Sequelize.INTEGER
      },
      tariff_id: {
        type: Sequelize.INTEGER
      },
      simillar_name: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      task_name: {
        type: Sequelize.STRING
      },
      taskBy: {
        type: Sequelize.STRING
      },
      task_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('MainProductHistories');
  }
};