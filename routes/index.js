var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetbank');


router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {tweets: tweets } );
});

module.exports = router;

 router.get('../public/stylesheets/style.css', function(req, res){
  res.sendFile();
 });

 router.listen(1337);
