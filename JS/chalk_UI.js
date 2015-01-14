$(window).on('beforeunload', function() {
    $(window).scrollTop(0, 0);
});

//Title animation + original move in
$(".chalk-container").animate({
	marginTop: 0
}, 2000, function () {
 	$(".chalk-title, .chalk-sub-title").animate({
 		opacity: 1
 	}, 500);
});


$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() 
    {
    	var window_top = $(window).scrollTop();
    	var half_size = $(window).height()/2;

        if (window_top > $('.features-content').offset().top - half_size && window_top < $('.features-content').offset().top - half_size + $('.features-content').height() - $('#HeaderFeatures').height()) 
	    {
	    	$('#HeaderFeatures').animate({
	        	top: window_top + half_size - $('.features-content').offset().top 
	        }, 300);
	    }
	    else if (window_top < $('.features-content').offset().top - half_size)
	    {
	    	$('#HeaderFeatures').animate({
	        	top: 0
	        }, 300);
	    } 
	    else if (window_top > $('.features-content').offset().top - half_size + $('.features-content').height() - $('#HeaderFeatures').height()) 
	    {
	    	$('#HeaderFeatures').animate({
	        	top: $('.features-content').height() - $("#HeaderFeatures").height()
	        }, 300);
	    } 

	    if (window_top > $('.testimonials-content').offset().top - half_size && window_top < $('.testimonials-content').offset().top - half_size + $('.testimonials-content').height() - $('#HeaderTestimonials').height()) 
	    {
	    	$('#HeaderTestimonials').animate({
	        	top: window_top + half_size - $('.testimonials-content').offset().top 
	        }, 300);
	    } 
	    else if (window_top < $('.testimonials-content').offset().top - half_size)
	    {
	    	$('#HeaderTestimonials').animate({
	        	top: 0
	        }, 300);
	    } 
	    else if (window_top > $('.testimonials-content').offset().top - half_size + $('.testimonials-content').height() - $('#HeaderTestimonials').height()) 
	    {
	    	$('#HeaderTestimonials').animate({
	        	top: $('.testimonials-content').height() - $("#HeaderTestimonials").height()
	        }, 300);
	    } 


	   	if (window_top > $('.video-one-content').offset().top - half_size && window_top < $('.video-one-content').offset().top - half_size + $('.video-one-content').height() - $('#HeaderVidOne').height()) 
	    {
	    	$('#HeaderVidOne').animate({
	        	top: window_top + half_size - $('.video-one-content').offset().top 
	        }, 300);
	    }
	    else if (window_top < $('.video-one-content').offset().top - half_size)
	    {
	    	$('#HeaderVidOne').animate({
	        	top: 0
	        }, 300);
	    } 
	    else if (window_top > $('.video-one-content').offset().top - half_size + $('.video-one-content').height() - $('#HeaderVidOne').height()) 
	    {
	    	$('#HeaderVidOne').animate({
	        	top: $('.video-one-content').height() - $("#HeaderVidOne").height()
	        }, 300);
	    }  

	    if (window_top > $('.competition-content').offset().top - half_size && window_top < $('.competition-content').offset().top - half_size + $('.competition-content').height() - $('#HeaderCompetition').height()) 
	    {
	    	$('#HeaderCompetition').animate({
	        	top: window_top + half_size - $('.competition-content').offset().top 
	        }, 300);
	    } 
	    else if (window_top < $('.competition-content').offset().top - half_size)
	    {
	    	$('#HeaderCompetition').animate({
	        	top: 0
	        }, 300);
	    } 
	    else if (window_top > $('.competition-content').offset().top - half_size + $('.competition-content').height() - $('#HeaderCompetition').height()) 
	    {
	    	$('#HeaderCompetition').animate({
	        	top: $('.competition-content').height() - $("#HeaderCompetition").height()
	        }, 300);
	    }  


    }, 100));
});


var currentExpandedImage = "HowItWorks";

$("#HowItWorks").click(function()
{
	if(currentExpandedImage !== "HowItWorks")
	{
		currentExpandedImage = "HowItWorks";

		$("#ExpandedImage, #ExpandedImageText").animate({
			opacity: 0
		}, 500, function(){
			$("#ExpandedImage").css({"background-image":"url(img/how_chalk_works_chart.png)"});
			$("#ExpandedImageText").html("Chalk bridges the gap between the teacher's whiteboard and the student's notebook. When the teacher writes on his board, Chalk automatically captures the notes and transfers to each student. The students are then free to annotate on top of the notes, making the classroom experience more efficient while freeing mental capacity for student interactivity.");

			$("#ExpandedImage, #ExpandedImageText").animate({
				opacity: 1	
			}, 500);
		});		
	}
});

$("#IntuitiveUI").click(function()
{
	if(currentExpandedImage !== "IntuitiveUI")
	{
		currentExpandedImage = "IntuitiveUI";

		$("#ExpandedImage, #ExpandedImageText").animate({
			opacity: 0
		}, 500, function(){
			$("#ExpandedImage").css({"background-image":"url(img/intuitive_ui_full.png)"});
			$("#ExpandedImageText").html("Complexity leads to inefficiency. Chalk's user interface is built with those simple words in mind. Designed for easy comprehension, Chalk can easily be used by beginners and experts alike. But don't let it's simplicity fool you; the user interface hides numerous powerful tools under the hood, ready to be used with just a few clicks.");

			$("#ExpandedImage, #ExpandedImageText").animate({
				opacity: 1	
			}, 500);
		});
	}
});

$("#StylusBetter").click(function()
{

	if(currentExpandedImage !== "StylusBetter")
	{
		currentExpandedImage = "StylusBetter";

		$("#ExpandedImage, #ExpandedImageText").animate({
			opacity: 0
		}, 500, function(){
			$("#ExpandedImage").css({"background-image":"url(img/stylus_trumps.jpg)"});
			$("#ExpandedImageText").html("Chalk is not restricted by the physical limitations of a pen and paper. Undo your mistakes, copy entire sections of your notes, open and annotate on your own images pulled from the web - anything is possible.");

			$("#ExpandedImage, #ExpandedImageText").animate({
				opacity: 1	
			}, 500);
		});
	}
});

$("#TraditionalistsToo").click(function()
{
	if(currentExpandedImage !== "TraditionalistsToo")
	{
		currentExpandedImage = "TraditionalistsToo";

		$("#ExpandedImage, #ExpandedImageText").animate({
			opacity: 0
		}, 500, function(){
			$("#ExpandedImage").css({"background-image":"url(img/for_traditionalists_expanded.jpg)"});
			$("#ExpandedImageText").html("Chalk comes with a unique whiteboard client that simply mirrors the teacher's actions. This allows the teacher to attach any web enabled device to a projector, and write on the board as if he or she was at the front of the class.");
			$("#ExpandedImage, #ExpandedImageText").animate({
				opacity: 1	
			}, 500);
		});
	}
});