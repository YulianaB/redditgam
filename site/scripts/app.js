console.log(" Yuli Cargo app.js");
var modulo1 =
	angular.module("redditgam", []);
	modulo1.controller("mainCtrl",[
		'$scope', 
		function($scope) {
			$scope.test = "Hola Angular";
		}]);