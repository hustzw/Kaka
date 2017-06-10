var mainApplicationModuleName = "mean";

// 此模块为应用主模块
// 主module，在主module中
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'example']);

// 配置应用的URL模式
mainApplicationModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') {
	window.location.hash = '#!';
}

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
