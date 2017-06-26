(function(){
	'use strict'
	app.controller('homeCtrl',['$state','$scope','$rootScope','applicationSrvc', 'environmentSrvc', function($state,$scope,$rootScope,applicationSrvc,environmentSrvc){
		var homeCtrl = this;
		$scope.mainCtrl.selectedApp = '';
		$scope.mainCtrl.selectedAppName = '';
		$scope.mainCtrl.selectedEnv = '';
		$scope.mainCtrl.selectedEnvName = '';

		homeCtrl.getSelectedApp = function(selectedApp){
			$scope.mainCtrl.getSelectedApp(selectedApp);
		}
		homeCtrl.getSelectedEnv = function(selectedEnv){
			$scope.mainCtrl.getSelectedEnv(selectedEnv);
		}

		homeCtrl.go = function(type){
			if(type==='application'){
				$scope.mainCtrl.getEnvironmentsUsingApplication($scope.mainCtrl.selectedApp).then(function(){
					$state.go('main.app');
				})
			}
			if(type==='environment'){
				$scope.mainCtrl.getApplicationUsingEnvironment($scope.mainCtrl.selectedEnv).then(function(){
					$state.go('main.env');
				})
			}
		}

	}]);
})();