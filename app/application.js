// Aplicacion ParlamentoJ.
angular.module('parlamentoj',['ngRoute']);

// Rutas.
angular.module('parlamentoj').config(function($routeProvider){

	$routeProvider
	.when('	/',{redirectTo:'/login'})
	.when('/login',{templateUrl:'views/view.login.html',controller:'loginCtrl'})
	.otherwise({redirectTo:'/login'});
});