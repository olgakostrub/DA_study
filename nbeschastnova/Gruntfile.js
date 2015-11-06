'use strict';

module.exports = function(grunt) {
  //require('load-grunt-tasks')(grunt);

  //var config = {
  //  pkg: grunt.file.readJSON('package.json')
 // };

  //config = require('./.gosha')(grunt, config);
  
  // load plugins
  grunt.initConfig({
  sass: {
        dist: {
            files: {
                'css/style.css': 'scss/style.scss'
            }
        }
    },
  watch: {  
        sass: {
            files: ['scss/*.scss'],
            tasks: ['sass']
        }    
    }
  });
 // grunt.loadNpmTasks('grunt-contrib-uglify');
 //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');  
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('custom',function(){
  console.log("Yuuupi! ^_^");
  });
  
  // register at least this one task
  grunt.registerTask('default', ['sass', 'watch']);
};
