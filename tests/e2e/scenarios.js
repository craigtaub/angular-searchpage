'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('The app', function() {

  it('should automatically redirect to /view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/search");
  });


  describe('view', function() {

    beforeEach(function() {
      browser.get('index.html#/search');
    });


    it('should render view1 when user navigates to /search', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Welcome to the search page/);
    });

  });

});
