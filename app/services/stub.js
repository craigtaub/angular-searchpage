'use strict';

angular.module('appServices', ['ngResource']).
factory('Stub', ['$resource',
  function($resource){
    return $resource('api/:dataId.json', {}, {
      query: {method:'GET', params:{dataId:'static-array'}, isArray:true}
    });
  }]);
