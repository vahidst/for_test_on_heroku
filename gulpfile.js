

var gulp = require('gulp');
var util = require('gulp-util');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var watchSass = require("gulp-watch-sass");


gulp.task('browserify', function () {

    // return browserify('./public/javascripts/main.js')
    return browserify('./Client_side/nonlindqem1d.js')
        .transform(babelify, { presets: ["es2015", "react"] })
        .bundle()
        .on('error', function (e) {
            console.log(e.message);


            this.emit('end');

        })

        .pipe(source('nonlindqem1d_bundle.js'))
        // .pipe(buffer)
        // .pipe(uglify)
        .pipe(gulp.dest('./build/production'));


});

gulp.task('sass', function () {
    return gulp.src('./Client_side/public/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({includePaths: ['./build/production']}))
      .pipe(gulp.dest('./build/production'));
  });
   

// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
//   });

gulp.task("sass:watch",['sass'], () => watchSass(
    "./Client_side/public/sass/**/*.{scss,sass}")
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({includePaths: ['./build/production']}))
    .pipe(gulp.dest('./build/production')));



gulp.task('watch', ['browserify','sass'], function () {

    // gulp.watch('./public/**/*.js', ['browserify']);
    gulp.watch('./Client_side/**/*.js', ['browserify']);
    // gulp.watch('./sass/**/*.scss', ['sass']);

});





gulp.task('default',['browserify','sass','watch','sass:watch']);
// gulp.task('default',['sass','sass:watch']);












