'use strict';

module.exports = function (grunt) {
  grunt.registerTask('serve', [
    'tslint',
    'clean:dist',
    'sync:build',
    'ngconstant:dev',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
    'connect:server',
    'watch'
  ]);
};
