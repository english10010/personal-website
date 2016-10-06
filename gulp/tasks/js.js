var gulp = require('gulp');
var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
//js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config');
gulp.task('js',['js-component'],function(){
    return js_task();
});
gulp.task('js-component',function(){
    js_task(options.c);
});
function js_task(component){
    var src = 'js/index.js';
    var dist = 'build/js';
    if( component ){
        if(component == "all"){
            for(var i = 0; i < config.allcomponents.length; i++){
                console.log("js:"+config.allcomponents[i]);
                src = 'js/' + config.allcomponents[i] + '*';
                dist = 'build/js/' + config.allcomponents[i];
                gulp.src([src])
                    .pipe(concat('app.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest(dist));
            }
        }else {
            src = 'js/' + config.components + '*';
            dist = 'build/js/' + config.components;
        }
    }
    return gulp.src([src])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
}
