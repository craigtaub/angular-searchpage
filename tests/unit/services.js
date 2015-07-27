'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('craigDoctifyApp'));

  // Test service availability
  it('check the existence of Stub factory', inject(function(Stub) {
      expect(Stub).toBeDefined();
    }));
});
