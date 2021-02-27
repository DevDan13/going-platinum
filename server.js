const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/", routes);

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/going-platinum", {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/going-platinum', {
>>>>>>> d0ec4a20d508f80629af82a5fda601f9f32b243e
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
