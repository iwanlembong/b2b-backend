'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingAddCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingAddCharge.init({
    booking_trx_id: DataTypes.INTEGER,
    charge_id: DataTypes.INTEGER,
    add_charge_description: DataTypes.STRING,
    nett_curr_id: DataTypes.INTEGER,
    nett_room: DataTypes.DOUBLE,
    nett_adult: DataTypes.DOUBLE,
    nett_child: DataTypes.DOUBLE,
    sell_curr_id: DataTypes.INTEGER,
    sell_room: DataTypes.DOUBLE,
    sell_adult: DataTypes.DOUBLE,
    sell_child: DataTypes.DOUBLE,
    is_compulsary: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingAddCharge',
  });
  return BookingAddCharge;
};