"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class GiftAction extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  GiftAction.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GiftAction",
      tableName: "giftactions",
    }
  );
  return GiftAction;
};
