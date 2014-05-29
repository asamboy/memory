$(document).ready(function(){

	var cards = $(".cardwrap").sort(function(){return (Math.round(Math.random()) - 0.5);});

	$(".cardwrap").remove();

	$(".wrapper").append(cards);

	$(".card").click(function(){
		if ($(this).attr('class') != "card flipped" && $(this).attr('class') != "card flipped match") {
			

			if ($(".flipped").get().length==2) {
				$(".flipped").removeClass("flipped");
			}

			if ( $(this).children(".back").attr('class') == $(".flipped").children(".back").attr('class') ) {
				$(this).addClass("flipped");
				$(".flipped").addClass("match");
			}

			$(this).addClass("flipped");
		}
	});
});

