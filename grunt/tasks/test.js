'use strict';

module.exports = function (grunt) {
  grunt.registerTask('buildForUnit', [
    'tslint',
    'clean:dist',
    'sync:build',
    'ngconstant:dev',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
  ]);

  grunt.registerTask('test', function (param) {
    grunt.task.run('buildForUnit');
    !param ? grunt.task.run('karma:singlerun') : grunt.task.run('karma:' + param);
  });
}
