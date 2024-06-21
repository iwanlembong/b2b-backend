'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allotment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Allotment.init({
    allotment_main_id: DataTypes.INTEGER,
    allotment_code: DataTypes.STRING,
    allotment_name: DataTypes.STRING,
    hotel_id: DataTypes.INTEGER,
    room_cat_id: DataTypes.INTEGER,
    allotment_date: DataTypes.DATE,
    gen_allot: DataTypes.INTEGER,
    get_cod: DataTypes.INTEGER,
    fix1_allot: DataTypes.INTEGER,
    fix1_cod: DataTypes.INTEGER,
    fix2_allot: DataTypes.INTEGER,
    fix2_code: DataTypes.INTEGER,
    is_close_out: DataTypes.INTEGER,
    is_no_arrival: DataTypes.INTEGER,
    is_no_departure: DataTypes.INTEGER,
    used: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    is_free_sale: DataTypes.INTEGER,
    gen_allot_free_sale: DataTypes.INTEGER,
    init_gen_allot_free_sale: DataTypes.INTEGER,
    is_delete: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allotment',
  });
  return Allotment;
};