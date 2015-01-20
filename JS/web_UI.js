$("#Logo").fadeIn(700).css('display','block').animate({
	height: "50%"
 }, 1000)

$(".company-name").animate({
 	opacity: 1,
 	marginTop: 0
 }, 2000, function () {
 	$("#Logo").attr("src", "img/logo_mid.png");
 	$(".menu-container").fadeIn(500);
 });


