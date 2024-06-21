'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivityLogUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivityLogUser.init({
    activity: DataTypes.STRING,
    username: DataTypes.STRING,
    page_url: DataTypes.STRING,
    ip_user: DataTypes.STRING,
    activity_date: DataTypes.DATE,
    booking_no: DataTypes.STRING,
    booking_status_id: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ActivityLogUser',
  });
  return ActivityLogUser;
};