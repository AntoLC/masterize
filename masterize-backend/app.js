var createError = require('http-errors');
var express = require('express');

// Course
var cors = require('cors');
var bodyParser = require('body-parser');
if(process.env.NODE_ENV !== 'production')
  require('dotenv').config();

var path = require('path');
var compression = require('compression');
var cookieParser = require('cookie-parser');

var logger = require('morgan'); 

var indexRouter = require('./routes/index');
var stripeRouter = require('./routes/stripe');
var usersRouter = require('./routes/users');

var app = express();
// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(compression);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Course
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../masterize/build')));

  app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../masterize/build', 'index.html'));
  });
}

/*  For WebApp
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/payment', stripeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
process.title = 'masterize-backend';