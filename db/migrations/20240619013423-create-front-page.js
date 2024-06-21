'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FrontPages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo_name: {
        type: Sequelize.STRING
      },
      logo_title: {
        type: Sequelize.STRING
      },
      left_vendor_id1: {
        type: Sequelize.INTEGER
      },
      left_image_name1: {
        type: Sequelize.STRING
      },
      left_image_title1: {
        type: Sequelize.STRING
      },
      left_vendor_id2: {
        type: Sequelize.INTEGER
      },
      left_image_name2: {
        type: Sequelize.STRING
      },
      left_image_title2: {
        type: Sequelize.STRING
      },
      left_vendor_id3: {
        type: Sequelize.INTEGER
      },
      left_image_name3: {
        type: Sequelize.STRING
      },
      left_image_title3: {
        type: Sequelize.STRING
      },
      left_vendor_id4: {
        type: Sequelize.INTEGER
      },
      left_image_name4: {
        type: Sequelize.STRING
      },
      left_image_title4: {
        type: Sequelize.STRING
      },
      right_vendor_id1: {
        type: Sequelize.INTEGER
      },
      right_image_name1: {
        type: Sequelize.STRING
      },
      right_image_title1: {
        type: Sequelize.STRING
      },
      right_vendor_id2: {
        type: Sequelize.INTEGER
      },
      right_image_name2: {
        type: Sequelize.STRING
      },
      right_image_title2: {
        type: Sequelize.STRING
      },
      right_vendor_id3: {
        type: Sequelize.INTEGER
      },
      right_image_name3: {
        type: Sequelize.STRING
      },
      right_image_title3: {
        type: Sequelize.STRING
      },
      right_vendor_id4: {
        type: Sequelize.INTEGER
      },
      right_image_name4: {
        type: Sequelize.STRING
      },
      right_image_title4: {
        type: Sequelize.STRING
      },
      slider_hotel_id1: {
        type: Sequelize.INTEGER
      },
      slider_image_name1: {
        type: Sequelize.STRING
      },
      slider_image_title1: {
        type: Sequelize.STRING
      },
      slider_hotel_id2: {
        type: Sequelize.INTEGER
      },
      slider_image_name2: {
        type: Sequelize.STRING
      },
      slider_image_title2: {
        type: Sequelize.STRING
      },
      slider_hotel_id3: {
        type: Sequelize.STRING
      },
      slider_image_name3: {
        type: Sequelize.STRING
      },
      slider_image_title3: {
        type: Sequelize.STRING
      },
      slider_hotel_id4: {
        type: Sequelize.STRING
      },
      slider_image_name4: {
        type: Sequelize.STRING
      },
      slider_image_title4: {
        type: Sequelize.STRING
      },
      slider_hotel_id5: {
        type: Sequelize.STRING
      },
      slider_image_name5: {
        type: Sequelize.STRING
      },
      slider_image_title5: {
        type: Sequelize.STRING
      },
      slider_hotel_id6: {
        type: Sequelize.INTEGER
      },
      slider_image_name6: {
        type: Sequelize.STRING
      },
      slider_image_title6: {
        type: Sequelize.STRING
      },
      slider_hotel_id7: {
        type: Sequelize.INTEGER
      },
      slider_image_name7: {
        type: Sequelize.STRING
      },
      slider_image_title7: {
        type: Sequelize.STRING
      },
      slider_hotel_id8: {
        type: Sequelize.INTEGER
      },
      slider_image_name8: {
        type: Sequelize.STRING
      },
      slider_image_title8: {
        type: Sequelize.STRING
      },
      hotel_id1: {
        type: Sequelize.INTEGER
      },
      hotel_image_name1: {
        type: Sequelize.STRING
      },
      hotel_image_title1: {
        type: Sequelize.STRING
      },
      hotel_id2: {
        type: Sequelize.INTEGER
      },
      hotel_image_name2: {
        type: Sequelize.STRING
      },
      hotel_image_title2: {
        type: Sequelize.STRING
      },
      hotel_id3: {
        type: Sequelize.INTEGER
      },
      hotel_image_name3: {
        type: Sequelize.STRING
      },
      hotel_image_title3: {
        type: Sequelize.STRING
      },
      hotel_id4: {
        type: Sequelize.INTEGER
      },
      hotel_image_name4: {
        type: Sequelize.STRING
      },
      hotel_image_title4: {
        type: Sequelize.STRING
      },
      hotel_id5: {
        type: Sequelize.INTEGER
      },
      hotel_image_name5: {
        type: Sequelize.STRING
      },
      hotel_image_title5: {
        type: Sequelize.STRING
      },
      hotel_id6: {
        type: Sequelize.INTEGER
      },
      hotel_image_name6: {
        type: Sequelize.STRING
      },
      hotel_image_title6: {
        type: Sequelize.INTEGER
      },
      hotel_id7: {
        type: Sequelize.INTEGER
      },
      hotel_image_name7: {
        type: Sequelize.STRING
      },
      hotel_image_title7: {
        type: Sequelize.STRING
      },
      hotel_id8: {
        type: Sequelize.INTEGER
      },
      hotel_image_name8: {
        type: Sequelize.STRING
      },
      hotel_image_title8: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('FrontPages');
  }
};