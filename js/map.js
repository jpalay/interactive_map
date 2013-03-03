$(function(){
    $(".stop").mouseup(function() {
        var reg_result = /([0-9]+)$/.exec($(this).attr("id"));
        if (reg_result != null && reg_result.length == 2)
        {
            var num = reg_result[1];
            var elt = $("#slide" + num);
            if (elt.get() != false)
            {
                elt.fadeIn(500);
                if ($("#slide" + num + " video").get() != false)
                {
                    var vid = $("#slide" + num + " video").get(0);
                    vid.currentTime = 0;
                    vid.play();
                }
                $("#stage").fadeOut(500);
            }
        }
    }); 
    $(".exit").mouseup(function(){
        $(this).parent().parent().fadeOut(500);
        $("#stage").fadeIn(500);
    });
});