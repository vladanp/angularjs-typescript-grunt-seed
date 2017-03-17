'use strict';

module.exports = function(grunt) {
  return {
    main: {
      options: {
        archive: 'build_' + grunt.template.today('yyyy-mm-dd-HH-MM-ss') + '.zip'
      },
      files: [{
        expand: true,
        cwd: '<%= conf.dist %>/',
        src: ['**/*']
      }]
    }
  }
};
