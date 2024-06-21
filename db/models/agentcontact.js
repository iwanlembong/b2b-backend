'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentContact.init({
    contact_id: DataTypes.INTEGER,
    agent_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    email: DataTypes.STRING,
    fax: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    is_document_received: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER,
    level_access: DataTypes.INTEGER,
    last_logged_in: DataTypes.DATE,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgentContact',
  });
  return AgentContact;
};