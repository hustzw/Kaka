angular.module('users', []).factory('Authentication', [function() {
	this.user = window.user;
	return {
		user : this.user
	};
// 这样angularJs中引用window.user对象。
}]);