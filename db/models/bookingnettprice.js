'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingNettPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingNettPrice.init({
    booking_no: DataTypes.INTEGER,
    nett_price: DataTypes.DOUBLE,
    selling_price: DataTypes.DOUBLE,
    promo_id: DataTypes.INTEGER,
    charge_value: DataTypes.DOUBLE,
    org_nett_price_ex_promo: DataTypes.DOUBLE,
    discount_Type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookingNettPrice',
  });
  return BookingNettPrice;
};