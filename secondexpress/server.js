process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// mongoose 必须第一个加载
var mongoose = require('./config/mongoose');

var express = require('./config/express');



var db = mongoose();

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server start');