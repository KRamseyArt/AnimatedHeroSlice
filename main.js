$(document).ready(function(){
    $(".action").click(function(){
        $(".cont").animate({"width":"0%"}, 600,"EaseOutCirc");
        $(".cont").animate({
            "opacity":"1",
            "background": "white"
        },0);
        $(".pen-label").fadeIn(1000);
        $(".rect").animate({
            "width":"25%",
            "box-shadow":"0 0 20px gray"
        }, 1000, 'easeInCirc');
        $(".pen-label").animate({
            "color": "grey"
        },1000);
    });

    starter();
    function starter(){
        $(".cont").animate({
            "opacity":"1"
        },900);
        $(".rect").animate({
            "width":"25%"
        }, 1000, 'easeInOutCirc');
        $(".pen-label").fadeIn(1000);
        $(".pen-label").animate({
            "color": "grey"
        },1000);
    }

    $(".rev").click(function(){
        $(".rect").animate({
            "width":"0%",
            "box-shadow":"0"
        }, 1000, 'easeInOutCirc');
        $(".pen-label").fadeIn(1000);
        $(".pen-label").animate({
            "color": "gray"
        },1000);
    });
    //cool rubberband effect vvv
    /*$(".rev").click(function(){
        $(".rect").animate({
            "width":"25%",
            "box-shadow":"0"
        }, 1000, 'easeInOutCirc');
        $(".pen-label").fadeIn(1000);
        $(".pen-label").animate({
            "color": "white"
        },1000);
    });*/

    $(".trigger-an").click(function(){
        $(".rect").animate({
            "-webkit-transform":"skew(200deg)"
        }, 500);

        $(".rect").animate({
            "transform":"skew(200deg"
        }, 500);

        $(".rect").css({
            "transform": "skew(200deg)"
        })
    });
});