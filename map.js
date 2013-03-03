$(function(){
	// $(".stop").mouseover(function() {
	// 		$(this).("sodipodi:rx", "10").attr("sodipodi:ry", "10");
	// }).mouseout(function() {
	// 		$(this).("sodipodi:rx", "5").attr("sodipodi:ry", "5");
	// });
    $("#stop1").mouseup(function() {
        $("#slide1").fadeIn(500);
        $("#stage").fadeOut(500);
    }); 
    $(".exit").mouseup(function(){
    	$(this).parent().parent().fadeOut(500);
    	$("#stage").fadeIn(500);
    });
});