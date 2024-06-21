'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banner.init({
    product_cat_id: DataTypes.INTEGER,
    hotel_vendor_id: DataTypes.INTEGER,
    image_name: DataTypes.STRING,
    image_title: DataTypes.STRING,
    area_id: DataTypes.INTEGER,
    link_address: DataTypes.STRING,
    is_delete: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};