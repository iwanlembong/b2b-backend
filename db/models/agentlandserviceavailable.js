'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentLandserviceAvailable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentLandserviceAvailable.init({
    agent_id: DataTypes.INTEGER,
    vendor_id: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentLandserviceAvailable',
  });
  return AgentLandserviceAvailable;
};