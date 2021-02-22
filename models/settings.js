const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  genre: { type: String, required: true},
  artist: { type: String, required: true },
  activities: { type: String, required: true },
  firebaseId: { type: String, required: true, unique: true }
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;