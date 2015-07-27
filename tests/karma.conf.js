'use strict';

module.exports = function(config){
  config.set({

    basePath : '../',

    // 'app/*.js',
    // 'app/**/*.js',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/controllers/*.js',
      'app/services/*.js',
      'tests/unit/*.js'
    ],

    exclude: ['tests/e2e/scenario.js'],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
