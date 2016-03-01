var currentPage = "";
var loadPage = "";

$(window).load(function() {
	$('.to-home').click(function() {
		window.location = "index.html";
	});

	$('.to-about').click(function() {
		$('.content').fadeOut(function() {
			window.location = "team.html";
		});
	});

	$('.to-chalk').click(function() {
		$('.content').fadeOut(function() {
			window.location = "chalk.html";
		});
	});

	$('.to-projects').click(function() {
		$('.content').fadeOut(function() {
			window.location = "projects.html";
		});
	});

	$('.to-contact').click(function() {
		$('.content').fadeOut(function() {
			window.location = "contact.html";
		});
	});

	$('.to-products').click(function() {
		$('.content').fadeOut(function() {
			window.location = "products.html";
		});
	});

	if(!currentPage || (currentPage !== 'chalk'))
		$('.content').fadeIn(function() {
			if(loadPage)
				loadPage();
		});
});
