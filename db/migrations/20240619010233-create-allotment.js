'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Allotments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      allotment_main_id: {
        type: Sequelize.INTEGER
      },
      allotment_code: {
        type: Sequelize.STRING
      },
      allotment_name: {
        type: Sequelize.STRING
      },
      hotel_id: {
        type: Sequelize.INTEGER
      },
      room_cat_id: {
        type: Sequelize.INTEGER
      },
      allotment_date: {
        type: Sequelize.DATE
      },
      gen_allot: {
        type: Sequelize.INTEGER
      },
      get_cod: {
        type: Sequelize.INTEGER
      },
      fix1_allot: {
        type: Sequelize.INTEGER
      },
      fix1_cod: {
        type: Sequelize.INTEGER
      },
      fix2_allot: {
        type: Sequelize.INTEGER
      },
      fix2_code: {
        type: Sequelize.INTEGER
      },
      is_close_out: {
        type: Sequelize.INTEGER
      },
      is_no_arrival: {
        type: Sequelize.INTEGER
      },
      is_no_departure: {
        type: Sequelize.INTEGER
      },
      used: {
        type: Sequelize.INTEGER
      },
      is_active: {
        type: Sequelize.INTEGER
      },
      region_id: {
        type: Sequelize.INTEGER
      },
      is_free_sale: {
        type: Sequelize.INTEGER
      },
      gen_allot_free_sale: {
        type: Sequelize.INTEGER
      },
      init_gen_allot_free_sale: {
        type: Sequelize.INTEGER
      },
      is_delete: {
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
    await queryInterface.dropTable('Allotments');
  }
};