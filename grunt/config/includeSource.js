'use strict';

module.exports = {
  build: {
    files: {
      '<%= conf.dist %>/index.html': '<%= conf.dist %>/index.html'
    },
    options: {
      basePath: '<%= conf.dist %>/'
    }
  },
  test: {
    files: {
      '<%= conf.dist %>/coverage.html': '<%= conf.dist %>/coverage.html'
    },
    options: {
      basePath: '<%= conf.dist %>/'
    }
  },
  tmp: {
    files: {
      '<%= conf.tmp %>/index.html': '<%= conf.tmp %>/index.html'
    },
    options: {
      basePath: '<%= conf.tmp %>/'
    }
  }
};
