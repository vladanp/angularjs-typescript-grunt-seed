'use strict';

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = {
  build: {
    files: {
      "<%= conf.dist %>/resources/css/main.css": "<%= conf.dist %>/<%= conf.styles %>/*.less"
    }
  },
  prod: {
    files: {
      "<%= conf.dist %>/resources/css/main.css": "<%= conf.app %>/<%= conf.styles %>/*.less"
    },
    options: {
      plugins: [
        new (LessPluginAutoPrefix)({ browsers: ["last 2 versions"] }),
        new (LessPluginCleanCSS)(new LessPluginCleanCSS({ advanced: true }))
      ]
    }
  }
};
