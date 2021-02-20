const router = require("express").Router();
const spotifyRoutes = require("./spotify");
const userRoutes = require("./user");

//Spotify Routes
router.use("/Spotify", spotifyRoutes);

router.use("/user", userRoutes);

module.exports = router;
