'use strict';

module.exports = {
  build: {
    files: [{
      src: [
        '<%= conf.dist %>/<%= conf.scripts %>/**/*.ts'
      ]
    }]
  },
  tmp: {
    files: [{
      src: [
        '<%= conf.tmp %>/<%= conf.scripts %>/**/*.ts'
      ]
    }],
    options: {
      sourceMap: false
    }
  }
};
