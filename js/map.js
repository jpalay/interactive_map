var delta =           0.1;
var opacity =         0.1;
var hover_opacity =   0.8;
var initial_height =  544;
var initial_width =   800;

$(function(){
    $(".stop").mouseup(function() {
        var reg_result = /([0-9]+)$/.exec($(this).attr("id"));
        if (reg_result != null && reg_result.length == 2)
        {
            var num = reg_result[1];
            var elt = $("#slide" + num);
            if (elt.get() != false)
            {
                if (!$("#stage").hasClass("small"))
                {
                    $("#stage").addClass("small");
                    resize_stage(500);
                }
                if (elt.css("display") == "none")
                    elt.fadeIn(500);

                $(".cover:not(#slide" + num + ")").fadeOut(500);
                if ($("#slide" + num + " video").get() != false)
                {
                    var vid = $("#slide" + num + " video").get(0);
                    vid.currentTime = 0;
                    vid.play();
                }
            }
        }
    }); 

    $(".exit, #stage image").mouseup(function(){
        if ($(this).hasClass("exit") || $("#stage").hasClass("small"))
        {
            $(".cover").fadeOut(500);
            return_stage();
        }
    });
    
    $(window).resize(function() {
        delay(function(){
            resize_stage("fast");
        }, 100);
    });

    $("#stage").hover(function(){
        if ($(this).hasClass("small"))
        {
            $(this).find(".stop").attr("class", "stop enlarge");
            $(this).animate({
                opacity: hover_opacity
            });
        }
    },
    function(){
        if ($(this).hasClass("small"))
        {
            $(this).find(".stop").attr("class", "stop");
            $(this).animate({
                opacity: opacity
            });
        }
    });

});

// From http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed#answer-2854467
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function resize_stage(speed)
{
    var height = window.innerHeight / 3;
    var width = height * initial_width / initial_height + 1;
    var margin = window.innerHeight - height;

    $("#stage.small").animate({
        height:  height + "px",
        width:   width + "px",
        margin:  margin + "px 0% 0% 0%",
        opacity: opacity
    }, speed);
}

function return_stage()
{
    $("#stage").removeClass("small");
    $("#stage").animate({
        height:  initial_height + "px",
        width:   initial_width + "px",
        opacity: 1,
        margin:  "0px"
    }, "fast");

    $(".stop").attr("class", "stop");

}