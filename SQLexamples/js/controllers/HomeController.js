app.controller('HomeController', ['$scope', 'examplesService', function($scope, examplesService) 
{
  examplesService.list(function(examples)
  {
    $scope.examples = examples;
  });

    $scope.sortField = 'number';
    $scope.reverse = false;
}]);