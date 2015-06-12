app.controller('ExampleController', ['$scope', 'examplesService', '$routeParams', '$sce', function($scope, examplesService, $routeParams, $sce)
{
	examplesService.find($routeParams.exampleid, function(exampleinfo){
		$scope.exampleinfo = exampleinfo;
		$scope.htmlquery = $sce.trustAsHtml($scope.exampleinfo.query);
		$scope.htmlresult = $sce.trustAsHtml($scope.exampleinfo.result);
	});
}]);