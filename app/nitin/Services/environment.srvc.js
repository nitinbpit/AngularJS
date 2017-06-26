app.service('environmentSrvc',['$http', function($http){
	var getEnvironments = function(){
		return $http.get('nitin/Jsons/environments.json'
			).then(function(response){
				return response;
		});
	}
	return {
		getEnvironments : getEnvironments
	}
}]);