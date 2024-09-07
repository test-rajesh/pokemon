import Joi from "joi";
import validations from "./validationSchemas";

const getPlayerDataValidation = Joi.object().keys({
  playerId: validations.trainerCodeSchema.label("Trainer Code"),
});

export default getPlayerDataValidation;
