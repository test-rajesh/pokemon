import { CountryModel, GiftModel, TeamModel } from "@/models";
import { Op } from "sequelize";

export const getFilters = ({ country, trainerCodeId, giftAction, team }) => {
  const condition = {}; // Main condition for the primary model (IdsMapModel)
  const include = []; // Array to store associated models for inclusion

  const modelFilters = [
    {
      model: CountryModel,
      filterValue: country,
      filterField: "name",
      attributes: ["name", "abbreviation"],
      alias: "country",
    },
    {
      model: TeamModel,
      filterValue: team,
      filterField: "name",
      attributes: ["name", "abbreviation"],
      alias: "team",
    },
    {
      model: GiftModel,
      filterValue: giftAction,
      filterField: "abbreviation",
      attributes: ["name", "abbreviation"],
      alias: "gift",
    },
  ];

  // Add condition for playerID, if present
  if (trainerCodeId) {
    condition.player_id = trainerCodeId;
  }

  // Loop through each filter in the map and add to the include array
  modelFilters.forEach(
    ({ model, filterValue, filterField, attributes, alias }) => {
      include.push({
        model,
        as: alias,
        where: filterValue
          ? {
              [Op.or]: [
                { [filterField]: filterValue }, // Match provided filter value
                { [filterField]: { [Op.is]: null } }, // Allow null values
              ],
            }
          : undefined,
        attributes,
      });
    }
  );

  return { condition, include };
};
