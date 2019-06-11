const gulp = require('gulp');
const helpDoc = require('gulp-help-doc');
const eslint = require('gulp-eslint');
const clean = require('gulp-clean');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require("./webpack.config.js");
const nodemon = require('gulp-nodemon');

gulp.task('help', () => {
    console.log('start help task.')
    return helpDoc(gulp, {
        lineWidth: 120,
        keysColumnWidth: 32,
        emptyLineBetweenTasks: false
    });
});

gulp.task('default', gulp.series('help'));

gulp.task('lint-js', () => {
    return gulp.src([
        'src/*.js',
        'src/component/**/*.js',
        'src/page/index/*.js',
        'src/store/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean-dist', () => {
    return gulp.src('./dist/*', {read: false})
        .pipe(clean());
});

gulp.task('webpack', () => {
  return gulp.src('./src/app.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('./dist'));
});

gulp.task('package', gulp.series('clean-dist', 'webpack'));

gulp.task('server', (callback) => {
    let started = false;
    const appRunArgs = {
        isDemo: false,
        port: 9000,
        entryPoint: 'src/app.js'
    };
    const opt = {
        script: 'run-app.js',
        watch: false,
        env: appRunArgs
    };
    return nodemon(opt)
        .on('start', () => {
            if (!started) {
                callback();
                started = true;
            }
        });
});
