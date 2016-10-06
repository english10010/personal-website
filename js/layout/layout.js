var events = {};

function normal_out_trans_in() {
    $("#normal_container").fadeOut(500, function () {
        $("#transparent_container").fadeIn(500);
    });
}

function normal_in_trans_out() {
    $("#transparent_container").fadeOut(500, function () {
        $("#normal_container").fadeIn(500);
    });
}

$(function () {
    $("#DefaultClick").trigger('click');
    
    var $navbarItems = $(".navbar-nav").children("li");
    $navbarItems.bind("click",function () {
        $navbarItems.removeClass("active");
        $(this).addClass("active");
    });

    $("[data-toggle='tooltip']").tooltip();
    
    console.log($("body").height());
    $("#modal").height($("body").height());
    
    $.extend(events, {
        'resume':function () {
            normal_out_trans_in();
        },
        'project':function () {
            console.log('in');
            normal_in_trans_out();
        },
        'modal-toggle':function () {
            
        },
        'close-modal':function () {
            $("#modal").fadeOut(500);
        },
        'turn-light':function () {
            var $this = $(this);
            var $modal = $("#modal");
            var light = Number($this.attr("data-light"));
            light += 0.05;
            $modal.css("background","rgba(0,0,0," + light + ")");
            $this.attr("data-light",light);
        },
        'share-twitter':function () {
            window.open("https://twitter.com/intent/tweet?hashtags=chen&text=This%20is%20Chen%20Lu's%20website:&tw_p=tweetbutton&url=https%3A%2F%2Fchenlu1992.com&via=twitterdev","Share","width=600,height=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        }
    });
});