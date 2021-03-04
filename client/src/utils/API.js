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
    return axios.post("/api/Spotify/previous");
  },
  getGenreSeeds: function () {
    return axios.get("/api/Spotify/genre-seeds");
  },
  createSpotifyPlaylist: function (name) {
    return axios.post("/api/Spotify/create-playlist/" + name);
  },

  addTracksToPlaylist: function (name, array) {
    return axios.post("/api/Spotify/add-tracks/" + name , array);
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
  getUserCurrentSong: function () {
    return axios.get("/api/Spotify/get-current-song");
  },

  getSpotifyPlaylist: function () {
    return axios.get("/api/Spotify/get-playlist");
  },

  //Users Tasks Routes
  getUserTasks: function (id) {
    return axios.get("/api/task/" + id);
  },
  postUserTasks: function (taskData) {
    return axios.post("/api/task/", taskData);
  },
  updateUserTasks: function (id, body) {
    return axios.put("/api/task/" + id, body);
  },
    deleteUserTasks: function (id) {
    return axios.delete("/api/task/" + id);
  },
  getTasks: function () {
    return axios.get("/api/task/");
  },
  getTasksByUserId: function (userId) {
    return axios.get("/api/user/tasks/" + userId);
  },
  getTaskById: function (id) {
    return axios.get("/api/task/" + id);
  },
  addTrackToQueue: function (track) {
    return axios.post("/api/Spotify/queue/" + track);
  },

  // getAccessToken: function () {

  //User Routes
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  updateUser: function (id) {
    return axios.get("/api/user/", id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/", id);
  },
};
