'use strict';

module.exports = {
  singlerun: {
    configFile: 'karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  },
  debug: {
    configFile: 'karma.conf.js'
  },
  coverage: {
    configFile: 'karma.conf.js',
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'build/scripts/**/*!(spec).js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: '<%= conf.coverage %>/'
    },
    reporters: ['spec', 'coverage'],
    singleRun: true,
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ]
  }
};
