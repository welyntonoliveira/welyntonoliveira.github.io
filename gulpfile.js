var gulp = require ('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var mincss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('less', function () {
  gulp.src('less/template.less')
   .pipe(plumber())
   .pipe(less())
   .pipe(gulp.dest('css'))
   .pipe(mincss())
   .pipe(rename({
   	suffix:'.min'
   }))
   .pipe(gulp.dest('min-css'))
});

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less']);
});

gulp.task('default',  ['less', 'watch']);