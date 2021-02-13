const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: "http://localhost/callback",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

//Spotify API Calls
export default {
  songPause: function () {
    spotifyApi.pause().then(
      function () {
        console.log("Playback paused");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  },
  songPlay: function () {
    spotifyApi.play().then(
      function () {
        console.log("Playback started");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  },
  playNext: function () {
    spotifyApi.skipToNext().then(
      function () {
        console.log("Skip to next");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  },
  playPrevious: function () {
    spotifyApi.skipToPrevious().then(
      function () {
        console.log("Skip to previous");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  },
  getGenreSeeds: function () {
    spotifyApi.getAvailableGenreSeeds().then(
      function (data) {
        let genreSeeds = data.body;
        console.log(genreSeeds);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
  getAccessToken: function () {
    spotifyApi.clientCredentialsGrant().then(
      function (data) {
        console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body["access_token"]);
      },
      function (err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err
        );
      }
    );
  },
};
