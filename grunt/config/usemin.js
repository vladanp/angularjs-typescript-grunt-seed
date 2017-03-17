'use strict';

module.exports = {
  html: ['<%= conf.dist %>/index.html'],
  options: {
    assetsDirs: [
      '<%= conf.dist %>/'
    ]
  }
};
