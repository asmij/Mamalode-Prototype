// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {	
	// catch swipes and "turn" the pages
	$(".page").live("swipeleft swiperight tap", function(event) {
		// catch right-to-left swipes
		if (event.type == "swipeleft") {
			var page_id = parseInt($(this).attr("id"));
			var new_page_id;

			// if we are on the last page, don't turn
			if ( page_id == 3 ) {
				alert("can't turn any later");
			} else {
				new_page_id = page_id + 1;
				new_page_id = "#" + new_page_id;
				
				$(this).hide();
				$(new_page_id).show("slide", { direction: "right", distance: "50px" }, 500);
			}
		}

		// catch left-to-right swipes
		if (event.type == "swiperight") {
			var page_id = parseInt($(this).attr("id"));
			var new_page_id;

			// if we are on the first page, don't turn
			if (page_id == 1 ) {
				alert("can't turn any earlier");
			} else {
				new_page_id = page_id - 1;
				new_page_id = "#" + new_page_id;

				$(this).hide();
				$(new_page_id).show("slide", { direction: "left", distance: "50px" }, 500);
			}
		}

		// toggle menu bar on tap
		if (event.type == "tap") {
			$("#menubar").toggle();
		}
	});

	$(".bookmark").live("tap", function(event) {
		$(".bookmark").toggleClass("dogeared");
	});
});