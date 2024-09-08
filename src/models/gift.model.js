"use strict";
export default (sequelize, Sequelize) =>
  sequelize.define(
    "giftaction",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      abbreviation: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      deleted: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "giftaction",
    }
  );
