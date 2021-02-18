
// const router = require('express').Router();
// const request = require('request')
// const querystring = require('querystring')
// const dotenv = require("dotenv").config();

// const redirect_uri = 
//   process.env.REDIRECT_URI || 
//   'http://localhost:3001/callback'

// router.get('/login', function(req, res) {
//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: process.env.REACT_APP_CLIENT_ID,
//       scope: 'user-read-private user-read-email',
//       redirect_uri
//     }))
// })

// router.get('/callback', function(req, res) {
//   let code = req.query.code || null
//   let authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (new Buffer(
//         process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET
//       ).toString('base64'))
//     },
//     json: true
//   }
//   request.post(authOptions, function(error, response, body) {
//     var access_token = body.access_token
//     let uri = process.env.FRONTEND_URI || 'http://localhost:3000/callback/'
//     res.redirect(uri + '?access_token=' + access_token)
//   })
// })

// module.exports = router;


const router = require("express").Router();
var SpotifyWebApi = require("spotify-web-api-node");
const request = require("request");
const querystring = require("querystring");
const dotenv = require("dotenv").config();
const spotifyController = require("../../controller/spotifyController");

const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
];

const redirect_uri =
  process.env.REDIRECT_URI || "http://localhost:3001/callback";

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: redirect_uri,
});

router.get("/login", function (req, res) {
  // res.redirect('https://accounts.spotify.com/authorize?' +
  //   querystring.stringify({
  //     response_type: 'code',
  //     client_id: process.env.REACT_APP_CLIENT_ID,
  //     scope: 'user-read-private user-read-email',
  //     redirect_uri
  //   }))
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

router.get("/callback", (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error("Callback Error:", error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    const access_token = data.body["access_token"];
    const refresh_token = data.body["refresh_token"];
    const expires_in = data.body["expires_in"];

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    console.log("access_token:", access_token);
    console.log("refresh_token:", refresh_token);

    console.log(
      `Sucessfully retreived access token. Expires in ${expires_in} s.`
    );
    res.send("Success! You can now close the window.");

    setInterval(async () => {
      const data = await spotifyApi.refreshAccessToken();
      const access_token = data.body["access_token"];

      console.log("The access token has been refreshed!");
      console.log("access_token:", access_token);
      spotifyApi.setAccessToken(access_token);
    }, (expires_in / 2) * 1000);
  });
  request
    .post(authOptions, function (error, response, body) {
      var access_token = body.access_token;
      let uri = process.env.FRONTEND_URI || "http://localhost:3000/callback/";
      res.redirect(uri + "?access_token=" + access_token);
    })
    .catch((error) => {
      console.error("Error getting Tokens:", error);
      res.send(`Error getting Tokens: ${error}`);
    });
});


// const router = require('express').Router();
// const request = require('request')
// const querystring = require('querystring')
// const dotenv = require("dotenv").config();

// const redirect_uri = 
//   process.env.REDIRECT_URI || 
//   'http://localhost:3001/callback'

// router.get('/login', function(req, res) {
//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: process.env.REACT_APP_CLIENT_ID,
//       scope: 'user-read-private user-read-email',
//       redirect_uri
//     }))
// })

// router.get('/callback', function(req, res) {
//   let code = req.query.code || null
//   let authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (new Buffer(
//         process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET
//       ).toString('base64'))
//     },
//     json: true
//   }
//   request.post(authOptions, function(error, response, body) {
//     var access_token = body.access_token
//     let uri = process.env.FRONTEND_URI || 'http://localhost:3000/callback/'
//     res.redirect(uri + '?access_token=' + access_token)
//   })
// })

module.exports = router;
