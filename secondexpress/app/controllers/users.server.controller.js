// 调用mongoose的模型方法返回前面创建的User模型

const mongoose = require('mongoose')//
var User =  mongoose.model('User');

// 创建控制器，用它处理所有与用户相关的操作
exports.create = function (req, res, next) {
	var user = new User(req.body);

	user.save(function(err){
		if(err) {
			return next(err);
		} else {
			res.json(user);
		}
	})
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    })
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.userByID = function(req, res, next) {
    User.findOne({
        _id: req.params.id
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};