const path = require("path");
const router = require("express").Router();
const spotifyRoutes = require("./spotify");
const taskRoutes = require("./task");
const userRoutes = require("./user");
//Spotify Routes
router.use("/Spotify", spotifyRoutes);
//user routes
router.use("/user", userRoutes);
// //task routes
router.use("/task", taskRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
