
$(window).on("load", function()
{

	$(".loader .inner").fadeOut(2000, function()
		{
			$(".loader").fadeOut(2250);

		});

	$(".items").isotope(
    {
    	filter: '*',
    	animationOptions:
    	{
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
    
});



/*
What this piece of code is saying: When this function is ready, 
the document will execute (the "img src ", is the document)!
*/
// This is a JQuery Code
$(document).ready(function()
{
	// #: Is the name of the id, inside "<div>".
	// Id and # names have to match
	// This is a JQuery Code
	$('#slides').superslides(
		{ // SLIDES SECTION
			// Fades before progressing to the next slide
			animation: 'fade',
			// automatically progresses to the next slide every 5 seconds
			play: 5000,
			// eliminates the buttons on the bottom of your image screen
			pagination: false

		}); // END SLISED SECTION


	var typed = new Typed(".typed",
	{ // SLIDES NAVIGATION
		strings: ["Software Engineer!", "Web Developer!", "Front/Back-End Design!"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	}); // END SLIDES NAVIGATION



	$('.owl-carousel').owlCarousel(
	{ // OWL CAROUSEL: SKILLS SECTION OPTIONS
	    loop:true,
	    items: 4,
	    margin: 10,
	    nav: true,
	    responsive:
	    {
	        0:
	        {
	            items: 1
	        },
	        480:
	        {
	            items: 2
	        },
	        768:
	        {
	            items: 3
	        },
	        938:
	        {
	            items: 4
	        }
	    }
	}); // END OWL CAROUSEL


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    
    // SCROLL SECTION
    $(window).scroll(function() 
    { 

    	/*$('#skills').superslides(
    		{
    			play: 5000,
    		});*/

    	//console.log(window.pageYOffset);


		/*
		If the skills position is greater than (>), in other words
		past the skillsTopOffset minus (-), the height of the window.
		(-) the height of the window, meaning: As soon as it gets into
		the view of the skillsSection, wait about 200px than start
		the scroll process.
		*/    	
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200)
    	{ // SKILLS SECTION

		    $('.chart').easyPieChart(
		    { // EASY_PIE_CHART SKILLS SECTION OPTIONS
				// My options go in here
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: true,
				scaleColor: true,
		 		lineWidth: 4,
				size: 152,
				
				onStep: function(from, to, percent)
				{
					// Find the cuurent percent element of this item
					// and set the text to be the value of the percent.
					// Whatever is the current percent set for this element
					$(this.el).find('.percent').text(Math.round(percent));

				}
		    }); // END EASY_PIE_CHART SKILLS SECTION OPTIONS

    	} // END SKILLS SECTION


    	// STATS SECTION countUp
    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200)
    	{
    		$(".counter").each(function()
    		{
    			var element = $(this);
	    		var endVal = parseInt(element.text());

	    		element.countup(endVal);
    		})

    		countUpFinished = true;

    	} // END STATS SECTION


    }); // END SCROLL SECTION



    $("[data-fancybox]").fancybox();


    $("#filters a").click(function()
    {
    	$("#filters .current").removeClass("current");
    	$(this).addClass("curremt");

    	var selector = $(this).attr("data-filter");

    	$(".items").isotope(
	    {
	    	filter: selector,
	    	animationOptions:
	    	{
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

    	return flase;
    });


    $("#navigation li a").click(function(e)
    {
    	e.preventDefault();

    	var targetElement = $(this).attr("href");

    	var targetPosition = $(targetElement).offset().top;

    	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });




    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation()
    {
    	const body = $("body");

    	if($(window).scrollTop() >= navTop)
    	{
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}
    	else
    	{
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
    	}
    }

});
