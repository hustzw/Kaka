// 创建模式

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	
	// 预定义
	username: {
	    type: String,
	    trim: true
	},

	password: String,

	// default values
	created: {
	    type: Date,
	    default: Date.now
	},
	website: {
		type: String,
		set: function (url) {
			// body...
		},
		get: function () {
			// body...
			return "www.baidu.com"
		}
	}

});

UserSchema.set('toJSON', { getters: true });

// 编译模型
mongoose.model('User', UserSchema);

