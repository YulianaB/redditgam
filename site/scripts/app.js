console.log(" Yuli Cargo app.js");
var modulo1 =
	angular.module("redditgam", []);

	//Creando un servicio del tipo factory

modulo1.factory('posts', [function(){
	//cuerpo de factory llamado post
	var o= {
		posts : [
		{
			title: "post 1", upvotes: 4,
		comments: [
		{author: "Julia", body:"Esta muy bien.",
		upvotes:0},
		{author: "Eric", body:"Es pesimo.",
		upvotes:0}]
	},

	{
			title: "post 2", upvotes: 4,
		comments: [
		{author: "Vero", body:"Me encanta.",
		upvotes:0},
		{author: "Ana", body:"Esto esta de hueva.",
		upvotes:0}]
		}
	]
};
//Retornando objetos de datos persistentes
	return o;
}]);
	//creando controlador

	modulo1.controller("mainCtrl",[
		'$scope','posts',
		//codigo del controlador
		function($scope, posts) {
			$scope.test = "Hola Angular";
			//Modelo al cual se le asigna el resultado del factory
			$scope.posts = posts.posts;
			[ 
			{title: "Post 1", upvotes: 5},
			{title: "Post 2", upvotes: 10},
			{title: "Post 3", upvotes: 15},
			{title: "Post 4", upvotes: 36},
			{title: "Post 5", upvotes: 2},
			{title: "Post 6", upvotes: 12}];

//Metodo del controlador
						$scope.addPost = function(){ 
							if (!$scope.title || $scope.title === "") 
							{
								alert ("No se permite postear titulos vacios")
									return;
							}
							$scope.posts.push(
						{
							title: $scope.title,
							link: $scope.link,
							upvotes:0
						});

							//Two-way data binding
							$scope.title = "";
							$scope.link = "";
		};
//Metodo que incrementa el voto de un post en una unidad
		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		};

		}]);