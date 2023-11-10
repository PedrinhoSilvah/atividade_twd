const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function images(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function compilarSass(){
    return gulp.src('./src/sass/*scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}


exports.default = gulp.parallel(compilarSass, images);

exports.watch = function(){
    gulp.watch('./src/sass/*scss', gulp.parallel(compilarSass));
}