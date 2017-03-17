'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build', [
   'tslint',
    'clean:dist',
    'clean:build',
    'sync:tmp',
    'ngconstant:prod',
    'less:prod',
    'ts:tmp',
    'wiredep:tmp',
    'includeSource:tmp',
    'useminPrepare',
    'sync:index',
    'ngtemplates',
    'concat',
    'uglify',
    'usemin',
    'htmlmin',
    'sync:static',
    'compress',
    'clean:dist'
  ]);
};
