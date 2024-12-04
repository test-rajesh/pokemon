import Joi from "joi";
import validations from "./validationSchemas";

const getPlayerDataValidation = Joi.object().keys({
  trainerCodeId: validations.trainerCodeSchema.label("Trainer Code"),
  country: validations.name.label("Country"),
  giftAction: validations.name.label("Gift Action"),
  team: validations.name.label("Team"),
});

export default getPlayerDataValidation;
