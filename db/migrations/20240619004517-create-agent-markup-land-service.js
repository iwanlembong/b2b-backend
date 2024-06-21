'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AgentMarkupLandServices', {
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
      adult: {
        type: Sequelize.DOUBLE
      },
      children: {
        type: Sequelize.DOUBLE
      },
      infant: {
        type: Sequelize.DOUBLE
      },
      vehicle: {
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
    await queryInterface.dropTable('AgentMarkupLandServices');
  }
};