var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('templates/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('/'))
});

gulp.task('css', function(){
  return gulp.src('templates/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('/css'))
});

gulp.task('js', function(){
  return gulp.src('templates/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);