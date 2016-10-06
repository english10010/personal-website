function getRootPath(){
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    console.log(localhostPaht);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    console.log(projectName);
    return document.domain == "localhost"? (localhostPaht+projectName): (localhostPaht);
    
}

(function ($) {
    $.fn.render = function (filename,data,callback) {
        var $this = this;
        var rootPath = getRootPath();
        var path = rootPath + "/templates/" + filename + ".hbs";
        $.get(path, function (source) {
            var template = Handlebars.compile(source);
            $this.html(template(data));
            if($.isFunction(callback)){
                callback.apply($this);
            }
        }, 'html')
    }
}(jQuery));
