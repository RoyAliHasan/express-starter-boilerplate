const dotenv = require("dotenv");
const Joi = require("joi");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });
const envVarSchema = Joi.object()
  .keys({
    DB_URI: Joi.string().required().description("Mongo DB url"),
  })
  .unknown();

const { value: envVars, error } = envVarSchema
  .prefs({
    errors: { label: "key" },
  })
  .validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  mongoose: {
    url: envVars.DB_URI,
  },
};
