'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authorizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login_user_name: {
        type: Sequelize.STRING
      },
      login_user_password: {
        type: Sequelize.STRING
      },
      refresh_token: {
        type: Sequelize.STRING
      },
      login_name: {
        type: Sequelize.STRING
      },
      login_chinese_name: {
        type: Sequelize.STRING
      },
      login_email: {
        type: Sequelize.STRING
      },
      login_company_name: {
        type: Sequelize.STRING
      },
      login_dept_id: {
        type: Sequelize.INTEGER
      },
      access_bo: {
        type: Sequelize.INTEGER
      },
      access_ext: {
        type: Sequelize.INTEGER
      },
      access_b2b: {
        type: Sequelize.INTEGER
      },
      login_role_id: {
        type: Sequelize.INTEGER
      },
      login_status: {
        type: Sequelize.INTEGER
      },
      login_active: {
        type: Sequelize.INTEGER
      },
      last_logged_in: {
        type: Sequelize.DATE
      },
      login_branch_id: {
        type: Sequelize.INTEGER
      },
      owner: {
        type: Sequelize.STRING
      },
      is_sales_markup: {
        type: Sequelize.INTEGER
      },
      is_2nd_markup: {
        type: Sequelize.INTEGER
      },
      is_blocked: {
        type: Sequelize.INTEGER
      },
      is_released: {
        type: Sequelize.INTEGER
      },
      is_approve_land: {
        type: Sequelize.INTEGER
      },
      is_final_approve_land: {
        type: Sequelize.INTEGER
      },
      is_approve_hotel: {
        type: Sequelize.INTEGER
      },
      is_final_approve_hotel: {
        type: Sequelize.INTEGER
      },
      is_markup_extend: {
        type: Sequelize.INTEGER
      },
      is_read_price_booking: {
        type: Sequelize.INTEGER
      },
      is_address: {
        type: Sequelize.STRING
      },
      export_excel: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      is_status_channel: {
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
    await queryInterface.dropTable('Authorizations');
  }
};