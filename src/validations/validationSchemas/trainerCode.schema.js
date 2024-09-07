import Joi from "joi";

const noConsecutiveRepeats = (value, helpers) => {
  // Check for consecutive repeating characters like 111111111111
  if (/(\d)\1{2,}/.test(value)) {
    return helpers.message(
      "Trainer ID should not contain consecutive repeating digits."
    );
  }

  // Check for sequential numbers (e.g., 123456789012 or 987654321098)
  const isSequential = (str) => {
    let ascending = true;
    let descending = true;

    for (let i = 1; i < str.length; i++) {
      ascending = ascending && str[i] - str[i - 1] === 1;
      descending = descending && str[i - 1] - str[i] === 1;
    }

    return ascending || descending;
  };

  if (isSequential(value)) {
    return helpers.message("Trainer ID should not contain sequential numbers.");
  }

  return value;
};

// Define the schema first, then export it
const trainerCodeSchema = Joi.string()
  .trim()
  .length(12)
  .pattern(/^[0-9]+$/, "numbers")
  .custom(noConsecutiveRepeats)
  .required()
  .messages({
    "string.length": "Trainer ID must be exactly 12 digits long.",
    "string.pattern.base": "Trainer ID can only contain numeric characters.",
  });

export default trainerCodeSchema;
