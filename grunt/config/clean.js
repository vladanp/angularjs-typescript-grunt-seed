'use strict';

module.exports = {
  dist: {
    src: [
      '<%= conf.tmp %>/',
      '<%= conf.dist %>/',
      '<%= conf.coverage %>/'
    ]
  },
  tmp: {
    src: [
      '<%= conf.tmp %>/'
    ]
  },
  build: {
    src: [
      'build_*'
    ]
  }
};
