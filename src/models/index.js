"use strict";
import { Sequelize } from "sequelize";
import country from "./country.model";
import gift from "./gift.model";
import ids_maps from "./ids_maps.model";
import team from "./team.model";
import { config } from "@/config";

const sequelize = new Sequelize(
  config.MYSQL_DB_NAME,
  config.MYSQL_USERNAME,
  config.MYSQL_PASSWORD,
  {
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      charset: "utf8mb4",
    },
    define: {
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    },
  }
);

const CountryModel = country(sequelize, Sequelize);
const GiftModel = gift(sequelize, Sequelize);
const IdsMapModel = ids_maps(sequelize, Sequelize);
const TeamModel = team(sequelize, Sequelize);

CountryModel.hasMany(IdsMapModel, { foreignKey: "country_id", as: "country" });
IdsMapModel.hasMany(CountryModel, { foreignKey: "country_id", as: "country" });

GiftModel.hasMany(IdsMapModel, { foreignKey: "gift_id", as: "gift" });
IdsMapModel.hasMany(GiftModel, { foreignKey: "gift_id", as: "gift" });

TeamModel.hasMany(IdsMapModel, { foreignKey: "team_id", as: "team" });
IdsMapModel.hasMany(TeamModel, { foreignKey: "team_id", as: "team" });

export { CountryModel, GiftModel, IdsMapModel, TeamModel, sequelize };
