'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentMarkupLandService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentMarkupLandService.init({
    agent_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    markup_type_id: DataTypes.INTEGER,
    is_from_sell_price: DataTypes.INTEGER,
    adult: DataTypes.DOUBLE,
    children: DataTypes.DOUBLE,
    infant: DataTypes.DOUBLE,
    vehicle: DataTypes.DOUBLE,
    remarks: DataTypes.STRING,
    remarks_internal: DataTypes.STRING,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentMarkupLandService',
  });
  return AgentMarkupLandService;
};