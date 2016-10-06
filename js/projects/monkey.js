var events = {};
var root = getRootPath();

$(function () {
    //检测平台
    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad: false
    };
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    var fqdn = "P3NWVPWEB161.shr.prod.phx3.secureserver.net";
    redirectToLogin = function () {
        window.location.href = "https://" + fqdn + ":8443";
    };


    $("img").bind("contextmenu", function () {
        return false;
    });

    $("[data-toggle='tooltip']").tooltip();
    $(".slider").draggable({
        axis: "x",
        containment: "parent",
        start: function () {
            $(".slider").removeClass("transition-all");
        },
        stop: function () {
            var $slider = $(".slider");
            $slider.addClass("transition-all");
            var left = $slider.css("left");
            var left_value = parseInt(left.substr(0, left.length - 2));
            var $background_container = $("#background_container");
            var $item1 = $("#item1");
            var $item2 = $("#item2");
            if (left_value / $(".switcher").width() >= 0.2 && left_value / $(".switcher").width() <= 0.4) {
                $slider.css("left", "30%");
                $slider.attr("data-level","2");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/planet1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/planet2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background2").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background2").removeClass("hide-display").addClass("show-display");
                });
            } else if (left_value / $(".switcher").width() < 0.2) {
                $slider.css("left", "0");
                $slider.attr("data-level","1");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/cloud1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/cloud2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background1").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background1").removeClass("hide-display").addClass("show-display");
                });
            } else if (left_value / $(".switcher").width() > 0.4) {
                $slider.css("left", "60%");
                $slider.attr("data-level","3");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/fish1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/fish2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background3").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background3").removeClass("hide-display").addClass("show-display");
                });
            }
        }
    });

    $("#phpConnect").click(function () {
        $.ajax({
            type: "Post",
            url: "php/data.php",
            /*contentType: "application/json; charset=utf-8",*/
            dataType: "json",
            success: function (data) {
                console.log(data);
                alert(data['hello']);
            },
            complete: function () {
                console.log('finish');
            }
        });
    });


    $("#ball").click(function () {
        $("h1").fadeOut(500);
        $("#images").find("img").fadeOut(500, function () {
            $(".background_container").slideUp(500);
            $("#ball_container").css("margin-top", "-200px");
        });
    });

    //press and un-press of button
    $(".buttons").find("button").mousedown(function (e) {
        console.log($(e.target));
        $(e.target).addClass("active");
    });
    $(".buttons").find("button").mouseup(function (e) {
        $(e.target).removeClass("active");
    });
    $(document).mouseup(function () {
        $(".buttons").children("button").removeClass("active");
    });

    //background and items animating according to mouse movement
    $(window).mousemove(function(event) {
        $("#mouse_coordinates").find("span").eq(0).text(event.pageX).siblings("span").text(event.pageY);
        $("#background_container").children("img").css({top: -event.pageY/50, left: -event.pageX/20});
        var $images = $(".item_container").find("img");
        for(var i = 0; i < $images.length; i++){
            var $element = $images.eq(i);
            $element.css({
                top: (event.pageY - $(window).height() / 2) * $element.data("speedy") + $element.data("top") / 100 * $(".item_container").width(),
                left: (event.pageX - $(window).width() / 2) * $element.data("speedx") + $element.data("left") / 100 * $(".item_container").width()
            })
        }
    });

    $.extend(events, {
        'test': function () {
            var $slider = $(".slider");
            var $item1 = $("#item1");
            var $item2 = $("#item2");
            var $background_container = $("#background_container");
            if ($slider.attr("data-level") == 1) {
                $slider.css("left", "30%");
                $slider.attr("data-level","2");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/planet1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/planet2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background2").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background2").removeClass("hide-display").addClass("show-display");
                });
            } else if ($slider.attr("data-level") == 3) {
                $(".slider").css("left", "0");
                $slider.attr("data-level","1");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/cloud1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/cloud2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background1").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background1").removeClass("hide-display").addClass("show-display");
                });
            } else if ($slider.attr("data-level") == 2) {
                $(".slider").css("left", "60%");
                $slider.attr("data-level","3");
                $item1.fadeToggle(200, function () {
                    $item1.attr("src", root + "/build/images/fish1.png")
                });
                $item2.fadeToggle(200, function () {
                    $item2.attr("src", root + "/build/images/fish2.png")
                });
                $background_container.find(".show-display").hide("slide", {direction: 'left'}, 500, function () {
                    $background_container.find(".show-display").addClass("hide-display").removeClass("show-display");
                });
                $("#background3").show("slide", {direction: 'right'}, 500, function () {
                    $item1.fadeToggle(200);
                    $item2.fadeToggle(200);
                    $("#background3").removeClass("hide-display").addClass("show-display");
                });
            }
        }
    });
});