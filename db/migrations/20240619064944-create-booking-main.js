'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingMains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_no: {
        type: Sequelize.STRING
      },
      file_no: {
        type: Sequelize.STRING
      },
      voucher_no: {
        type: Sequelize.STRING
      },
      agent_id: {
        type: Sequelize.INTEGER
      },
      hotel_id: {
        type: Sequelize.INTEGER
      },
      arrival_date: {
        type: Sequelize.DATE
      },
      departure_date: {
        type: Sequelize.DATE
      },
      room_cat_id: {
        type: Sequelize.INTEGER
      },
      rate_id: {
        type: Sequelize.INTEGER
      },
      total_room: {
        type: Sequelize.INTEGER
      },
      cod: {
        type: Sequelize.INTEGER
      },
      booking_status_id: {
        type: Sequelize.INTEGER
      },
      original_booking_status_id: {
        type: Sequelize.INTEGER
      },
      booking_date: {
        type: Sequelize.DATE
      },
      bookedBy: {
        type: Sequelize.STRING
      },
      pax_pass_id: {
        type: Sequelize.INTEGER
      },
      confirm_number: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      remarks_internal: {
        type: Sequelize.STRING
      },
      product_cat_id: {
        type: Sequelize.INTEGER
      },
      is_complete: {
        type: Sequelize.INTEGER
      },
      breakfast_type_id: {
        type: Sequelize.INTEGER
      },
      booked_byTMS: {
        type: Sequelize.INTEGER
      },
      hotel_pickup: {
        type: Sequelize.STRING
      },
      order_main_id: {
        type: Sequelize.INTEGER
      },
      including: {
        type: Sequelize.STRING
      },
      excluding: {
        type: Sequelize.STRING
      },
      agent_booking_no: {
        type: Sequelize.STRING
      },
      region_id: {
        type: Sequelize.INTEGER
      },
      hotel_drop_off: {
        type: Sequelize.STRING
      },
      time_booking: {
        type: Sequelize.STRING
      },
      time_confirm: {
        type: Sequelize.DATE
      },
      transfer_to_master: {
        type: Sequelize.INTEGER
      },
      time_schedule_id: {
        type: Sequelize.INTEGER
      },
      time_preferred: {
        type: Sequelize.STRING
      },
      promotion_id: {
        type: Sequelize.INTEGER
      },
      quotation_id: {
        type: Sequelize.INTEGER
      },
      days: {
        type: Sequelize.INTEGER
      },
      is_source_land: {
        type: Sequelize.INTEGER
      },
      is_already_paid: {
        type: Sequelize.INTEGER
      },
      is_delete: {
        type: Sequelize.INTEGER
      },
      createdBy: {
        type: Sequelize.STRING
      },
      updatedBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookingMains');
  }
};