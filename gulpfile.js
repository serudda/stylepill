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

/*Path Files*/
var paths = {
    index: 'www/index.html',
    htmlTemplates: ['www/*.html'],
    vendorStyles: [
        'www/bower_components/animate.css/animate.min.css',
        'www/bower_components/bootstrap/dist/css/bootstrap.min.css',
    ],
    inputSass: 'sets/**/*.scss',
    outputSass: 'sets/'
};


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
 * SASS to CSS - based on http://www.sitepoint.com/simple-gulpy-workflow-sass/
 * @desc This task take app.scss and transform this to .css,
         after that put each new .css into App_Web -> dist -> styles
 */

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass-min', function() {
  gulp
    .src(paths.inputSass)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(rename('button.min.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.outputSass))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp
    .src(paths.inputSass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.outputSass))
    .pipe(connect.reload());
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
    gulp.watch(paths.inputSass, ['sass']);
    gulp.watch('build/styleguide.md', ['styleguide']);
});

/* LAUNCH LOCALSERVER */
gulp.task('start', ['sass', 'webserver', 'styleguide', 'watch']);
