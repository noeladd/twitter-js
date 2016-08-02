var express = require('express')
var swig = require('swig');
var app = express();
var routes = require('./routes')

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({cache: false});

app.use('/', routes);
app.use(function(req, res, next){
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
});

app.use('/special', function(req, res, next){
  console.log("You've reached a special page");
  next();
});




app.listen(3000);
