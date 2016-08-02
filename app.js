var express = require('express');
var app = express();


app.listen(3000, function(){

});


app.use(function(req, res, next){
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
});

app.use('/special', function(req, res, next){
  console.log("You've reached a special page");
  next();
});

app.get('/', function(req, res){
  res.send('Welcome to our page!');
});

app.get('/news', function (req, res){
  res.send('This is the news page!');
});
