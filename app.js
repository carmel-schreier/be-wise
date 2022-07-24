var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lecturersRouter = require('./routes/lecturers');
var coursesRouter = require('./routes/courses');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', lecturersRouter);
app.use('/api', coursesRouter);


module.exports = app;