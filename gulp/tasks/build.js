var gulp = require('gulp');
var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
//读取HTML代码
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var config = require('../config');
gulp.task('build',['js','css'],function(){
    var component = options.c;
    if( component ){
        gulp.src( config.components + '*.html')
            .pipe(useref())
            .pipe(gulpif('*.css', minifyCss()))
            .pipe(gulpif('*.js', uglify()))
            //.pipe(useref())
            .pipe(gulp.dest( config.build ));
    }/*else{
        var components = [
            'layout/',
            'projects/',
            'resume/',
            'public/'
        ]
        for(var i = 0; i < components.length; i++){
            console.log(components[i])
            gulp.src( components[i] + '*.html')
                                .pipe(useref())
                                .pipe(gulpif('*.css', minifyCss()))
                                .pipe(gulpif('*.js', uglify()))
                                //.pipe(useref())
                                .pipe(gulp.dest( config.build ));
        }

    }*/
});