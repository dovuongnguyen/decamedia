angular.module("decamedia").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {
 
    $locationProvider.html5Mode(true);
 
    $stateProvider
      .state('decamedia', {
        url: '/decamedia',
        templateUrl: 'client/billboard/views/billboard.ng.html',
        controller: 'BillboardCtrl'
      })
      .state('decamediaDetail', {
        url: '/decamedia/:deviceId',
        templateUrl: 'client/billboard/views/billboardDetail.ng.html',
        controller: 'BillboardDetailCtrl'
      });
 
    $urlRouterProvider.otherwise("/decamedia");
  }]);