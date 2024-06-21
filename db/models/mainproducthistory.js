'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainProductHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainProductHistory.init({
    list_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    date_from: DataTypes.DATE,
    date_to: DataTypes.DATE,
    product_cat_id: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    simillar_name: DataTypes.STRING,
    remarks: DataTypes.STRING,
    task_name: DataTypes.STRING,
    taskBy: DataTypes.STRING,
    task_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MainProductHistory',
  });
  return MainProductHistory;
};