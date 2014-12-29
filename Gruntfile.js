module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: "/* weather-instruments */\n"
      },
      build: {
        src: 'weather-instruments.js',
        dest: 'build/weather-instruments.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['uglify']);
}

