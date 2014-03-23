'use strict';

var barkshack = angular.module('barkApp', []);

barkshack.config(function($routeProvider){
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
   
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
});

