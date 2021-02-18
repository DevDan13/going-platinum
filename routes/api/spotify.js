const router = require("express").Router();
const spotifyController = require("../../controllers/spotifyController");

// "/api/Spotify/"
router.route("/");

// "/api/Spotify/play"
router.route("/play").put(spotifyController.songPlay);

// "/api/Spotify/pause"
router.route("/pause").put(spotifyController.songPause);

// "/api/Spotify/next"
router.route("/next").put(spotifyController.playNext);

// "/api/Spotify/previous"
router.route("/previous").put(spotifyController.playPrevious);

// "/api/Spotify/"
router.route("/genre-seeds").get(spotifyController.getGenreSeeds);

// "/api/Spotify/create-playlist"
router.route("/create-playlist").post(spotifyController.createSpotifyPlaylist);

// "/api/Spotify/get-playlist"
router.route("/get-playlist").get(spotifyController.getSpotifyPlaylist);

// "/api/Spotify/search-playlist"
router.route("/search-playlist").get(spotifyController.searchSpotifyPlaylist);

// "/api/Spotify/spotify-categories"
router.route("/spotify-categories").get(spotifyController.getSpotifyCategories);

// "/api/Spotify/get-recommendations"
router
  .route("/get-recommendations")
  .get(spotifyController.getSpotifyRecommendations);

// "/api/Spotify/authentication"
router.route("/authentication").get(spotifyController.getAuthentication);

// "/api/Spotify/tokens"
router.route("/tokens/:code").get(spotifyController.getTokens);

//Template for further addtions
// // "/api/Spotify/"
// router.route("/").get(spotifyController)

module.exports = router;
