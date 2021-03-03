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
  tasks: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },  
=======
  
>>>>>>> ae1eae2e6d6483fe8f56c178a6e4934edc0e0680
});

const User = mongoose.model("User", userSchema);

module.exports = User;
