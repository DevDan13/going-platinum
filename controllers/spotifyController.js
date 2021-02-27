const $ = require("jquery");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");
const axios = require("axios");
// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "http://localhost:3000/callback/",
  accessToken: process.env.ACCESS_TOKEN,
});
let accessToken = "";
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
  getSpotifyRecommendations: function (req, res) {
    let inputs = req.params.inputs.split("-");
    let energy = parseFloat(inputs[0]);
    let popularity = parseInt(inputs[1]);
    console.log(energy, inputs[2], popularity);
    let artists = inputs[2].split(",");

    spotifyApi
      .getRecommendations({
        min_energy: energy,
        seed_artists: artists,
        min_popularity: popularity,
        limit: 50,
      })
      .then(
        function (data) {
          let recommendations = data.body;
          console.log(recommendations);
          res.json(recommendations);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  },
  getAuthentication: function (req, res) {
    const scopes = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-currently-playing",
    ];

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
        accessToken = data.body["access_token"];
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
  getArtist: function (req, res) {
    spotifyApi.searchArtists(req.params.artist).then(
      function (data) {
        res.send(data.body);
        console.log("Search artists by anythings", data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  },
  addTrackToQueue: function (req, res) {
    try {
      axios({
        url: `https://api.spotify.com/v1/me/player/queue?uri=${req.params.track}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }).then((res) => {
        console.log(`Axios Call completed: ${res}`);
      });
    } catch (error) {
      console.log(error);
    }
  },
  getUserCurrentSong: function (req, res) {
    spotifyApi.getMyCurrentPlayingTrack().then(
      function (data) {
        console.log("Now playing: " + data.body.item.name);
        res.send(data.body.item);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  },
};
