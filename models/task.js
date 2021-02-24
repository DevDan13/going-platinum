const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  mood: { type: String, required: false },
  duration: { type: Number, required: false },
  playlistName: { type: String },
  tracks: { type: Array },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
