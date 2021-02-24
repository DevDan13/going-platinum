import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //Spotify Routes
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
  getSpotifyRecommendations: function (energy, popularity, artists) {
    return axios.get(
      "/api/Spotify/get-recommendations/" +
        energy +
        "-" +
        popularity +
        "-" +
        artists
    );
  },
  getAuthentication: function () {
    return axios.get("/api/Spotify/authentication");
  },
  getTokens: function (code) {
    return axios.get("/api/Spotify/tokens/" + code);
  },
  getArtist: function (artist) {
    return axios.get("/api/Spotify/get-artist/" + artist);
  },
  //user task routes
  getUserTracks: function () {
    return axios.get("/api/user/task/");
  },
  postUserTrack: function () {
    return axios.post("/api/user/task");
  },
  updateUserTrack: function (id) {
    return axios.put("/api/user/task");
  },
  deleteUserTrack: function (id) {
    return axios.delete("/api/user/task");
  },
  // getAccessToken: function () {

  //User Routes
  createUser: function (userData) {
    return axios.post("/api/user", userData)
  },
  getUser: function () {
    return axios.get("/api/user")
  },
  updateUser: function (id) {
    return axios.get("/api/user", id)
  },
  deleteUser: function (id) {
    return axios.delete("/api/user", id)
  }
};
