/**
 * Gulp
 *
 * npm install --save-dev gulp gulp-sass gulp-postcss autoprefixer gulp-rename
 *
 * @see https://gulpjs.com/
 */

const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

// Define project paths
let paths = {
    styles: {
        // grab all .scss files from that path
        src: 'assets/scss/*.scss',
        // destination path
        dest: 'dist'
    }
};

// SCSS
function style() {
    return src(paths.styles.src, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest(paths.styles.dest, { sourcemaps: '.' }))
}

function styleMin() {
    return src(paths.styles.src, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(paths.styles.dest, { sourcemaps: '.' }));
}


// Watchers
watch('assets/scss/*.scss', style);

// Yo baby!! ✌️
exports.default = parallel( style, styleMin );