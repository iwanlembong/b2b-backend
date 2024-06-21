'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorizationRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthorizationRole.init({
    login_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    role_update: DataTypes.INTEGER,
    role_insert: DataTypes.INTEGER,
    role_delete: DataTypes.INTEGER,
    role_read: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AuthorizationRole',
  });
  return AuthorizationRole;
};