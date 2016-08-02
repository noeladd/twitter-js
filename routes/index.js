var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetbank');



router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {tweets: tweets } );
});

 router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  res.render('index' , {tweets: list});
  });


module.exports = router;
