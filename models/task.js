const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  energy: { type: String, required: true },
  duration: { type: Number, required: false },
  playlistName: { type: String },
  tracks: { type: Array },
  user: { type: String, required: true },
  spotifyId: { type: String }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
