const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    firebaseId: { type: String, required: true, unique: true },
    task: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    settings:
        {
            type: Schema.Types.ObjectId,
            ref: "Settings"
        },
});

const User = mongoose.model("User", userSchema);

module.exports = User;