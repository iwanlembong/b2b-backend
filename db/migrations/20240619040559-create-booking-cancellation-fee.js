'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingCancellationFees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_no: {
        type: Sequelize.INTEGER
      },
      currency_id: {
        type: Sequelize.INTEGER
      },
      cancellation_fee: {
        type: Sequelize.DOUBLE
      },
      is_payment: {
        type: Sequelize.INTEGER
      },
      cancel_type_id: {
        type: Sequelize.INTEGER
      },
      cancel_amount: {
        type: Sequelize.DOUBLE
      },
      order_main_id: {
        type: Sequelize.INTEGER
      },
      charge_id: {
        type: Sequelize.INTEGER
      },
      is_manual_insert: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BookingCancellationFees');
  }
};