'use strict';

angular.module('craigDoctifyApp', [
  'ngRoute',
  'appControllers',
  'appServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/view', {
        templateUrl: 'views/view1.html',
        controller: 'SearchHome'
      }).
      otherwise({
        redirectTo: '/view'
      });
}]);
