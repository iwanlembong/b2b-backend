'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingPromo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingPromo.init({
    booking_no: DataTypes.INTEGER,
    promotion_id: DataTypes.INTEGER,
    promotion_label: DataTypes.STRING,
    promotion_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingPromo',
  });
  return BookingPromo;
};