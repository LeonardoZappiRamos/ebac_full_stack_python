import imagemin from 'gulp-imagemin';

const { src, dest, watch } = "gulp";
const uglify = require('gulp-uglify');
const obfuscate = require("gulp-obfuscate");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function handleJavascript(){
  return src('source/scripts/*.js').pipe(uglify())
                                    .pipe(obfuscate())
                                    .pipe(dest('build/scripts'))
}
function handleSass(){
  return src('source/style/*.scss').pipe(sourcemaps.init())
                                  .pipe(sass().on('error', sass.logError))
                                  .pipe(sourcemaps.write())
                                  .pipe(dest('build/style'))
}
function handleImage(){
  return src('source/image/*').pipe(imagemin())
                              .pipe(dest('build/image'))
}

exports.default = function (){
  watch('source/scripts/*.js', handleJavascript);
  watch('source/style/*.scss', handleSass);
  watch('source/image/*', handleImage);
}