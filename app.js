const express = require("express");
const app = express();
process.traceDeprecation;

const dotenv = require("dotenv");
const dbConnection = require("./src/config/connection.db.mysql");
const connectToServer = require("./src/config/connectToServer");
const logger = require("./src/logs/initLogger");
// Swagger includes
const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("./src/docs/basicInfo");
var options = {
  swaggerOptions: {
    url: "http://petstore.swagger.io/v2/swagger.json",
  },
};
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
const { json } = require("express");
dotenv.config();
app.use(json());

//connect With Db
dbConnection;
logger;
app.use("/", require("./src/routes/test.routes"));
app.use("/api/v1", require("./src/routes/register.routes"));

//Server
connectToServer(app);
connectToServer;
