app.directive('sidebarDirective', function(){
	return {
		templateUrl :  'nitin/Sidebar/sidebar.prtl.html',
		controller : function($state, $rootScope, $scope){

			var sidebarCtrl = this;
			
			sidebarCtrl.options = [
			{
				name : 'Resource',
				state : 'main.env.resource()'
			},
			{
				name : 'Action',
				state : 'main.env.action()'
			}
			];
		},
		controllerAs : 'sidebarCtrl'

	};
})
