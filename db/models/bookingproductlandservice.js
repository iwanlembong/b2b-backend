'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingProductLandservice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingProductLandservice.init({
    booking_no: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    product_cat_id: DataTypes.INTEGER,
    product_cat_name: DataTypes.STRING,
    product_type_id: DataTypes.INTEGER,
    product_type_name: DataTypes.STRING,
    product_name: DataTypes.STRING,
    vendor_id: DataTypes.INTEGER,
    vendor_name: DataTypes.STRING,
    nett_adult_price: DataTypes.DOUBLE,
    nett_child_price: DataTypes.DOUBLE,
    nett_infant_price: DataTypes.DOUBLE,
    nett_curr_id: DataTypes.INTEGER,
    nett_curr_code: DataTypes.STRING,
    vendor_address: DataTypes.STRING,
    vendor_phone: DataTypes.STRING,
    vendor_country: DataTypes.STRING,
    vendor_city: DataTypes.STRING,
    vendor_email_contact: DataTypes.STRING,
    nett_vehicle_price: DataTypes.DOUBLE,
    nett_child2_price: DataTypes.DOUBLE,
    sell_curr_id: DataTypes.INTEGER,
    sell_curr_code: DataTypes.STRING,
    sell_adult_price: DataTypes.DOUBLE,
    sell_child_price: DataTypes.DOUBLE,
    sell_child2_price: DataTypes.DOUBLE,
    sell_infant_price: DataTypes.DOUBLE,
    sell_vehicle_price: DataTypes.DOUBLE,
    image_name: DataTypes.STRING,
    star: DataTypes.INTEGER,
    vendor_code: DataTypes.STRING,
    full_description: DataTypes.STRING,
    booking_arragement_notes: DataTypes.STRING,
    allotment_cid: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingProductLandservice',
  });
  return BookingProductLandservice;
};