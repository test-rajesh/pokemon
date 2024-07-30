"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Country.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
      tableName: "countries", // Explicitly specify the table name
    }
  );
  return Country;
};
