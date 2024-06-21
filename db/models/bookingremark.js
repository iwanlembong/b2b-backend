'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingRemark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingRemark.init({
    booking_no: DataTypes.INTEGER,
    remarks_id: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    remarks_internal: DataTypes.STRING,
    language_id: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingRemark',
  });
  return BookingRemark;
};