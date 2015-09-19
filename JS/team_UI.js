var adrianText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; 
var adrianPic = "img/Adrian_Garza.jpg";
var adrianName = "Adrian Garza";
var adrianTitle = "";

var alexText = "";
var alexPic = "img/Alex_Epifano.jpg";
var alexName = "Alex Epifano";
var alexTitle = "";

var amolText = "";
var amolPic = "img/Amol_Kapoor.jpg";
var amolName = "Amol Kapoor";
var amolTitle = "Co-Founder, Technical Lead";

var davidText = "";
var davidPic = "img/David_Smart.jpg";
var davidName = "David Smart";
var davidTitle = "";

var derekText = "";
var derekPic = "img/Derek_Hong.jpg";
var derekName = "Derek Hong";
var derekTitle = "";

var ganeshText = "";
var ganeshPic = "img/Ganesh_R.jpg";
var ganeshName = "Ganesh Ravichandran";
var ganeshTitle = "";

var joshText = "";
var joshPic = "img/Josh_Bartlet.jpg";
var joshName = "Josh Bartlett";
var joshTitle = "";

var maulinText = "";
var maulinPic = "img/Maulin_Hemani.jpg";
var maulinName = "Maulin Hemani";
var maulinTitle = "";

var sophieText = "";
var sophiePic = "img/Sophie_Stadler.jpg";
var sophieName = "Sophie Standler";
var sophieTitle = "";

//----------------------------------------------------------

function setOverlay(imgSrc, text, name, title) {
	$('.person-text').html(text);
	$('.person-name').html(name);
	$('.person-title').html(title);
	$('.person').attr('src', imgSrc);
	$('.person-overlay').fadeIn();
}

$('.person-overlay').click(function() {
	$(this).fadeOut();
});

//--------------------------------------------------------------

$('.adrian').click(function() {
	setOverlay(adrianPic, adrianText, adrianName);
});

$('.alex').click(function() {
	setOverlay(alexPic, alexText, alexName);
});

$('.amol').click(function() {
	setOverlay(amolPic, amolText, amolName);
});

$('.david').click(function() {
	setOverlay(davidPic, davidText, davidName);
});

$('.derek').click(function() {
	setOverlay(derekPic, derekText, derekName);
});

$('.ganesh').click(function() {
	setOverlay(ganeshPic, ganeshText, ganeshName);
});

$('.josh').click(function() {
	setOverlay(joshPic, joshText, joshName);
});

$('.maulin').click(function() {
	setOverlay(maulinPic, maulinText, maulinName);
});

$('.sophie').click(function() {
	setOverlay(sophiePic, sophieText, sophieName);
});
