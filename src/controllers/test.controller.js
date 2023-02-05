const http_status = require("http-status");
const testController = (req, res) => {
  try {
    const testObj = {
      id: 111111,
      message: "success",
      status: true,
    };
    res.status(http_status.OK).send(testObj);
    console.log("GET: TEST Api");
  } catch (error) {
    res
      .status(http_status.BAD_REQUEST)
      .json({ id: 000000, message: "fail", status: false });
    console.log("ERROR: TEST Api");
  }
};
module.exports = { testController };
