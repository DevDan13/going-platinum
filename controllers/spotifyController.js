const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/callback/",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

//Spotify API Calls
module.exports = {
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
  createSpotifyPlaylist: function () {
    spotifyApi
      .createPlaylist("My playlist", {
        description: "My description",
        public: true,
      })
      .then(
        function (data) {
          console.log("Created playlist!");
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  },
  getSpotifyPlaylist: function () {
    spotifyApi.getPlaylist("5ieJqeLJjjI8iJWaxeBLuK").then(
      function (data) {
        console.log("Some information about this playlist", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
  searchSpotifyPlaylist: function () {
    spotifyApi.searchPlaylists("workout").then(
      function (data) {
        console.log("Found playlists are", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
  getSpotifyCategories: function () {
    spotifyApi
      .getCategories({
        limit: 5,
        offset: 0,
        country: "SE",
        locale: "sv_SE",
      })
      .then(
        function (data) {
          console.log(data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  },
  getSpotifyRecommendations: function () {
    spotifyApi
      .getRecommendations({
        min_energy: 0.4,
        seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
        min_popularity: 50,
      })
      .then(
        function (data) {
          let recommendations = data.body;
          console.log(recommendations);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  },
  getAuthentication: function (req, res) {
    const scopes = ["user-read-private", "user-read-email"];

    // Create the authorization URL
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
    res.send(authorizeURL);
    console.log(authorizeURL);
  },
  getTokens: function (req, res) {
    spotifyApi.authorizationCodeGrant(req.params.code).then(
      function (data) {
        res.send("You did it");
        console.log("The token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);
        console.log("The refresh token is " + data.body["refresh_token"]);

        // Set the access token on the API object to use it in later calls
        spotifyApi.setAccessToken(data.body["access_token"]);
        spotifyApi.setRefreshToken(data.body["refresh_token"]);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
};
