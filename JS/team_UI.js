var adrianText = "Adrian is a Columbia University sophomore who brings his creative mind and artistic sensibilities to Diagraphic Tech. He started coding in college, and is currently improving his simulation of an alien ecosystem on the planet Jupiter. He writes for the satirical newspaper the Federalist and makes bad art in his spare time."
var adrianPic = "img/Adrian_Garza.jpg";
var adrianName = "Adrian Garza";
var adrianTitle = "Head of Design";

var alexText = "Alex serves as sysadmin and manages the Diagraphic Technologies webstack. Having programmed for more than half of his life, he continues his pursuit of knowledge as a junior at Georgia Tech. He has managed servers both at a large web-based company and on his own for personal projects. Alex brings this knowledge as well as a passion for highly performant web systems to Diagraphic Technologies.";
var alexPic = "img/Alex_Epifano.jpg";
var alexName = "Alex Epifano";
var alexTitle = "Systems Admin";

var amolText = "Amol is a co-founder of Diagraphic Technologies and currently a Sophomore at Columbia's School of Engineering. Amol brings both technological and managerial expertise as the head of technical development for Diagraphic Tech. Since his first year in college, Amol has built numerous projects from the ground up at Hackathons, has been conducting GPU-based parallel processing neurotech research at the BioNet lab at Columbia, and has been interning at iSentium, a tech-finance startup in NYC. He is the core developer for Chalk, LexicalPT, and ReRep. In his free time, he is currently working on a dynamic cloud storage application named Cumulus.";
var amolPic = "img/Amol_Kapoor.jpg";
var amolName = "Amol Kapoor";
var amolTitle = "Co-Founder, Technical Lead";

var davidText = "David Smart is a sophomore at Columbia University in the City of New York. In his first year of university, he was part of the hackathon team that worked on Rumblr. He was a founding member of the development group 3005 Hacks, where he and his team worked on SquadFinder, a microevent social media app. Finally, he does web development for a Harlem, NYC startup, The Haircutting Company. In his free time, he is pondering the futility of life and sipping on Arizona iced teas.";
var davidPic = "img/David_Smart.jpg";
var davidName = "David Smart";
var davidTitle = "Project Software Engineer - Arrow";

var derekText = "Derek is a software developer at Diagraphic Technologies who previously worked on developing Chalk and is now focused on RealRep. He is currently a sophomore at Brown University. Though Derek's coding experience only started in 10th grade, he hopes to further his education at Brown and continue working on projects at Diagraphic Tech. He looks forward to creating platforms and software that will develop his understanding of technology while building the world around him.";
var derekPic = "img/Derek_Hong.jpg";
var derekName = "Derek Hong";
var derekTitle = "Full Stack Engineer";

var ericText = "Eric is a software developer at Diagraphic Tech working to develop features for Chalk on both the front end and back end. He started coding as a freshman in high school and since then has served as the co-leader of his high school Student Technology Committee. Eric is currently a sophomore at Georgia Tech studying computer engineering. His work at Diagraphic Technologies is centered around streamlining the process of annotating a presentation to enable more effective use of slideshows.";
var ericPic = "img/Eric_Klawitter.jpg";
var ericName = "Eric Klawitter";
var ericTitle = "Software Engineer - Chalk";

var ganeshText = "Ganesh Ravichandran is a second-year studying computer science at Columbia University. He is the lead developer on Arrow, and has been working on LexicalPT and RealRep. In addition to his work at Diagraphic, Ganesh also collaborates with Dr. Tim Morton at Princeton on NASA Kepler research, and is part of Columbia's ADI Labs, which seeks to design apps for the Columbia community. In addition to coding, Ganesh enjoys bicycling through the streets of Manhattan, finding new places to chill in NYC, and jump roping on Low Steps.";
var ganeshPic = "img/Ganesh_Ravichandran.jpg";
var ganeshName = "Ganesh Ravichandran";
var ganeshTitle = "Full Stack Engineer, Project Manager - Arrow";

var joshText = "Josh Bartlett is a sophomore studying computer science at Columbia University's School of Engineering and Applied Science. Just in his first year in college, Josh has built a few projects at hackathons, has been extremely involved in the National Society of Black Engineers, and has interned at Ericsson which is one of the the largest telecommunications companies in the world. In addition to Arrow, he has worked on SquadFinder, a microevent social media app. In his free time, he likes to play sports and video games.";
var joshPic = "img/Josh_Bartlett.jpg";
var joshName = "Josh Bartlett";
var joshTitle = "Project Software Engineer - Arrow";

var isabelText = "Isabel Kim is a sophomore at the University of Pennsylvania, and a front end developer in training. Coming from a graphics background, her work at Digraphic Technologies centers around UX, UI, and anything that needs art. In her free time she writes for the Daily Pennsylvanian and makes things with power tools.";
var isabelPic = "img/Isabel_Kim.jpg";
var isabelName = "Isabel Kim";
var isabelTitle = "Project Design Lead - RealRep";

var kunalText = "Kunal is a software engineer at Diagraphic Tech and worked on the front end development of Chalk. He has been programming for many years and has previously developed multiple web-based applications. Kunal is currently a sophomore at Vanderbilt University in Nashville, Tennessee studying Computer Science and Applied Mathematics. His work at Diagraphic involves enhancing user experience and creating easily usable software.";
var kunalPic = "img/Kunal_Nabar.jpg";
var kunalName = "Kunal Nabar";
var kunalTitle = "Project Software Engineer - Chalk";

var maulinText = "Maulin serves as a co-founder of Diagraphic Technologies. He is currently a Sophomore at Northwestern's McCormick School of Engineering. At Diagraphic Technologies, Maulin is the head of business operations and brings his experience as an entrepreneur and leader to the team. He co-founded a non-profit organization and has been interning at Venn Health Partners, a healthcare consulting start-up. He is particularly excited about a new project which involves providing digital solutions and analytics to clients in the healthcare and physical therapy industries.";
var maulinPic = "img/Maulin_Hemani.jpg";
var maulinName = "Maulin Hemani";
var maulinTitle = "Co-Founder, Head of Sales and Marketing";

var sophieText = "Sophie is a sophomore at Columbia University studying computer science. She enjoys web development, particularly front-end, and brings her  typographic and responsive design knowledge to Diagraphic. Outside of the web, Sophie is also interested in personal data and the Internet of Things.";
var sophiePic = "img/Sophie_Stadler.jpg";
var sophieName = "Sophie Stadler";
var sophieTitle = "Project Software Engineer and Design Lead - Arrow";

var steveText = "Steven Sun is a junior at the University of Pennsylvania, and a full-stack dev/PM in training. He likes thinking about efficiency, humanity, and money. In his free time, he likes to swing-dance, learn new languages, and eat his weight in interesting homemade and gourmet cuisine.";
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

$('.person-content-container').click(function(e) {
	e.stopPropagation();
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

//-------------------------------------------------------------

$('.people-tab').click(function() {
	$('.project-container').fadeOut(function() {
		$('.people-container').fadeIn();
		
		$('html, body').animate({
        	scrollTop: $(".people-tab").offset().top
    	}, 500);
	});
});

$('.project-tab').click(function() {
	$('.people-container').fadeOut(function() {
		$('.project-container').fadeIn();
		$('html, body').animate({
        	scrollTop: $(".people-tab").offset().top
    	}, 500);	
	});
});