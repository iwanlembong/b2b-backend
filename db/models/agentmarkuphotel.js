'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentMarkupHotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentMarkupHotel.init({
    agent_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    markup_type_id: DataTypes.INTEGER,
    is_from_sell_price: DataTypes.INTEGER,
    single_num: DataTypes.DOUBLE,
    double_num: DataTypes.DOUBLE,
    extrabed_num: DataTypes.DOUBLE,
    extrabed_package_num: DataTypes.DOUBLE,
    children_num: DataTypes.DOUBLE,
    infant_num: DataTypes.DOUBLE,
    benefit_num: DataTypes.DOUBLE,
    remarks: DataTypes.STRING,
    remarks_internal: DataTypes.STRING,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentMarkupHotel',
  });
  return AgentMarkupHotel;
};