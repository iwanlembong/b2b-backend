'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentCountryHandling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentCountryHandling.init({
    agent_country_id: DataTypes.INTEGER,
    agent_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    remarks_internal: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentCountryHandling',
  });
  return AgentCountryHandling;
};