'use strict';

module.exports = {
  build: {
    src: ['<%= conf.dist %>/index.html'],
    options: {
      ignorePath: '../<%= conf.app %>/'
    }
  },
  test: {
    src: ['<%= conf.dist %>/coverage.html'],
    options: {
      ignorePath: '../<%= conf.app %>/'
    }
  },
  tmp: {
    src: ['<%= conf.tmp %>/index.html']
  }
};
