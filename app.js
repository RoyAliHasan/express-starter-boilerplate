const express = require("express");
const app = express();
// const Redis = require("redis");
// const client = Redis.createClient();
const cors = require("cors");
// CORS Policy
app.use(cors());
const dotenv = require("dotenv");
const dbConnection = require("./src/config/connection.db.mongo");
const connectToServer = require("./src/config/connectToServer");
const logger = require("./src/logs/initLogger");
// Swagger includes
const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("./src/docs/basicInfo");
const jwt = require("jsonwebtoken");
const http_status = require("http-status");
const { json } = require("express");
app.set("view engine", "ejs");

var options = {
  swaggerOptions: {
    url: "http://petstore.swagger.io/v2/swagger.json",
  },
};
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
dotenv.config();
app.use(json());

//connect With Db
dbConnection.connectWithDB();

logger;
app.use("/test", require("./src/routes/test.routes"));
app.use("/api/v1", require("./src/routes/user.routes"));
// Home Page
app.get("/", (req, res) => {
  res.render("index");
});
//Server
connectToServer(app);
connectToServer;
