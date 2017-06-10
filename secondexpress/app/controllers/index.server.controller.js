exports.render = function (req, res) {
	// res.send('Hello world');
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();



	res.render('index', {//参数为模板文件名去掉扩展名
		title: 'Hello world', // 第二个参数是包含模板变量的对象。
		user: JSON.stringify(req.user)
	});
}