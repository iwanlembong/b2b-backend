'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agent.init({
    agent_code: DataTypes.STRING,
    agent_name: DataTypes.STRING,
    agent_chinese_name: DataTypes.STRING,
    branch_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    address3: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    fax_no: DataTypes.STRING,
    email: DataTypes.STRING,
    web_url: DataTypes.STRING,
    payment_id: DataTypes.INTEGER,
    credit_day: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    vat_type_id: DataTypes.INTEGER,
    license_no: DataTypes.STRING,
    bank_account: DataTypes.STRING,
    agent_group_id: DataTypes.INTEGER,
    cancel_days: DataTypes.INTEGER,
    service_man: DataTypes.INTEGER,
    sales_handling: DataTypes.INTEGER,
    logo_file_name: DataTypes.STRING,
    active_status: DataTypes.INTEGER,
    active_image: DataTypes.INTEGER,
    agent_type_id: DataTypes.INTEGER,
    bank_status: DataTypes.STRING,
    credit_limit: DataTypes.DOUBLE,
    sales_handling_service: DataTypes.INTEGER,
    api_key: DataTypes.STRING,
    credit_used: DataTypes.DOUBLE,
    region_id: DataTypes.INTEGER,
    sabah_handling: DataTypes.INTEGER,
    transfer_dot_com: DataTypes.INTEGER,
    close_sales: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};