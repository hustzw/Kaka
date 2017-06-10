var express = require('express'),
//简单日志
morgan = require('morgan'),
//响应内容压缩的功能
compress = require('compress'),
bodyParser = require('body-parser'),
methodOverride =require('method-override');

var config = require('./config');

var session = require('express-session');



module.exports = function () {

	// 1. 创建了Express应用的实例。
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));//日志
	} else if (process.env.NODE_ENV === 'production'){
		app.use(compress())
	}

	app.use(bodyParser.urlencoded({
		extended : true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());



	// 配置session中间件。
	// session中间件会为应用中的所有的请求对象增加一个session对象，
	// 通过这个session对象，可以设置或者获取当前会话的任意属性。
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));


	// 设置ejs为模板引擎
	app.set('views', './app/views');
	app.set('view engine', 'ejs');


	// 2. 调用前面创建的路由文件，以函数调用的方式传入应用实例。
	require('../app/routes/index.server.routes.js')(app);

	// create user route
	require('../app/routes/users.server.routes.js')(app);

	// 设置静态文件服务, 参数指明静态文件所在的文件夹路径.
	// 在路由中间件启动之下
	app.use(express.static('./public'));

	return app;
}