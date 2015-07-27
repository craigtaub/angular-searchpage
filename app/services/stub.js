'use strict';

angular.module('appServices', ['ngResource']).
factory('Stub', ['$resource',
  function($resource){
    return $resource('api/:dataType.json', {}, {
      query: {method:'GET', params: {dataType: '@dataType'}, isArray:true}
    });
  }]);
