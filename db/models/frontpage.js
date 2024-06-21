'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FrontPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FrontPage.init({
    logo_name: DataTypes.STRING,
    logo_title: DataTypes.STRING,
    left_vendor_id1: DataTypes.INTEGER,
    left_image_name1: DataTypes.STRING,
    left_image_title1: DataTypes.STRING,
    left_vendor_id2: DataTypes.INTEGER,
    left_image_name2: DataTypes.STRING,
    left_image_title2: DataTypes.STRING,
    left_vendor_id3: DataTypes.INTEGER,
    left_image_name3: DataTypes.STRING,
    left_image_title3: DataTypes.STRING,
    left_vendor_id4: DataTypes.INTEGER,
    left_image_name4: DataTypes.STRING,
    left_image_title4: DataTypes.STRING,
    right_vendor_id1: DataTypes.INTEGER,
    right_image_name1: DataTypes.STRING,
    right_image_title1: DataTypes.STRING,
    right_vendor_id2: DataTypes.INTEGER,
    right_image_name2: DataTypes.STRING,
    right_image_title2: DataTypes.STRING,
    right_vendor_id3: DataTypes.INTEGER,
    right_image_name3: DataTypes.STRING,
    right_image_title3: DataTypes.STRING,
    right_vendor_id4: DataTypes.INTEGER,
    right_image_name4: DataTypes.STRING,
    right_image_title4: DataTypes.STRING,
    slider_hotel_id1: DataTypes.INTEGER,
    slider_image_name1: DataTypes.STRING,
    slider_image_title1: DataTypes.STRING,
    slider_hotel_id2: DataTypes.INTEGER,
    slider_image_name2: DataTypes.STRING,
    slider_image_title2: DataTypes.STRING,
    slider_hotel_id3: DataTypes.STRING,
    slider_image_name3: DataTypes.STRING,
    slider_image_title3: DataTypes.STRING,
    slider_hotel_id4: DataTypes.STRING,
    slider_image_name4: DataTypes.STRING,
    slider_image_title4: DataTypes.STRING,
    slider_hotel_id5: DataTypes.STRING,
    slider_image_name5: DataTypes.STRING,
    slider_image_title5: DataTypes.STRING,
    slider_hotel_id6: DataTypes.INTEGER,
    slider_image_name6: DataTypes.STRING,
    slider_image_title6: DataTypes.STRING,
    slider_hotel_id7: DataTypes.INTEGER,
    slider_image_name7: DataTypes.STRING,
    slider_image_title7: DataTypes.STRING,
    slider_hotel_id8: DataTypes.INTEGER,
    slider_image_name8: DataTypes.STRING,
    slider_image_title8: DataTypes.STRING,
    hotel_id1: DataTypes.INTEGER,
    hotel_image_name1: DataTypes.STRING,
    hotel_image_title1: DataTypes.STRING,
    hotel_id2: DataTypes.INTEGER,
    hotel_image_name2: DataTypes.STRING,
    hotel_image_title2: DataTypes.STRING,
    hotel_id3: DataTypes.INTEGER,
    hotel_image_name3: DataTypes.STRING,
    hotel_image_title3: DataTypes.STRING,
    hotel_id4: DataTypes.INTEGER,
    hotel_image_name4: DataTypes.STRING,
    hotel_image_title4: DataTypes.STRING,
    hotel_id5: DataTypes.INTEGER,
    hotel_image_name5: DataTypes.STRING,
    hotel_image_title5: DataTypes.STRING,
    hotel_id6: DataTypes.INTEGER,
    hotel_image_name6: DataTypes.STRING,
    hotel_image_title6: DataTypes.INTEGER,
    hotel_id7: DataTypes.INTEGER,
    hotel_image_name7: DataTypes.STRING,
    hotel_image_title7: DataTypes.STRING,
    hotel_id8: DataTypes.INTEGER,
    hotel_image_name8: DataTypes.STRING,
    hotel_image_title8: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FrontPage',
  });
  return FrontPage;
};