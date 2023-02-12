const jwt = require("jsonwebtoken");
const User = require("../models/User");
const http_status = require("http-status");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      // Verify Token
      const { userID } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      // Find User From Token
      req.user = await User.findById(userID).select("-password");
      next();
    } catch (error) {
      res.status(http_status.UNAUTHORIZED).send({
        status: "failed",
        message: "Invalid Token",
      });
    }
  }
  if (!token) {
    res.status(http_status.UNAUTHORIZED).send({
      status: "failed",
      message: "Unauthorized user , No Token",
    });
  }
};

module.exports = authMiddleware;
