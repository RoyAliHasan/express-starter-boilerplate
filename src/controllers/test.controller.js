const http_status = require("http-status");
const logger = require("../logs/log");
const testController = (req, res) => {
  try {
    const testObj = {
      id: 111111,
      message: "success",
      status: true,
    };
    res.status(http_status.OK).send(testObj);
    logger.info("{GET: Home}");
  } catch (error) {
    res
      .status(http_status.FORBIDDEN)
      .json({ id: 000000, message: "fail", status: false });
    logger.error("ERROR: Home");
  }
};
module.exports = { testController };
