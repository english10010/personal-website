var gulp = require('gulp');
var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
var config = require('../config');
//serve
var browserSync = require('browser-sync');
gulp.task('serve',['html','js','css','img'],function(){
    var component = options.c;
    var opts = {
        server: {
            baseDir: '.'
        },
        ghostMode: { // these are the defaults t,f,t,t
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'info',
        logPrefix: 'browserSync',
        notify: true,
        reloadDelay: 0 //1000
    };
    browserSync.init(opts);
    if (component) {
        var path_pre = config.components;
        gulp.watch(path_pre + 'css/*.less', ['css-component']);
        gulp.watch(path_pre + 'js/*.js', ['js-component']);
        gulp.watch(path_pre + 'images/*', ['img-component']);
        gulp.watch(path_pre + '*.html', ['html-component']);
        gulp.watch('.tmp/*').on('change', browserSync.reload);
    }
    gulp.watch('css/*.less', ['css']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('images/*', ['img']);
    gulp.watch('*.html', ['html']);
    gulp.watch('.tmp/*').on('change', browserSync.reload);
});
