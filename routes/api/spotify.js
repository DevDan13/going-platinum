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
router.route("/previous").post(spotifyController.playPrevious);

// "/api/Spotify/create-playlist"
router.route("/create-playlist/:playlistName").post(spotifyController.createSpotifyPlaylist);

// "/api/Spotify/add-tracks"
router.route("/add-tracks/:playlistId").post(spotifyController.addTracks);

//  "/api/Spotify/get-playlist"
router.route("/get-playlist").get(spotifyController.getPlaylist);


// "/api/Spotify/get-recommendations"
router
  .route("/get-recommendations/:inputs")
  .get(spotifyController.getSpotifyRecommendations);

// "/api/Spotify/authentication"
router.route("/authentication").get(spotifyController.getAuthentication);

// "/api/Spotify/tokens/:code"
router.route("/tokens/:code").get(spotifyController.getTokens);

// "/api/Spotify/get-artist/:artist"
router.route("/get-artist/:artist").get(spotifyController.getArtist);

// "/api/Spotify/queue/:track"
router.route("/queue/:track").post(spotifyController.addTrackToQueue);
// "/api/Spotify/get-current-song"
router.route("/get-current-song").get(spotifyController.getUserCurrentSong);

//Template for further addtions
// // "/api/Spotify/"
// router.route("/").get(spotifyController)

module.exports = router;
