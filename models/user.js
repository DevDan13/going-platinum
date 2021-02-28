const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  firebaseId: { type: String, required: true, unique: true },
  settings: {
    type: Schema.Types.ObjectId,
    ref: "Settings",
  },
<<<<<<< HEAD
  tasks: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  
=======

>>>>>>> c161b6417360e17f0b269c713c309bcb4abb2016
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
