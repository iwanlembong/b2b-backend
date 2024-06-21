'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingMainUpdated extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingMainUpdated.init({
    booking_no: DataTypes.INTEGER,
    order_no: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingMainUpdated',
  });
  return BookingMainUpdated;
};