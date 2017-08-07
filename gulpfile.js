// VARIABLES
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
var lib = require('bower-files')();
var express = require('express');
var styledown = require('gulp-styledown');

var app = express();


/**
 * LOCAL SERVER
 * @desc This task is the responsible to run a local server in order to work locally
 */

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    middleware: function(connect, opt) {
      return [app];
    },
    fallback: 'index.html'
  });
});

/**
 * STYLEGUIDE
 * @desc This task is the responsible to create styleguide doc
 */

gulp.task('styleguide', function () {
    return gulp.src('build/styleguide.md')
        .pipe(styledown({
            filename: 'index.html'
        }))
        .pipe(gulp.dest(''));
});

/**
 * WATCH METHOD
 * @desc This task is the responsible to listen each change on some files in
 * order to reload browser or
 * doing some special task
 */

gulp.task('watch', function() {
    gulp.watch('build/styleguide.md', ['styleguide']);
});

/* LAUNCH LOCALSERVER */
gulp.task('start', ['webserver', 'styleguide', 'watch']);
