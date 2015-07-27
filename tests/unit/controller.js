'use strict';

/* jasmine specs for controllers go here */
describe('craigDoctifyApp controllers', function() {

  beforeEach(module('craigDoctifyApp'));
  beforeEach(module('appServices'));

  describe('SearchController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/static-array.json').
          respond([{name: 'First Item'}]);

      scope = $rootScope.$new();
      ctrl = $controller('SearchController', {$scope: scope});
    }));

    it('should create "stubs" model with 1 item fetched from xhr', function() {
          expect(scope.prop.length).toBe(0);
          $httpBackend.flush();
          expect(scope.prop.length).toBe(1);
          expect(scope.prop[0].name).toBe('First Item');
    });

    it('should set the default value of scoped property', function() {
          expect(scope.scopedProperty).toBe('Welcome to View1');
    });

  });

});
