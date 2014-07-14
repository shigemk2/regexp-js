module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'regexp.js',
                dest: 'regexp.min.js'
            }
        },
        watch: {
            gruntfile: {
                files: '<%= uglify.dist.src %>',
                tasks: ['uglify']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['watch', 'uglify']);
};

