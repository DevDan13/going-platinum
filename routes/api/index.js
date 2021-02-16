const router = require("express").Router();
const spotifyRoutes = require("./books");

//Spotify Routes
router.use("/Spotify", spotifyRoutes);

module.exports = router;
