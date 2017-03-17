'use strict';

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: '<%= conf.app %>',
      src: './**',
      dest: '<%= conf.dist %>'
    }]
  },
  tmp: {
    files: [{
      flatten: true,
      cwd: '<%= conf.app %>',
      src: ['<%= conf.scripts %>/**/*.ts', './index.html'],
      dest: '<%= conf.tmp %>/'
    }]
  },
  index: {
    flatten: true,
    cwd: '<%= conf.tmp %>',
    src: './index.html',
    dest: '<%= conf.dist %>/index.html'
  },
  static: {
    expand: true,
    dot: true,
    cwd: '<%= conf.app %>',
    dest: '<%= conf.dist %>',
    src: [
      '<%= conf.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
