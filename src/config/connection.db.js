const mongoose = require("mongoose");

const connectWithDB = () => {
  try {
    mongoose.connect(process.env.DB_URI, () =>
      console.log("Connect with DB Successfully!")
    );
  } catch (error) {
    console.log("ERROR: DB connection" + error);
  }
};

module.exports = connectWithDB;
