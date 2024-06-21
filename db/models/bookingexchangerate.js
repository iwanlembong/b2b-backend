'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingExchangeRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingExchangeRate.init({
    booking_no: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    buying_rate: DataTypes.DOUBLE,
    selling_rate: DataTypes.DOUBLE,
    buying_exchange_rate: DataTypes.DOUBLE,
    selling_exchange_rate: DataTypes.DOUBLE,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingExchangeRate',
  });
  return BookingExchangeRate;
};