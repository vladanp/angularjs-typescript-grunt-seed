'use strict';

module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true
    },
    files: [{
      expand: true,
      cwd: '<%= conf.dist %>',
      src: ['*.html'],
      dest: '<%= conf.dist %>'
    }]
  }
};
