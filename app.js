const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./src/config/connection.db");
const connectToServer = require("./src/config/connectToServer");
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
dbConnection();

app.use("/", require("./src/routes/test.routes"));
app.use("/api/v1", require("./src/routes/register.routes"));

//Server
connectToServer(app);
