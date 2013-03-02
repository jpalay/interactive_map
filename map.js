$(function(){
    $("#stop1").mouseup(function() {
        $("#sloths").attr("style", "display:inline");
    }); 
    $("#sloths").mouseup(function(){
    	$(this).hide();
    });
});