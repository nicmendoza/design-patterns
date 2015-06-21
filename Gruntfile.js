var fs = require('fs');

module.exports = function(grunt) {

	require('grunt-task-loader')(grunt, {
		customTasksDir: 'tasks'
	});

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
		},

		'template' : {
			readme: {
				options: {
					data: (function(){
						return fs.readdirSync('src').reduce(function(accumulator,current){

							var key = current.replace(/\./g,'_');

							console.log(key);

							accumulator[key] = fs.readFileSync('src/' + current, {encoding: 'utf8'});
							return accumulator;
						},{});
					})()
				},
				files: {
					'Readme.md' : ['Readme.md.template']
				}
			}
		}
	});

	grunt.registerTask('default', ['babel:dist','karma:unit']);
};