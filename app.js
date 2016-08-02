var express = require('express');
var swig = require('swig');
var app = express();

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


app.use(function(req, res, next){
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
});

app.use('/special', function(req, res, next){
  console.log("You've reached a special page");
  next();
});

app.get('/', function(req, res){
  res.render('index', {locals: locals});
});

app.get('/news', function (req, res){
  res.send('This is the news page!');
});



// swig.renderFile('./views/index.html', locals, function (err, output) {
//     if (err) throw err;
//     // console.log(output);
// });

app.listen(3000);