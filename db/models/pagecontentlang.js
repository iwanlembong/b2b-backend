'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PageContentLang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PageContentLang.init({
    content_id: DataTypes.INTEGER,
    content_left: DataTypes.STRING,
    content_right: DataTypes.STRING,
    language_id: DataTypes.INTEGER,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PageContentLang',
  });
  return PageContentLang;
};