'use strict';

module.exports = {
  options: {
    // can be a configuration object or a filepath to tslint.json
    configuration: 'tslint.json',
    force: true
  },
  files: {
    src: [
      '<%= conf.app %>/<%= conf.scripts %>/**/*.ts'
    ]
  }
};
