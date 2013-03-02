$(function(){
    $("#stop1").mouseup(function() {
        $("#sloths").attr("style", "display:inline");
        $("#stage").hide();
    }); 
    $("#sloths").mouseup(function(){
    	$(this).hide();
    	$("#stage").show();
    });
});