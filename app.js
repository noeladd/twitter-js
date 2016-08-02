var express = require('express');
var app = express();


app.listen(3000, function(){

});

app.get('/', function(req, res){
  res.send("Welcome to our page!");
});
