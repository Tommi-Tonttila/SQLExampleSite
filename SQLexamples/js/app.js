var app = angular.module('SQLExampleApp', ['ngRoute', 'firebase']);
app.config(function ($routeProvider)
{
	$routeProvider
		.when('/',
		{
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/SQLexamples/:exampleid',
		{
			controller: 'ExampleController',
			templateUrl: 'views/example.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});



