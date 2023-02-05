const User = require("../models/User");
const http_status = require("http-status");
const registerUser = async (req, res) => {
  const existingUser = await User.findOne({ userName: req.body.userName });
  if (existingUser) {
    res
      .status(http_status.BAD_REQUEST)
      .json({ message: "User Already exists" });
  } else {
    const newUser = await User.create(req.body);
    res.status(http_status.OK).send(newUser);

    console.log("USER -> CREATED ");
  }
};
const loginUser = async (req, res) => {
  const existingUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (existingUser) {
    res.status(http_status.OK).json({ message: "Now your Logined" });
  } else {
    res.status(http_status.UNAUTHORIZED).json({ message: "Bad Credentials" });

    console.log("USER -> CREATED ");
  }
};

module.exports = { registerUser, loginUser };
