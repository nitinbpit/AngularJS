app.controller('mainCtrl', ['$rootScope','$scope','$log','$state','applicationSrvc','environmentSrvc','$q', 
  function($rootScope,$scope,$log,$state,applicationSrvc,environmentSrvc,$q){

    var mainCtrl=this;
    mainCtrl.title = 'Nitin\'s Application';

    var currentState = $state.current.name;

    var getApplications = function(){
      return applicationSrvc.getApplications().then(function(response){
        return response.data.applications;
      });
    }
    var getEnvironments = function(){
      return environmentSrvc.getEnvironments().then(function(response){
        return response.data.environments;
      });
    }

    getApplications().then(function(response){
      mainCtrl.applications = response;
    });
    getEnvironments().then(function(response){
      mainCtrl.environments = response;
    });


    mainCtrl.getSelectedApp = function(selectedApp){
      mainCtrl.selectedEnv = '';
      mainCtrl.selectedEnvName = '';
      mainCtrl.selectedApp = selectedApp;
      mainCtrl.selectedAppName = selectedApp.name;
      $rootScope.selectedAppName = selectedApp.name;
    }

    mainCtrl.getSelectedEnv = function(selectedEnv){
      mainCtrl.selectedEnv = selectedEnv;
      mainCtrl.selectedEnvName = selectedEnv.name;   
      $rootScope.selectedEnvName = selectedEnv.name;
    }

    mainCtrl.getEnvironmentsUsingApplication = function(selectedApp){
      return getEnvironments().then(function(response){
        var environments = [];
        angular.forEach(response, function(environment){
         if(environment.applicationId===selectedApp.id){
          environments.push(environment);
        }
      })
        mainCtrl.environments = environments;
      })
    }

    mainCtrl.getApplicationUsingEnvironment = function(selectedEnv){
      return getApplications().then(function(response){
        angular.forEach(response,function(application){
          if(application.id===selectedEnv.applicationId){
            mainCtrl.selectedApp = application;
            mainCtrl.selectedAppName = application.name;
            mainCtrl.getEnvironmentsUsingApplication(mainCtrl.selectedApp).then(function(){
              return application;
            })
          }
        })
      });
    }

  }])
