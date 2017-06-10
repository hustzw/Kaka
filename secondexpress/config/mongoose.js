var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
	// 连接MongoDB
	var db = mongoose.connect(config.db);

	// 注册模型
	require('../app/models/user.server.model');

	return db;
}