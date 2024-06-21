'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingAddChargeOptionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_no: {
        type: Sequelize.INTEGER
      },
      charge_id: {
        type: Sequelize.INTEGER
      },
      charge_description: {
        type: Sequelize.STRING
      },
      room_no: {
        type: Sequelize.INTEGER
      },
      day_of_date: {
        type: Sequelize.DATE
      },
      nett_curr_id: {
        type: Sequelize.INTEGER
      },
      nett_room: {
        type: Sequelize.DOUBLE
      },
      nett_adult: {
        type: Sequelize.DOUBLE
      },
      nett_child: {
        type: Sequelize.DOUBLE
      },
      sell_curr_id: {
        type: Sequelize.INTEGER
      },
      sell_room: {
        type: Sequelize.DOUBLE
      },
      sell_adult: {
        type: Sequelize.DOUBLE
      },
      sell_child: {
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
    await queryInterface.dropTable('BookingAddChargeOptionals');
  }
};