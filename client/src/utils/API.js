import axios from "axios";

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
  // getAccessToken: function () {

  // },
};
