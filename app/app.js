'use strict';

angular.module('craigDoctifyApp', [
  'ngRoute',
  'appControllers',
  'appServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      }).
      otherwise({
        redirectTo: '/search'
      });
}]);
