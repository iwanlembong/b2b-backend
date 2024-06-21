'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AgentMarkupHotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent_id: {
        type: Sequelize.INTEGER
      },
      currency_id: {
        type: Sequelize.INTEGER
      },
      markup_type_id: {
        type: Sequelize.INTEGER
      },
      is_from_sell_price: {
        type: Sequelize.INTEGER
      },
      single_num: {
        type: Sequelize.DOUBLE
      },
      double_num: {
        type: Sequelize.DOUBLE
      },
      extrabed_num: {
        type: Sequelize.DOUBLE
      },
      extrabed_package_num: {
        type: Sequelize.DOUBLE
      },
      children_num: {
        type: Sequelize.DOUBLE
      },
      infant_num: {
        type: Sequelize.DOUBLE
      },
      benefit_num: {
        type: Sequelize.DOUBLE
      },
      remarks: {
        type: Sequelize.STRING
      },
      remarks_internal: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('AgentMarkupHotels');
  }
};