'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainProductLang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainProductLang.init({
    product_id: DataTypes.INTEGER,
    simillar_name: DataTypes.STRING,
    remarks: DataTypes.STRING,
    lang_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MainProductLang',
  });
  return MainProductLang;
};