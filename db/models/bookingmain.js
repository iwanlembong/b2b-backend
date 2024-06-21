'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingMain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingMain.init({
    order_no: DataTypes.STRING,
    file_no: DataTypes.STRING,
    voucher_no: DataTypes.STRING,
    agent_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    arrival_date: DataTypes.DATE,
    departure_date: DataTypes.DATE,
    room_cat_id: DataTypes.INTEGER,
    rate_id: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
    cod: DataTypes.INTEGER,
    booking_status_id: DataTypes.INTEGER,
    original_booking_status_id: DataTypes.INTEGER,
    booking_date: DataTypes.DATE,
    bookedBy: DataTypes.STRING,
    pax_pass_id: DataTypes.INTEGER,
    confirm_number: DataTypes.STRING,
    remarks: DataTypes.STRING,
    remarks_internal: DataTypes.STRING,
    product_cat_id: DataTypes.INTEGER,
    is_complete: DataTypes.INTEGER,
    breakfast_type_id: DataTypes.INTEGER,
    booked_byTMS: DataTypes.INTEGER,
    hotel_pickup: DataTypes.STRING,
    order_main_id: DataTypes.INTEGER,
    including: DataTypes.STRING,
    excluding: DataTypes.STRING,
    agent_booking_no: DataTypes.STRING,
    region_id: DataTypes.INTEGER,
    hotel_drop_off: DataTypes.STRING,
    time_booking: DataTypes.STRING,
    time_confirm: DataTypes.DATE,
    transfer_to_master: DataTypes.INTEGER,
    time_schedule_id: DataTypes.INTEGER,
    time_preferred: DataTypes.STRING,
    promotion_id: DataTypes.INTEGER,
    quotation_id: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
    is_source_land: DataTypes.INTEGER,
    is_already_paid: DataTypes.INTEGER,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingMain',
  });
  return BookingMain;
};