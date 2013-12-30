'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ['src/less'],
                },
                files: {
                    'client/css/site.css': 'src/less/site.less',
                    'client/css/bootstrap.css': 'src/less/bootstrap/bootstrap.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/less/*.less'],
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
            scripts: {
                files: ['client/js/*.js'],
                options: {
                    nospawn: true,
                    interrupt: true
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'watch');
};