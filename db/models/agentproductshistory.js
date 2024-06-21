'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentProductsHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentProductsHistory.init({
    agent_id: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    email_date: DataTypes.DATE,
    email_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentProductsHistory',
  });
  return AgentProductsHistory;
};