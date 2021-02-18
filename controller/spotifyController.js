const axios = require("axios");
var SpotifyWebApi = require("spotify-web-api-node");

let parsed = queryString.parse(window.location.search);
console.log(parsed);
let token = parsed.access_token;

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: "http://localhost/callback",
  accessToken: token
});

module.exports = {
    

};
