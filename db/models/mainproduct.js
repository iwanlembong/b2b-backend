'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainProduct.init({
    hotel_id: DataTypes.INTEGER,
    date_from: DataTypes.DATE,
    date_to: DataTypes.DATE,
    product_cat_id: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    simillar_name: DataTypes.STRING,
    iamge_name: DataTypes.STRING,
    image_text: DataTypes.STRING,
    remarks: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MainProduct',
  });
  return MainProduct;
};