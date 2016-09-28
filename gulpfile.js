// NPM
/*
npm install gulp
npm install --save-dev gulp-clean-css
npm install --save-dev gulp-concat
npm install --save-dev gulp-notify

short syntax: npm install --save-dev gulp-clean-css gulp-concat gulp-notify
*/

var gulp = require('gulp');
	cleanCSS 	 = require('gulp-clean-css'), // minimize CSS
	concat       = require('gulp-concat'), // concat files
	notify       = require('gulp-notify') // simple notify


/**
 * CSS Styles
 */
gulp.task('magicCSS', function () {

 	return gulp.src([
 		'./css/base.css',
 		'./css/**/*.css'
 	]) // take all CSS files
 	.pipe(concat('magic.css')) // Create the CSS
 	.pipe(gulp.dest('./')) // destination path
	.pipe(notify({ 
		message: 'magic CSS, created!',
		onLast: true,
		sound: 'Pop'
		})
	) // Simple Notify
});

gulp.task('magicCSSmin', function () {

 	return gulp.src([
 		'./css/base.css',
 		'./css/**/*.css'
 	]) // take all CSS files
 	.pipe(concat('magic.min.css')) // Create the CSS
 	.pipe(cleanCSS()) // minimize CSS
 	.pipe(gulp.dest('./')) // destination path
	.pipe(notify({ 
		message: 'magic CSS minifyed version, created!',
		onLast: true,
		sound: 'Pop'
		})
	) // Simple Notify
});

// Default Task
gulp.task('default', ['magicCSS', 'magicCSSmin']);