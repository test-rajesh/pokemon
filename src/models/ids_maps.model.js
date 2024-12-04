"use strict";
export default (sequelize, Sequelize) =>
  sequelize.define(
    "ids_map2",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      gift_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 7,
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      player_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      // deleted: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0,
      // },
    },
    {
      tableName: "ids_map2",
    }
  );
