'use strict';

module.exports = function(grunt) {
  var path = require('path');

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks',
      staticMappings: {
        ngconstant: 'grunt-ng-constant',
        protractor: 'grunt-protractor-runner',
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates'
      }
    },
    data: {
      conf: {
        app: 'app',
        scripts: 'scripts',
        styles: 'styles',
        images: 'images',
        templates: 'templates',
        dist: 'build',
        tmp: '.tmp',
        coverage: 'coverage',
        serverPort: 9001,
        testPort: 9002
      }
    }
  });
};
