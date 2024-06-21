'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingNettPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_no: {
        type: Sequelize.INTEGER
      },
      nett_price: {
        type: Sequelize.DOUBLE
      },
      selling_price: {
        type: Sequelize.DOUBLE
      },
      promo_id: {
        type: Sequelize.INTEGER
      },
      charge_value: {
        type: Sequelize.DOUBLE
      },
      org_nett_price_ex_promo: {
        type: Sequelize.DOUBLE
      },
      discount_Type_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BookingNettPrices');
  }
};