const _package = require('./package.json');
const _path = require('path');
const _fs = require('fs-magic');

// GULP plugins
const gulp = require('gulp');
const concat = require('gulp-concat');
const wrapper = require('gulp-wrapper');
const replace = require('gulp-replace');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const prettyError = require('gulp-prettyerror');
const uglify = require('gulp-uglify');
const _express = require('express');

// license header prepended to builds
const licenseHeader = '/*! HEADER */\n';


// JS bundle
gulp.task('js', function (){
    return gulp.src([
        'js/base/bootstrap.js',
        'js/extend/random.js',
        'js/extend/string.js',
        'js/extend/char-classes.js',
        'js/pages/*.js'
    ])
        .pipe(prettyError())
        .pipe(uglify({
            output: {
                comments: function(node, comment){
                    return comment.type == 'comment2' && comment.value.charAt(0) === '!';
                }
            }
            
        }))
        .pipe(concat('webtools.min.js'))
        .pipe(gulp.dest('dist'));
});

// LESS to CSS
gulp.task('less', function (){

    return gulp.src(['css/*.less'])
        .pipe(prettyError())

        .pipe(less())

        // fix image paths
        .pipe(replace(
            '../img/', 'img/'
        ))

        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('webtools.min.css'))

        // add license header
        .pipe(wrapper({
            header: licenseHeader
        }))

        // add version string
        .pipe(replace(/\[\[VERSION]]/g, _package.version))

        .pipe(gulp.dest('dist'));
});

// copy static files
gulp.task('resources', async function(){
    const files = [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'assets/favicon.png'
    ];

    // copy to dist dir
    return Promise.all(files.map(file => _fs.copy(
        _path.join(__dirname, file), 
        _path.join(__dirname, 'dist', _path.basename(file))
    )));
});

// cleanup dist dir
gulp.task('cleanup', async function(){
    return _fs.rmrf(_path.join(__dirname, 'dist'));
});

// development webserver
gulp.task('webserver', function(){
    // start development webserver
    const webapp = _express();
    webapp.get('/', function(req, res){
        res.sendFile(_path.join(__dirname, 'dist/token.html'));
    });
    webapp.get(/^\/\w{12}\/(.+)$/, function(req, res){
        res.sendFile(_path.join(__dirname, 'dist', req.params[0]));
    });
    webapp.use(_express.static(_path.join(__dirname, 'dist')));
    webapp.listen(8888, () => console.log('DEV Webserver Online - localhost:8888'));
});

// default
gulp.task('default', gulp.series('less', 'resources', 'js', 'webserver'));