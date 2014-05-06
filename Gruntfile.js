var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
	    'gitbook': {
		development: {
		    input: "./",
			github: "stumpyfr/hadoop-handbook",
			links: {
			"home": "http://stumpyfr.github.io/hadoop-handbook/",
			"about": "https://github.com/stumpyfr/hadoop-handbook",
			"issues": "https://github.com/stumpyfr/hadoop-handbook/issues",
			"contribute": "https://github.com/stumpyfr/hadoop-handbook",
		    }
			}
	    },
		'gh-pages': {
		    options: {
			base: '_book'
			    },
			src: ['**']
			},
		    'clean': {
			files: '.grunt'
			    }
	});

    grunt.registerTask('publish', [
				   'gitbook',
				   'gh-pages',
        'clean'
				   ]);
    grunt.registerTask('default', 'gitbook');
};