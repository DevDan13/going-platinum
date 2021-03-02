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
<<<<<<< HEAD
=======
  tasks: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  

>>>>>>> 4973e4bf3797db56124aae0f56eb6161dada460e
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
