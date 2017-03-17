'use strict';

module.exports = {
  server: {
    options: {
      port: '<%= conf.serverPort %>',
      livereload: true,
      hostname: 'localhost',
      base: '<%= conf.dist %>',
      open: {
        target: 'http://localhost:<%= conf.serverPort %>'
      }
    }
  },
  coverage: {
    options: {
      port: '<%= conf.testPort %>',
      livereload: true,
      hostname: 'localhost',
      base: {
        path: '<%= conf.dist %>',
        options: {
          index: 'coverage.html'
        }
      },
      open: {
        target: 'http://localhost:<%= conf.testPort %>'
      }
    }
  },
  protractor: {
    options: {
      port: '<%= conf.serverPort %>',
      base: '<%= conf.dist %>'
    }
  }
};
