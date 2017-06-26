app.service('applicationSrvc',['$http', function($http){
	var getApplications = function(){
		return $http.get('nitin/Jsons/applications.json').then(function(response){
			return response;
		});
	}

	return {
		getApplications : getApplications
	}
}]);