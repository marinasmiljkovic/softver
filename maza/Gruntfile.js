module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

}
