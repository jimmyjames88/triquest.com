var gulp = require('gulp');
var connect = require('gulp-connect-php7');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var vueify = require('gulp-vueify');

gulp.task('connect', function(){
	connect.server({
		base: './dist',
		port: 3000
	});
});

gulp.task('watch', function(){
	gulp.watch('./src/**/*', ['build']);
});

gulp.task('build', function(){

});


gulp.task('default', ['connect']);
