'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authorization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Authorization.init({
    login_user_name: DataTypes.STRING,
    login_user_password: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
    login_name: DataTypes.STRING,
    login_chinese_name: DataTypes.STRING,
    login_email: DataTypes.STRING,
    login_company_name: DataTypes.STRING,
    login_dept_id: DataTypes.INTEGER,
    access_bo: DataTypes.INTEGER,
    access_ext: DataTypes.INTEGER,
    access_b2b: DataTypes.INTEGER,
    login_role_id: DataTypes.INTEGER,
    login_status: DataTypes.INTEGER,
    login_active: DataTypes.INTEGER,
    last_logged_in: DataTypes.DATE,
    login_branch_id: DataTypes.INTEGER,
    owner: DataTypes.STRING,
    is_sales_markup: DataTypes.INTEGER,
    is_2nd_markup: DataTypes.INTEGER,
    is_blocked: DataTypes.INTEGER,
    is_released: DataTypes.INTEGER,
    is_approve_land: DataTypes.INTEGER,
    is_final_approve_land: DataTypes.INTEGER,
    is_approve_hotel: DataTypes.INTEGER,
    is_final_approve_hotel: DataTypes.INTEGER,
    is_markup_extend: DataTypes.INTEGER,
    is_read_price_booking: DataTypes.INTEGER,
    is_address: DataTypes.STRING,
    export_excel: DataTypes.STRING,
    images: DataTypes.STRING,
    is_status_channel: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authorization',
  });
  return Authorization;
};