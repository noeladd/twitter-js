var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetbank');



router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {tweets: tweets } );
});

 router.get('/public/stylesheets/style.css', function(req, res){
  res.sendFile('public/stylesheets/style.css', { root:   __dirname + "/../" });
 });

module.exports = router;
