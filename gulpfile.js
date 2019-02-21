const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function  style(){
    // Location of src style file
    return gulp.src('./scss/**/*.scss')

    // Pass the style file for sass compile
      .pipe(sass().on('error', sass.logError))

    // save the css file
      .pipe(gulp.dest('./css'))
    
    // Syncing with browser
      .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;

