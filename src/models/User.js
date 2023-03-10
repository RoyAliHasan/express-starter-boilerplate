const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tc: { type: Boolean, required: true },
});
const User = mongoose.model("Users", userSchema);
module.exports = User;
