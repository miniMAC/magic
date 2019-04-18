/**
 * Gulp
 *
 * npm install --save-dev gulp gulp-sass gulp-postcss autoprefixer cssnano gulp-sourcemaps gulp-rename
 *
 * @see https://gulpjs.com/
 */

const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
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
    return src(paths.styles.src)
        // Init sourcemaps before compile files
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        // Use postcss with autoprefixer
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest(paths.styles.dest))
        .pipe(postcss([ cssnano() ]))
        // Now add/write the sourcemaps
        .pipe(sourcemaps.write())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(paths.styles.dest));
}

// Watchers
watch('assets/scss/*.scss', style);

// Yo baby!! ✌️
exports.default = parallel( style );