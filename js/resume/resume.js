var events = {};

$(function () {
    var $navs = $("#wrap").find("a.shown");
    /*$("#wrap").render("resume",null);*/
    $.extend(events,{
        'modal': function () {
            var $this = $(this);
            var $modal = $("#modal", parent.document);
            var $container = $modal.find("#template_container");
            var $modal_title = $modal.find(".title");
            var lineHeight = $(window).width() >= 475? $modal.height() * 0.4 * 0.14: $modal.height() * 0.8 * 0.14;
            data = {
              title: $this.data("title")
            };
            var templateName = "modal";
            for(var i = 0; i < $this.data("title").length; i++){
                if($this.data("title").charAt(i) == " "){
                    break;
                }
                templateName += $this.data("title").charAt(i);
            }
            $container.render(templateName,data,function () {
                $navs.removeClass("active");
                $this.addClass("active");
                $modal_title.css("line-height", lineHeight + "px");
                $modal.fadeIn(500);
                $modal.find(".pop_modal").fadeIn(500,function () {
                });
            });
        },
        'feelgood': function () {
            setTimeout(function () {
                clearInterval(navChosen);
                $("#wrap").find(".active").trigger("click");
            },3000);
            var navChosen = setInterval(function(){
                var randNumber = Math.floor((Math.random() * $navs.length));
                $navs.removeClass("active");
                $navs.eq(randNumber).addClass("active");
            }, 100);
        }
    });
});