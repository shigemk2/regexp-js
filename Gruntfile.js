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
        qunit: {
            all: ['test/*.html']
        },
        watch: {
            gruntfile: {
                files: ['<%= uglify.dist.src %>','test/*'],
                tasks: ['uglify', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['watch', 'uglify', 'qunit']);
};

