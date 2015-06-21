module.exports = function(grunt) {

	require('grunt-task-loader')(grunt);

	grunt.initConfig({
		'karma': {
			unit: {
				configFile: 'karma.conf.js',
				logLevel: 'ERROR',
			}
		},

		'babel': {
			options: {
				sourceMap: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.es6.js'],
					dest: 'src',
					ext: '.js'
				}]
			}
		}
	});

	grunt.registerTask('default', ['babel:dist','karma:unit']);
};