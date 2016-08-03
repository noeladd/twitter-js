var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetbank');



router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {tweets: tweets, showForm: true} )
});

 router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  console.log(name);
  res.render('index' , {tweets: list, showForm: true, name: name});
  });

 router.post('/tweets', function(req, res){
  console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
 });

module.exports = router;
