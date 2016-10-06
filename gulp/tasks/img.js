var gulp = require('gulp');
var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
//图片
var imagemin = require('gulp-imagemin');
var config = require('../config');
gulp.task('img',['img-component'],function(){
    return img_task();
});
gulp.task('img-component',function(){
    img_task(options.c);
})
function img_task(component){
    var src = 'img/*';
    var dist = 'build/images';
    if( component ){
        src = 'img/' + config.components + '*';
        dist = 'build/images/' + config.components;
    }
    return gulp.src([src])
        .pipe(imagemin())
        .pipe(gulp.dest(dist));
}
