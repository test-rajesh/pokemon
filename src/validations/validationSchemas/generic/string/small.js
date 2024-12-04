const Joi = require("joi");

const small = Joi.string()
  .trim()
  .min(1)
  .max(255)
  .pattern(/^[a-zA-Z]+$/, "letters")
  .messages({
    "string.pattern.name": "Country name validation error.",
  });
export default small;
