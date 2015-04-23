console.log(" Yuli Cargo app.js");
var modulo1 =
	angular.module("redditgam", []);
	modulo1.controller("mainCtrl",[
		'$scope', 
		function($scope) {
			$scope.test = "Hola Angular";
			$scope.posts = 
			[ 
			{title: "Post 1", upvotes: 5},
			{title: "Post 2", upvotes: 10},
			{title: "Post 3", upvotes: 15},
			{title: "Post 4", upvotes: 36},
			{title: "Post 5", upvotes: 2},
			{title: "Post 6", upvotes: 12}];

//Metodo del controlador
						$scope.addPost = function(){ 
							$scope.posts.push(
						{title: "Nuevo Post",upvotes: 0});
		};

		}]);