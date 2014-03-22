'use strict';

angular.module('barkApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
    
    .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'MainCtrl'
      })
    
    .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl'
      })
   
      .otherwise({
        redirectTo: '/'
      });
  });
