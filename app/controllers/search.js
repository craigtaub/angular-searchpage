'use strict';

angular.module('appControllers', [])

.controller('SearchController', ['$scope', 'Stub',
  function($scope, Stub) {
    $scope.specialists = Stub.query({dataType : 'specialists'});
    $scope.insurers = Stub.query({dataType : 'insurers'});

    $scope.scopedProperty = 'It is built with Angular.';

    $scope.submit = function() {
        if (this.selectedSpecialists) {
            $scope.specialistsText = this.selectedSpecialists.name;
        }
        if (this.selectedInsurers) {
            $scope.insurersText = this.selectedInsurers.name;
        }
    };

  }]);
