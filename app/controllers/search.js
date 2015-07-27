'use strict';

/* Controllers */

angular.module('appControllers', [])

.controller('SearchController', ['$scope', 'Stub',
  function($scope, Stub) {
    $scope.specialists = Stub.query({dataType : 'specialists'});
    $scope.insurers = Stub.query({dataType : 'insurers'});

    $scope.scopedProperty = 'It is built with Angular';

    $scope.submit = function() {
        $scope.specialistsText = this.specialistsText;
        $scope.insurersText = this.insurersText;
    };

  }]);
