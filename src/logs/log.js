const dotenv = require("dotenv");
dotenv.config();
let logger = null;
const initLogger = require("./initLogger");
const productionLogger = require("./productionLogger");
if (process.env.NODE_ENV == "dev") {
  logger = initLogger();
}
if (process.env.NODE_ENV === "prod") {
  logger = productionLogger();
}
module.exports = logger;
