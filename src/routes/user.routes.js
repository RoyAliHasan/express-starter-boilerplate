const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middlewares/authMiddleware");
// Route level middleware
router.use("/changePassword", authMiddleware);
router.use("/loggedUser", authMiddleware);

// Public Routes
const { body } = require("express-validator");

const sanitizeUser = [
  body("name", "Enter a Valid Name").isLength({ min: 8, max: 15 }),
  body("email", "Email").exists().isEmail().normalizeEmail(),
];

router.post("/register", sanitizeUser, userController.registerUser);
router.post("/login", userController.loginUser);

// Protected Routes
router.post("/changePassword", userController.changeUserPassword);
router.get("/loggedUser", userController.loggedUser);

module.exports = router;
