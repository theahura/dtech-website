var adrianText = "Adrian is a Columbia University sophomore who brings his creative mind and artistic sensibilities to Diagraphic Tech. He started coding in college, and is currently improving his simulation of an alien ecosystem on the planet Jupiter. He writes for the satirical newspaper the Federalist and makes bad art in his spare time."
var adrianPic = "img/Adrian_Garza.jpg";
var adrianName = "Adrian Garza";
var adrianTitle = "Head of Design";

var alexText = "Alex serves as sysadmin and manages the Diagraphic Technologies webstack. Having programmed for more than half of his life, he continues his pursuit of knowledge as a junior at Georgia Tech. He has managed servers both at a large web-based company and on his own for personal projects. Alex brings this knowledge as well as a passion for highly performant web systems to Diagraphic Technologies.";
var alexPic = "img/Alex_Epifano.jpg";
var alexName = "Alex Epifano";
var alexTitle = "Webstack Admin";

var amolText = "";
var amolPic = "img/Amol_Kapoor.jpg";
var amolName = "Amol Kapoor";
var amolTitle = "Co-Founder, Technical Lead";

var davidText = "";
var davidPic = "img/David_Smart.jpg";
var davidName = "David Smart";
var davidTitle = "Project Software Engineer - Arrow";

var derekText = "";
var derekPic = "img/Derek_Hong.jpg";
var derekName = "Derek Hong";
var derekTitle = "Full Stack Engineer";

var ericText = "";
var ericPic = "img/Eric_Klawitter.jpg";
var ericName = "Eric Klawitter";
var ericTitle = "Software Engineer - Chalk";

var ganeshText = "";
var ganeshPic = "img/Ganesh_R.jpg";
var ganeshName = "Ganesh Ravichandran";
var ganeshTitle = "Full Stack Engineer, Project Manager - Arrow";

var joshText = "";
var joshPic = "img/Josh_Bartlet.jpg";
var joshName = "Josh Bartlett";
var joshTitle = "Project Software Engineer - Arrow";

var isabelText = "";
var isabelPic = "img/Isabel_Kim.jpg";
var isabelName = "Isabel Kim";
var isabelTitle = "Project Design Lead - RealRep";

var kunalText = "";
var kunalPic = "img/Kunal_Nabar.jpg";
var kunalName = "Kunal Nabar";
var kunalTitle = "Project Software Engineer - Chalk";

var maulinText = "Maulin serves as a co-founder of Diagraphic Technologies. He is currently a Sophomore at Northwestern's McCormick School of Engineering. At Diagraphic Technologies, Maulin is the head of business operations and brings his experience as an entrepreneur and leader to the team. He co-founded a non-profit organization and has been interning at Venn Health Partners, a healthcare consulting start-up. He is particularly excited about a new project which involves providing digital solutions and analytics to clients in the healthcare and physical therapy industries.";
var maulinPic = "img/Maulin_Hemani.jpg";
var maulinName = "Maulin Hemani";
var maulinTitle = "Co-Founder, Head of Sales and Marketing";

var sophieText = "";
var sophiePic = "img/Sophie_Stadler.jpg";
var sophieName = "Sophie Stadler";
var sophieTitle = "Project Software Engineer - Arrow";

var steveText = "";
var stevePic = "img/Steve_Sun.jpg";
var steveName = "Steve Sun";
var steveTitle = "Project Software Engineer and PR - RealRep";


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
	setOverlay(adrianPic, adrianText, adrianName, adrianTitle);
});

$('.alex').click(function() {
	setOverlay(alexPic, alexText, alexName, alexTitle);
});

$('.amol').click(function() {
	setOverlay(amolPic, amolText, amolName, amolTitle);
});

$('.david').click(function() {
	setOverlay(davidPic, davidText, davidName, davidTitle);
});

$('.derek').click(function() {
	setOverlay(derekPic, derekText, derekName, derekTitle);
});

$('.eric').click(function() {
	setOverlay(ericPic, ericText, ericName, ericTitle);
});

$('.ganesh').click(function() {
	setOverlay(ganeshPic, ganeshText, ganeshName, ganeshTitle);
});

$('.isabel').click(function() {
	setOverlay(isabelPic, isabelText, isabelName, isabelTitle);
});

$('.josh').click(function() {
	setOverlay(joshPic, joshText, joshName, joshTitle);
});

$('.kunal').click(function() {
	setOverlay(kunalPic, kunalText, kunalName, kunalTitle);
});

$('.maulin').click(function() {
	setOverlay(maulinPic, maulinText, maulinName, maulinTitle);
});

$('.sophie').click(function() {
	setOverlay(sophiePic, sophieText, sophieName, sophieTitle);
});

$('.steve').click(function() {
	setOverlay(stevePic, steveText, steveName, steveTitle);
});