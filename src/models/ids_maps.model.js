"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class IdsMap2 extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  IdsMap2.init(
    {
      key: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "IdsMap2",
      tableName: "ids_map2",
    }
  );
  return IdsMap2;
};
