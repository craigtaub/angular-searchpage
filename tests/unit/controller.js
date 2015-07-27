'use strict';

describe('craigDoctifyApp controllers', function() {

  beforeEach(module('craigDoctifyApp'));
  beforeEach(module('appServices'));

  describe('SearchController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/specialists.json').
          respond([{name: 'First specialist'}]);
      $httpBackend.expectGET('api/insurers.json').
          respond([{name: 'First insurer'}]);

      scope = $rootScope.$new();
      ctrl = $controller('SearchController', {$scope: scope});
    }));

    it('should create "stubs" model with items fetched from xhr', function() {
        expect(scope.specialists.length).toBe(0);
        $httpBackend.flush();
        expect(scope.specialists[0].name).toBe('First specialist');
    });

    it('should set the default value of scoped property', function() {
        expect(scope.scopedProperty).toBe('It is built with Angular.');
    });

  });

});
