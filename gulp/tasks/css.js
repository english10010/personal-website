var gulp = require('gulp');
var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
//less
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');
gulp.task('css',['css-component'],function(){
    return css_task();
});
gulp.task('css-component',function(){
    css_task(options.c);
});
function css_task(component){
    var src = 'less/index.less';
    var dist = 'build/css';
    if( component ){
        if(component == "all"){
            for(var i = 0; i < config.allcomponents.length; i++){
                console.log("css:"+config.allcomponents[i]);
                src = 'less/' + config.allcomponents[i] + 'index.less';
                dist = 'build/css/' + config.allcomponents[i];
                gulp.src([src])
                    .pipe(less())
                    .pipe( autoprefixer({
                        browsers: ['last 2 versions', 'Android >= 4.0'],
                        cascade: true, //是否美化属性值 默认：true
                        remove:true //是否去掉不必要的前缀 默认：true
                    }) )
                    .pipe(minifyCss())
                    .pipe(gulp.dest(dist));
            }
        }else {
            src = 'less/' + config.components + 'index.less';
            dist = 'build/css/' + config.components;
        }
    }
    return gulp.src([src])
        .pipe(less())
        .pipe( autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true
            remove:true //是否去掉不必要的前缀 默认：true
        }) )
        .pipe(minifyCss())
        .pipe(gulp.dest(dist));
}