'use strict';

module.exports = {
  tmp: {
    cwd: '<%= conf.app %>',
    src: '<%= conf.templates %>/**/*.html',
    dest: '<%= conf.tmp %>/template.js',
    options: {
      usemin: 'main.min.js',
      module: 'app'
    }
  }
};
