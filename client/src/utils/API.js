import axios from "axios";

// import  SpotifyWebApi from "spotify-web-api-node";

// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId: process.env.REACT_APP_CLIENT_ID,
//   clientSecret: process.env.REACT_APP_CLIENT_SECRET,
//   redirectUri: "http://localhost/callback",
// }); 

// //Spotify API Calls
// export default {
//   getClientCredentialsGrant: function() {
//     spotifyApi.clientCredentialsGrant().then(
//       function(data) {
//         console.log('The access token expires in ' + data.body['expires_in']);
//         console.log('The access token is ' + data.body['access_token']);
    
//         // Save the access token so that it's used in future calls
//         spotifyApi.setAccessToken(data.body['access_token']);
//       },
//       function(err) {
//         console.log('Something went wrong when retrieving an access token', err);
//       }
//     );
//   },
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  songPause: function () {
    return axios.put("/api/Spotify/pause");
  },
  songPlay: function () {
    return axios.put("/api/Spotify/play");
  },
  playNext: function () {
    return axios.put("/api/Spotify/next");
  },
  playPrevious: function () {
    return axios.put("/api/Spotify/previous");
  },
  getGenreSeeds: function () {
    return axios.get("/api/Spotify/genre-seeds");
  },
  createSpotifyPlaylist: function () {
    return axios.post("/api/Spotify/create-playlist");
  },
  getSpotifyPlaylist: function () {
    return axios.get("/api/Spotify/get-playlist");
  },
  searchSpotifyPlaylist: function () {
    return axios.get("/api/Spotify/search-playlist");
  },
  getSpotifyCategories: function () {
    return axios.get("/api/Spotify/spotify-categories");
  },
  getSpotifyRecommendations: function () {
    return axios.get("/api/Spotify/get-recommendations");
  },
  getAuthentication: function () {
    return axios.get("/api/Spotify/authentication");
  },
  getTokens: function (code) {
    return axios.get("/api/Spotify/tokens/" + code);
  },
  // getAccessToken: function () {

  // },
};
