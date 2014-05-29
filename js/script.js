function randomize() {
	var cards = $(".cardwrap").sort(function(){return (Math.round(Math.random()) - 0.5);});
	$(".cardwrap").remove();
	$(".wrapper").append(cards);
}

randomize();

$("body").on("click", ".card", function(){
	if ($(this).attr("class") != "card flipped" && $(this).attr("class") != "card flipped match") {
		

		if ($(".flipped").get().length==2) {
			$(".flipped").removeClass("flipped");
		}

		if ( $(this).children(".back").attr("class") == $(".flipped").children(".back").attr("class") ) {
			$(this).addClass("flipped");
			$(".flipped").addClass("match");
		}

		$(this).addClass("flipped");

		if ($(".match").get().length == 8) {
			$("#modal").foundation("reveal", "open");
			
		}
	}
});

$(".again").click(function(){
	$(".card").removeClass("flipped");
	$(".card").removeClass("match");
	randomize();
	$("#modal").foundation("reveal", "close");
});

