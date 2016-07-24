
module.exports = function( grunt ){

  grunt.initConfig({
    jshint: {
      options: {
      	asi: true,
      	boss: true,
      	expr: true,
      	multistr: true
      },
      files: ['src/**/*.js', 'test/src/*.js', 'test/spec/*.js']
    },

    csslint: {
	    src: ['src/css/**/*.css']
	},

	uglify: {
	    prod: {
	      files: [{
	          expand: true,
	          cwd: 'dist/js',
	          src: '**/*.js',
	          dest: 'dist/js'
	      }]
	    }
	},

	clean: ["dist"],

	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'dist/css',
	      src: ['*.css'],
	      dest: 'dist/css',
	      ext: '.css'
	    }]
	  }
	},

  watch: {
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['sass'],
      options: {
        // Start a live reload server on the default port 35729
        livereload: true,
      },
    },
    js: {
      files: ['src/js/*.js'],
      tasks: ['jshint', 'babel'],
      options: {
        // Start another live reload server on port 1337
        livereload: true,
      },
    }
  },

  sass: {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'main.css': 'main.scss'
        }
    }
  },

  babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'js/TodoComp.js': 'js/jsx/TodoComp.js'
            }
        }
    },

	copy: {
	  prod: {
	    expand: true,
	    cwd: 'src/',
	    src: '**',
	    dest: 'dist/'
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', [ 'jshint', 'csslint', 'clean', 'copy', 'cssmin', 'uglify', 'babel', 'sass']);
}
