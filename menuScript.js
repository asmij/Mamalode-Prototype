/**  javascript file for "jump to" 
 *   makeScrollable - http://valums.com/vertical-scrolling-menu/
 */

 




// wait until everything is loaded before running any js
$(document).ready(function(){
	/*$(".menubarContents").click(function(event){
		//prevent the default action for the click event
		event.preventDefault();
		
		var $anchor = $(this);
                    
        

		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({
			 scrollTop: $($anchor.attr('href')).offset().top
		});
		
	}); */
	
	var wrapper = $('.scrollmenu'), scrollable = $('.scrollmenuContents');
	
	
    // Remove scrollbars    
    wrapper.css({overflow: "hidden"});
    
    scrollable.slideDown("slow", function(){
          enable(); 
    });
    
    function enable(){   
  	  // height of area at the top at bottom, that don't respond to mousemove
 	  var inactiveMargin = 100;         
  	  // Cache for performance
  	  var wrapperWidth = wrapper.width();
	  var wrapperHeight = wrapper.height();
	  // Using outer height to include padding too
	  var scrollableHeight = scrollable.outerHeight() + 2*inactiveMargin;
	  // Do not cache wrapperOffset, because it can change when user resizes window
	  // We could use onresize event, but it&#39;s just not worth doing that 
	  // var wrapperOffset = wrapper.offset();
	
	  //When user move mouse over menu          
	  wrapper.mousemove(function(e){
	    var wrapperOffset = wrapper.offset();
	    // Scroll menu
	    var top = (e.pageY -  wrapperOffset.top) * (scrollableHeight - wrapperHeight) / wrapperHeight  - inactiveMargin;
	
	    if (top < 0){
	      top = 0;
	    }
	
	    wrapper.scrollTop(top);
	  });           
	  }
	
});



