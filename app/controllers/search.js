'use strict';

/* Controllers */

angular.module('appControllers', [])

.controller('SearchController', ['$scope', 'Stub',
  function($scope, Stub) {
    $scope.prop = Stub.query();
    $scope.scopedProperty = 'Welcome to View1';

    $scope.list = ['tea'];
    $scope.text = 'hello';
    $scope.submit = function() {
      if ($scope.text) {
        $scope.list.push(this.text);
        $scope.text = '';
      }
    };
    
  }]);
