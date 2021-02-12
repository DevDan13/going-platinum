<<<<<<< HEAD
// import React from "react";
// import env from "react-dotenv";
const dotenv = require("dotenv").config();
=======

>>>>>>> 15cda0a06edeab124b8406e21aaad8dd85d2a2c9

export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = process.env.CLIENT_ID;
export const redirectUri = "http://localhost:3000/callback/";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
