const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/goingPlatinum',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
=======
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );
>>>>>>> 15cda0a06edeab124b8406e21aaad8dd85d2a2c9

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
