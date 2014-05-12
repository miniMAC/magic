/*jshint node: true */

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: 'src/css/*.css',
				tasks: ['default']
			}
		},

		cssmin: {
			dist: {
				src: ['dist/magic.css'],
				dest: 'dist/magic.min.css'
			}
		},

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
      },
      dist: {
        src: 'dist/magic.css'
      }
    },

		copy: {
		    dist: {
		        files: [{
		            cwd: 'src/css/',
		            src: 'magic.css',
		            dest: 'dist/',
		            expand: true
		        }]
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['copy:dist', 'autoprefixer:dist', 'cssmin:dist']);
	grunt.registerTask('dev', ['watch']);
};
