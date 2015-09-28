'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      gosha: {
        options: {
          sourceMap: true
        },
        files: {
          './css/style.css': './css/sass/*.scss'
        }
      }
    }
  };

  config = require('./.gosha')(grunt, config);

  grunt.initConfig(config);
};
