import { CountryModel, GiftModel, TeamModel } from "@/models";

export const getFilters = ({ country, team, gift, playerID }) => {
  const condition = {};
  const include = [];

  if (playerID) {
    condition.playerid = playerID;
  }

  // Utility function to generate include objects
  const addInclude = (model, where, attributes) => {
    include.push({ model, where, attributes });
  };

  // Add conditions forall types of filters.
  if (country) {
    addInclude(CountryModel, { name: country }, ["name", "abbreviations"]);
  }
  if (team) {
    addInclude(TeamModel, { name: team }, ["name", "abbreviations"]);
  }
  if (gift) {
    addInclude(GiftModel, { name: gift }, ["name", "abbreviations"]);
  }

  return { condition, include };
};
