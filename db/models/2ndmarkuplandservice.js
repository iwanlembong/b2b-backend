'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class 2n dMarkupLandservice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  2n dMarkupLandservice.init({
    markup_id: DataTypes.INTEGER,
    tariff_id: DataTypes.INTEGER,
    markup_type_id: DataTypes.INTEGER,
    markup_currency_id: DataTypes.INTEGER,
    markup_adult: DataTypes.DOUBLE,
    markup_child: DataTypes.DOUBLE,
    markup_child2: DataTypes.DOUBLE,
    markup_infant: DataTypes.DOUBLE,
    markup_vehicle: DataTypes.DOUBLE,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: '2ndMarkupLandservice',
  });
  return 2n dMarkupLandservice;
};