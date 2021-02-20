const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  mood: { type: String, required: true},
  duration: { type: Number, required: true },
  description: { type: String}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;