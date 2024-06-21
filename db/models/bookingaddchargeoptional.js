'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingAddChargeOptional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingAddChargeOptional.init({
    booking_no: DataTypes.INTEGER,
    charge_id: DataTypes.INTEGER,
    charge_description: DataTypes.STRING,
    room_no: DataTypes.INTEGER,
    day_of_date: DataTypes.DATE,
    nett_curr_id: DataTypes.INTEGER,
    nett_room: DataTypes.DOUBLE,
    nett_adult: DataTypes.DOUBLE,
    nett_child: DataTypes.DOUBLE,
    sell_curr_id: DataTypes.INTEGER,
    sell_room: DataTypes.DOUBLE,
    sell_adult: DataTypes.DOUBLE,
    sell_child: DataTypes.DOUBLE,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingAddChargeOptional',
  });
  return BookingAddChargeOptional;
};