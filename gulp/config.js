var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
var components = 'components/';
var build = 'components/';
module.exports = {
    components: options.c + '/',
    allcomponents: ['layout/', 'projects/', 'resume/', 'public/'],
    build:'build/components/' + options.c + '/',
    upyun:'http://messeone-manager.b0.upaiyun.com/beta/',
    serve:'serve'
};