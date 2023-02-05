connectToServer = (app) => {
  try {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(
        `Server is Running On Port ${PORT} ` + `http://localhost:${PORT}`
      )
    );
  } catch (error) {
    console.log("ERROR --- Server Crash");
  }
};
module.exports = connectToServer;
