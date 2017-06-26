app.directive('headerDirective', function(){
	return {
		templateUrl :  'nitin/Header/header.prtl.html',
		controller : function($state, $rootScope, $scope){

			var headerCtrl = this;
			
			headerCtrl.showAppInput = true;
			headerCtrl.showEnvInput = true;
			headerCtrl.showTabs = true;

			var currentState = $state.current.name;

			if(currentState === 'main.home' || currentState==='main.help'){
				headerCtrl.showAppInput = false;
				headerCtrl.showEnvInput = false;
				headerCtrl.showTabs = false;
			}

			if(currentState === 'main.app'){
				headerCtrl.showEnvInput = false;
			}

			headerCtrl.getSelectedApp=function(selectedApp){
				$scope.mainCtrl.getSelectedApp(selectedApp);
				$scope.mainCtrl.getEnvironmentsUsingApplication(selectedApp);
			}
			headerCtrl.getSelectedEnv=function(selectedEnv){
				$scope.mainCtrl.getSelectedEnv(selectedEnv);
			}
		},
		controllerAs : 'headerCtrl'

	};
})
