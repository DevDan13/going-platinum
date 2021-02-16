const router = require("express").Router();
const spotifyRoutes = require("./spotify");

//Spotify Routes
router.use("/Spotify", spotifyRoutes);

module.exports = router;
