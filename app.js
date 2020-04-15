var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require(__dirname + "/_connect_db");
const bodyParser = require('body-parser');
//cors
const cors = require('cors');

const whitelist = [
  'http://localhost:3000',
  undefined
];

const corsOptions = {
  credentials: true,
  origin:function(origin,callback){
    console.log('origin:',origin);
    if(whitelist.indexOf(origin) !== -1){
      callback(null,true);
    }else{
      callback(null, false)
    }
  }
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
const serveIndex = require('serve-index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
//serveIndex會造成Ｐost無法使用
// app.use('/', serveIndex('public', {'icons': true}));
app.use('/users', usersRouter);

// todolist_start
app.use("/todolist", require(__dirname + "/routes/todolist"));
// todolist_end
// ptt_start
app.use('/getptt',require(__dirname+'/routes/getptt'));
// ptt_end
app.post('/test',(req,res)=>{
  res.send('test post')
  console.log('req.body:',req.body)
})
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
