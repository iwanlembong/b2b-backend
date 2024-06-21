'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_cat_id: {
        type: Sequelize.INTEGER
      },
      hotel_vendor_id: {
        type: Sequelize.INTEGER
      },
      image_name: {
        type: Sequelize.STRING
      },
      image_title: {
        type: Sequelize.STRING
      },
      area_id: {
        type: Sequelize.INTEGER
      },
      link_address: {
        type: Sequelize.STRING
      },
      is_delete: {
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
    await queryInterface.dropTable('Banners');
  }
};