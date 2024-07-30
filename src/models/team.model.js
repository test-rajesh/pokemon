"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Team.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Team",
      tableName: "teams",
    }
  );
  return Team;
};
