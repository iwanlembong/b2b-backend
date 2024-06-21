'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent_code: {
        type: Sequelize.STRING
      },
      agent_name: {
        type: Sequelize.STRING
      },
      agent_chinese_name: {
        type: Sequelize.STRING
      },
      branch_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      city_id: {
        type: Sequelize.INTEGER
      },
      address1: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      address3: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      fax_no: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      web_url: {
        type: Sequelize.STRING
      },
      payment_id: {
        type: Sequelize.INTEGER
      },
      credit_day: {
        type: Sequelize.INTEGER
      },
      currency_id: {
        type: Sequelize.INTEGER
      },
      vat_type_id: {
        type: Sequelize.INTEGER
      },
      license_no: {
        type: Sequelize.STRING
      },
      bank_account: {
        type: Sequelize.STRING
      },
      agent_group_id: {
        type: Sequelize.INTEGER
      },
      cancel_days: {
        type: Sequelize.INTEGER
      },
      service_man: {
        type: Sequelize.INTEGER
      },
      sales_handling: {
        type: Sequelize.INTEGER
      },
      logo_file_name: {
        type: Sequelize.STRING
      },
      active_status: {
        type: Sequelize.INTEGER
      },
      active_image: {
        type: Sequelize.INTEGER
      },
      agent_type_id: {
        type: Sequelize.INTEGER
      },
      bank_status: {
        type: Sequelize.STRING
      },
      credit_limit: {
        type: Sequelize.DOUBLE
      },
      sales_handling_service: {
        type: Sequelize.INTEGER
      },
      api_key: {
        type: Sequelize.STRING
      },
      credit_used: {
        type: Sequelize.DOUBLE
      },
      region_id: {
        type: Sequelize.INTEGER
      },
      sabah_handling: {
        type: Sequelize.INTEGER
      },
      transfer_dot_com: {
        type: Sequelize.INTEGER
      },
      close_sales: {
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
    await queryInterface.dropTable('Agents');
  }
};