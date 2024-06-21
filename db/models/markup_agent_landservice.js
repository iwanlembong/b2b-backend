'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Markup_Agent_LandService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Markup_Agent_LandService.init({
    markup_id: DataTypes.INTEGER,
    vendor_id: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Markup_Agent_LandService',
  });
  return Markup_Agent_LandService;
};