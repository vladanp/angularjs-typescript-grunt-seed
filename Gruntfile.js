var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    // Project settings
    conf: {
      app: 'app',
      scripts: 'scripts',
      styles: 'styles',
      images: 'images',
      templates: 'templates',
      dist: 'build',
      tmp: '.tmp',
      serverPort: 9001,
      testPort: 9002
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        src: [
          '<%= conf.tmp %>/',
          '<%= conf.dist %>/'
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
    },

    // Copy task
    sync: {
      // Copy app folder
      build: {
        files: [{
          expand: true,
          cwd: '<%= conf.app %>',
          src: './**',
          dest: '<%= conf.dist %>'
        }]
      },
      tmp: {
        files: [{
          flatten: true,
          cwd: '<%= conf.app %>',
          src: ['<%= conf.scripts %>/**/*.ts', './index.html'],
          dest: '<%= conf.tmp %>/'
        }]
      },
      index: {
        flatten: true,
        cwd: '<%= conf.tmp %>',
        src: './index.html',
        dest: '<%= conf.dist %>/index.html'
      },
      static: {
        expand: true,
        dot: true,
        cwd: '<%= conf.app %>',
        dest: '<%= conf.dist %>',
        src: [
          '<%= conf.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Compile typescript files to javascript
    ts: {
      // Compile all TS files in tmp
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
      },
      options: {
        fast: 'never'
      }
    },

    // Compile LESS to CSS
    less: {
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
    },

    // Inject Bower packages into your source code
    wiredep: {
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
    },

    // Automatically adds user js files
    includeSource: {
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
    },

    // Run protractor tests
    protractor: {
      options: {
        keepAlive: true,
        configFile: "./protractor.conf.js"
      },
      e2e: {}
    },

    // Grunt server
    connect: {
      server: {
        options: {
          port: '<%= conf.serverPort %>',
          livereload: true,
          hostname: 'localhost',
          base: '<%= conf.dist %>',
          open: {
            target: 'http://localhost:<%= conf.serverPort %>'
          }
        }
      },
      coverage: {
        options: {
          port: '<%= conf.testPort %>',
          livereload: true,
          hostname: 'localhost',
          base: {
            path: '<%= conf.dist %>',
            options: {
              index: 'coverage.html'
            }
          },
          open: {
            target: 'http://localhost:<%= conf.testPort %>'
          }
        }
      },
      protractor: {
        options: {
          port: '<%= conf.serverPort %>',
          base: '<%= conf.dist %>'
        }
      }
    },

    // Watch for changes
    watch: {
      // Watch TS files
      ts: {
        files: [
          '<%= conf.app %>/**/*.ts'
        ],
        tasks: ['sync:build', 'newer:ts:build']
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
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= conf.tmp %>/index.html',
      options: {
        dest: '<%= conf.dist %>/'
      }
    },

    // Run usemin
    usemin: {
      html: ['<%= conf.dist %>/index.html'],
      options: {
        assetsDirs: [
          '<%= conf.dist %>/'
        ]
      }
    },

    // Inject templates into angular
    ngtemplates: {
      tmp: {
        cwd: '<%= conf.app %>',
        src: '<%= conf.templates %>/**/*.html',
        dest: '<%= conf.tmp %>/template.js',
        options: {
          usemin: 'main.min.js',
          module: 'app'
        }
      }
    },

    // Minify HTML files
    htmlmin: {
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
    },

    // Run karma
    karma: {
      singlerun: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
      debug: {
        configFile: 'karma.conf.js'
      }
    },

    // Zip build
    compress: {
      main: {
        options: {
          archive: 'build_' + grunt.template.today('yyyy-mm-dd-HH-MM-ss') + '.zip'
        },
        files: [
          {
            expand: true,
            cwd: '<%= conf.dist %>/',
            src: ['**/*']
          }
        ]
      }
    }
  });

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  // Builds application and runs server
  grunt.registerTask('serve', [
    'clean:dist',
    'sync:build',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
    'connect:server',
    'watch'
  ]);

  // Run production build
  grunt.registerTask('build', [
    'clean:dist',
    'clean:build',
    'sync:tmp',
    'less:prod',
    'ts:tmp',
    'wiredep:tmp',
    'includeSource:tmp',
    'useminPrepare',
    'sync:index',
    'ngtemplates',
    'concat',
    'uglify',
    'usemin',
    'htmlmin',
    'sync:static',
    'compress',
    'clean:dist'
  ]);

  // Run e2e tests
  grunt.registerTask('test:e2e', [
    'clean:dist',
    'sync:build',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
    'connect:protractor',
    'protractor:e2e'
  ]);

  // Run unit tests
  grunt.registerTask('test:unit', [
    'clean:dist',
    'sync:build',
    'wiredep:build',
    'ts:build',
    'includeSource:build',
    'less:build',
    process.argv.indexOf("--debug") > -1 ? 'karma:debug' : 'karma:singlerun'
  ]);
};
