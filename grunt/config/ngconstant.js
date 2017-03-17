'use strict';

module.exports = {
  options: {
    name: 'app.config',
    wrap: true
  },
  dev: {
    constants: {
      debug: true
    },
    options: {
      dest: '<%= conf.dist %>/<%= conf.scripts %>/config.js',
    }
  },
  prod: {
    constants: {
      debug: false
    },
    options: {
      dest: '<%= conf.tmp %>/<%= conf.scripts %>/config.js',
    }
  }
};
