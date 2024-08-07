"use strict";
import { Sequelize } from "sequelize";
import country from "./country.model";
import gift from "./gift.model";
import ids_maps from "./ids_maps.model";
import team from "./team.model";
import { config } from "@/config";
import mysql2 from "mysql2";

// Initialize Sequelize
const sequelize = new Sequelize(
  config.MYSQL_DB_NAME,
  config.MYSQL_USERNAME,
  config.MYSQL_PASSWORD,
  {
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    dialect: "mysql",
    dialectModule: mysql2, // Ensure mysql2 is properly required and passed
    logging: false,
    dialectOptions: {
      charset: "utf8mb4",
    },
    define: {
      underscored: true,
      timestamps: false,
      // createdAt: "created_at",
      // updatedAt: "updated_at",
      // deletedAt: "deleted_at",
      paranoid: true,
    },
  }
);

// Define models
const CountryModel = country(sequelize, Sequelize);
const GiftModel = gift(sequelize, Sequelize);
const IdsMapModel = ids_maps(sequelize, Sequelize);
const TeamModel = team(sequelize, Sequelize);

// Set up associations
CountryModel.hasMany(IdsMapModel, { foreignKey: "country_id", as: "ids_maps" });
IdsMapModel.belongsTo(CountryModel, {
  foreignKey: "country_id",
  as: "country",
});

GiftModel.hasMany(IdsMapModel, { foreignKey: "gift_id", as: "ids_maps" });
IdsMapModel.belongsTo(GiftModel, { foreignKey: "gift_id", as: "gift" });

TeamModel.hasMany(IdsMapModel, { foreignKey: "team_id", as: "ids_maps" });
IdsMapModel.belongsTo(TeamModel, { foreignKey: "team_id", as: "team" });

export { CountryModel, GiftModel, IdsMapModel, TeamModel, sequelize };
