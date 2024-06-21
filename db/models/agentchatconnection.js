'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentChatConnection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentChatConnection.init({
    agent_connection_id: DataTypes.STRING,
    agent_name: DataTypes.STRING,
    connected: DataTypes.INTEGER,
    date_connection: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AgentChatConnection',
  });
  return AgentChatConnection;
};