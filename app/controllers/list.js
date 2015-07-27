'use strict';

/* Controllers */

angular.module('appControllers', [])

.controller('SearchHome', ['$scope', 'Stub',
  function($scope, Stub) {
    $scope.prop = Stub.query();
    $scope.scopedProperty = 'Welcome to View1';
  }]);
