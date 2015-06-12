app.factory('examplesService', ['$http', function($http)
{
	return{
          list: function (callback){
            $http({
              method: 'GET',
              url: 'json/examples.json',
              cache: true
            }).success(callback);
          },
          find: function (id, callback){
            $http({
              method: 'GET',
              url: 'json/example' + id + '.json',
              cache: true
            }).success(callback);
          }
	};	
}]);
