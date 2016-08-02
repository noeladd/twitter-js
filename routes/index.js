var router = require('express').Router();
var tweetBank = require('../tweetbank');


router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {tweets: tweets } );
});

module.exports = router;
