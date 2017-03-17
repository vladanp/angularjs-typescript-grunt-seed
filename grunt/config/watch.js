'use strict';

module.exports = {
  // Watch TS files
  ts: {
    files: [
      '<%= conf.app %>/**/*.ts'
    ],
    tasks: ['tslint', 'sync:build', 'ts:build']
  },
  // Watch html files
  html: {
    files: ['<%= conf.app %>/**/*.html'],
    tasks: ['sync:build']
  },
  // Watch css files
  css: {
    files: ['<%= conf.app %>/<%= conf.styles %>/*.less'],
    tasks: ['sync:build', 'newer:less:build']
  },
  // Watch image files
  img: {
    files: [
      '<%= conf.app %>/<%= conf.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
    ],
    tasks: ['sync:build']
  },
  options: {
    // Reload on file update
    livereload: true
  }
};
