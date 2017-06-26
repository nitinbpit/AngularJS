'use strict';

angular.
module('phonecatApp').
  // config(['$locationProvider' ,'$routeProvider',
  //   function config($locationProvider, $routeProvider) {
  //     $locationProvider.hashPrefix('!');

  //     $routeProvider.
  //       when('/phones', {
  //         template: '<phone-list></phone-list>'
  //       }).
  //       when('/phones/:phoneId', {
  //         template: '<phone-detail></phone-detail>'
  //       }).
  //       otherwise('/phones');
  //   }
  // ]).
  config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main/home');
    $stateProvider
    .state('main',{
      url: '/main',
      templateUrl: 'nitin/main.prtl.html',
      controller: 'mainCtrl as mainCtrl',
      abstract : true
    })
    .state('main.home',{
      url: '/home',
      templateUrl: 'nitin/home.prtl.html',
      controller: 'homeCtrl as homeCtrl',
    })
    .state('main.app',{
      url: '/app',
      templateUrl: 'nitin/application.prtl.html'
    })
    .state('main.env',{
      url: '/env',
      templateUrl: 'nitin/environment.prtl.html',
      controller: 'envCtrl as envCtrl'
    })
    .state('main.env.resource',{
      url: '/resource',
      templateUrl: 'nitin/resource.prtl.html'
    })
    .state('main.env.action',{
      url: '/action',
      templateUrl: 'nitin/action.prtl.html'
    })
    .state('phones', {
      url: '/phones',
      template: '<phone-list></phone-list>'
    })
    .state('/phones/:phoneId', {
      url: '/phones/:phoneId',
      template: '<phone-detail></phone-detail>'
    });
  }]);
