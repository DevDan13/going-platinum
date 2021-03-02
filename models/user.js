const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  firebaseId: { type: String, required: true, unique: true },
  settings: {
    type: Schema.Types.ObjectId,
    ref: "Settings",
  },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
