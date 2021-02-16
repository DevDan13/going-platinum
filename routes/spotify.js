const router = require('express').Router();
const request = require('request')
const querystring = require('querystring')
const dotenv = require("dotenv").config();

const redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:3001/callback'

router.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
})

router.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000/callback/'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

module.exports = router;
