const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  firebaseId: { type: String, required: true, unique: true }
  //questionare settings for preferences here?
});

const User = mongoose.model("User", userSchema);

module.exports = User;