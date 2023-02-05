const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register.controllers");

router.post("/register", registerController.registerUser);
router.post("/login", registerController.loginUser);

module.exports = router;
