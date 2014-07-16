var saveLicense = require('uglify-save-license');

module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '<%= banner %>',
                preserveComments: saveLicense
            },
            dist: {
                src: 'regexp.js',
                dest: 'regexp.min.js'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'regexp.js']
        },
        qunit: {
            all: ['test/*.html']
        },
        watch: {
            gruntfile: {
                files: ['Gruntfile.js', '<%= uglify.dist.src %>','test/*'],
                tasks: ['uglify', 'jshint', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task
    grunt.registerTask('default', ['watch', 'uglify', 'jshint', 'qunit']);
};

