'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingCancellationFee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingCancellationFee.init({
    booking_no: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    cancellation_fee: DataTypes.DOUBLE,
    is_payment: DataTypes.INTEGER,
    cancel_type_id: DataTypes.INTEGER,
    cancel_amount: DataTypes.DOUBLE,
    order_main_id: DataTypes.INTEGER,
    charge_id: DataTypes.INTEGER,
    is_manual_insert: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingCancellationFee',
  });
  return BookingCancellationFee;
};