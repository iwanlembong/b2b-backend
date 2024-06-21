'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingProductLandservices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_no: {
        type: Sequelize.INTEGER
      },
      tariff_id: {
        type: Sequelize.INTEGER
      },
      product_cat_id: {
        type: Sequelize.INTEGER
      },
      product_cat_name: {
        type: Sequelize.STRING
      },
      product_type_id: {
        type: Sequelize.INTEGER
      },
      product_type_name: {
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      },
      vendor_id: {
        type: Sequelize.INTEGER
      },
      vendor_name: {
        type: Sequelize.STRING
      },
      nett_adult_price: {
        type: Sequelize.DOUBLE
      },
      nett_child_price: {
        type: Sequelize.DOUBLE
      },
      nett_infant_price: {
        type: Sequelize.DOUBLE
      },
      nett_curr_id: {
        type: Sequelize.INTEGER
      },
      nett_curr_code: {
        type: Sequelize.STRING
      },
      vendor_address: {
        type: Sequelize.STRING
      },
      vendor_phone: {
        type: Sequelize.STRING
      },
      vendor_country: {
        type: Sequelize.STRING
      },
      vendor_city: {
        type: Sequelize.STRING
      },
      vendor_email_contact: {
        type: Sequelize.STRING
      },
      nett_vehicle_price: {
        type: Sequelize.DOUBLE
      },
      nett_child2_price: {
        type: Sequelize.DOUBLE
      },
      sell_curr_id: {
        type: Sequelize.INTEGER
      },
      sell_curr_code: {
        type: Sequelize.STRING
      },
      sell_adult_price: {
        type: Sequelize.DOUBLE
      },
      sell_child_price: {
        type: Sequelize.DOUBLE
      },
      sell_child2_price: {
        type: Sequelize.DOUBLE
      },
      sell_infant_price: {
        type: Sequelize.DOUBLE
      },
      sell_vehicle_price: {
        type: Sequelize.DOUBLE
      },
      image_name: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.INTEGER
      },
      vendor_code: {
        type: Sequelize.STRING
      },
      full_description: {
        type: Sequelize.STRING
      },
      booking_arragement_notes: {
        type: Sequelize.STRING
      },
      allotment_cid: {
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
    await queryInterface.dropTable('BookingProductLandservices');
  }
};