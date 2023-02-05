const express = require("express");
const router = express.Router();
const testController = require("../controllers/test.controller");

router.get("/", testController.testController);
module.exports = router;
