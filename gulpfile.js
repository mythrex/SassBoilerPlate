const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');

//for public folder
gulp.task('sass',() => {
	return gulp.src('public/sass/**/*.sass')
		.pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
		.pipe(livereload());
})

gulp.task('publicjs',() => {
	return gulp.src('public/js/**/*.js')
		.pipe(plumber())
		.pipe(livereload());
})

gulp.task('html',() => {
	return gulp.src('public/**/*.html')
		.pipe(livereload());
})

//watch task
gulp.task('watch',() => {
	livereload.listen();
	gulp.watch('public/sass/**/*.sass',['sass']);
  gulp.watch('public/**/*.js',['publicjs']);
	gulp.watch('public/**/*.html',['html']);
})

//serving both task as default
gulp.task('default',['watch']);
