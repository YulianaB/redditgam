console.log("#Julia: Cargo app.js");
//inyectando  el modulo ui-router
//con parametro de arreglo  del modulo de objeto 
var modulo1 = 
	angular.module("reeditgam",['ui.router','hSweetAlert']);
	//configurando las rutas
	//recibe un arreglo  de elementos 

	modulo1.config(
		['$stateProvider',
		'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	
//creando ruta home
$stateProvider.state('home', {
	//definiendo estado  como un objeto
	url:"/home",   //url que define el estado
	templateUrl: "/home.html", //plantilla base para el estado
	controller: "mainCtrl"
});

	//iniciando rutina de visualizacion del Post
$stateProvider.state('posts', {
url: "/posts/{id}",
templateUrl: "/posts.html",
controller: "postsCtrl"	
});

//url por defecto
$urlRouterProvider.otherwise('home');
}]);

// Creando un servicio del tipo factory
modulo1.factory('posts',[function(){
	// Cuerpo del factory llamado post
	var o = {
		posts : [
			{	
				title: "post 1", upvotes: 15,
				comments: [
					{author: "Karina", body:"Esto esta de pelos.",
					upvotes:3},
					{author: "Gamaliel", body:"Esto es basura.",
					upvotes:0}]
			},
			{	
				title: "post 2", upvotes: 4,
				comments: [
					{author: "Coco", body:"Esto es asombroso.",
					upvotes:5},
					{author: "Cristian", body:"Esto esta aburrido.",
					upvotes:1}]
			}
		]
	};
	// Retronado objeto de datos persistentes
	return o;
}]);

// Creando controlador	
// dependcy injection
modulo1.controller("mainCtrl",[
	'$scope','posts', 'sweet',// Inyectando factory post......Agregar 'sweet'
	function($scope, posts, sweet){ // agregar el parametro sweet
		$scope.test = "Hola Angular";
		
		// Modelo al cual se le asigna
		// el resultado del factory
		$scope.posts = posts.posts;

		 // Metodo del controlador
		 $scope.addPost = function(){
		 	if(!$scope.title || $scope.title === "")
		 	{
		 		swal("No se permite postear titulos vacios", "Inserta un titulo", "error");
		 		//comentar alert alert("No se permite postear titulos vacios", "error");
		 		return;
		 	}
		 	$scope.posts.push(
		 		{
		 			title: $scope.title,
		 			link: $scope.link,
		 		 	upvotes: 0,
		 		 	//arreglo de comentarios
		 		 	comments: [{ 
		 		 		author : "Gustavo",
		 		 		body: "Me gusta ese link",
		 		 		upvotes: 0},
		 		 		{
		 		 			author: "Keila",
		 		 			body: "Awesome link",
		 		 			upvotes: 2
		 		 		}]
		 		 });
		 	// Two-way data binding
		 	$scope.title = "";
		 	$scope.link = "";
		 };
		 // Metodo que incrementa el voto
		 // de un post en una unidad
		 $scope.incrementUpvotes = function(post){
		 	post.upvotes += 1;
		 };
	}]);

//Crando controlador postCtrl
modulo1.controller("postsCtrl",[
'$scope',
'$stateParams',
'posts',
 function($scope, $stateParams, posts){
 	$scope.incrementUpvotes = function (comment) {
 		comment.upvotes += 1;
 	};
	//cuerpo del controlador
	//obteniendo el parametro id de los parametros
	//del estado de la ruta y pasando como argumentos
	//al objeto del factory
	$scope.post = posts.posts[$stateParams.id];
}]);