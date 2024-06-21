'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeekDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WeekDay.init({
    day_names: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WeekDay',
  });
  return WeekDay;
};