'use strict';

module.exports = function (grunt) {
  grunt.registerTask('e2e', [
     'clean:dist',
    'sync:build',
    'ngconstant:dev',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
    'connect:protractor',
    'protractor:e2e'
  ]);
};
