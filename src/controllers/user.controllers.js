/*
 author: Roy Ali Hasan
 date: 12/02/2023
 description: User Controller
*/
const User = require("../models/User");
const http_status = require("http-status");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const logger = require("../logs/log");
const registerUser = async (req, res) => {
  const { name, email, password, password_conformation, tc } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const user = await User.findOne({ email: email });

  if (user) {
    res
      .status(http_status.BAD_REQUEST)
      .send({ status: "failed", message: "Email Already Exists Please Login" });
  } else {
    if (name && email && password && password_conformation && tc) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      if (password === password_conformation) {
        try {
          const doc = new User({
            name: name,
            email: email,
            password: passwordHash,
            tc: tc,
          });
          await doc.save();
          const saved_user = await User.findOne({ email: email });
          // JWT STUFF
          const token = jwt.sign(
            { userID: saved_user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5d" }
          );
          res.status(http_status.CREATED).send({
            status: "success",
            message: "Registered Successfully!",
            accessToken: token,
          });

          //
        } catch (error) {
          res.status(http_status.BAD_REQUEST).send({
            status: "failed",
            message: "Unable To Register ",
          });
          console.log("REGISTER USER : ERROR");
        }
      } else {
        res.status(http_status.BAD_REQUEST).send({
          status: "failed",
          message: "Password and Confirm Password are not Match ",
        });
      }
    } else {
      res
        .status(http_status.BAD_REQUEST)
        .send({ status: "failed", message: "All fields are Required" });
    }
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && isMatch) {
          // Generate JWT Token
          const token = jwt.sign(
            { userID: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5d" }
          );
          res.status(http_status.OK).send({
            status: "success",
            message: "Login Successfully",
            accessToken: token,
          });
          logger.info("User Logged in");
        } else {
          res
            .status(http_status.BAD_REQUEST)
            .send({ status: "failed", message: "Bad Credentials" });
        }
      } else {
        res
          .status(http_status.BAD_REQUEST)
          .send({ status: "failed", message: "You are Not Registered " });
      }
    } else {
      res
        .status(http_status.BAD_REQUEST)
        .send({ status: "failed", message: "All fields are Required" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(http_status.BAD_REQUEST)
      .send({ status: "failed", message: "Unable to Login" });
  }
};

// Change User Password
const changeUserPassword = async (req, res) => {
  const { password, password_conformation } = req.body;
  if (password && password_conformation) {
    if (password !== password_conformation) {
      res.status(http_status.BAD_REQUEST).send({
        status: "failed",
        message: "Password and Confirm Password are not Match ",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const newHashPassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.user._id, {
        $set: { password: newHashPassword },
      });
      res.status(http_status.OK).send({
        status: "success",
        message: "Password Changed Successfully",
        password: newHashPassword,
      });
    }
  } else {
    res
      .status(http_status.BAD_REQUEST)
      .send({ status: "failed", message: "All fields are Required" });
  }
};

const loggedUser = async (req, res) => {
  res.send({ user: req.user });
};

module.exports = { registerUser, loginUser, changeUserPassword, loggedUser };
