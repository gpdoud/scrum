function init() {
	var header = document.getElementById("header");
	initHeader(header);
	var pageTitle = document.getElementById("pageTitle");
	initPageTitle(pageTitle)
	var menu = document.getElementById("menu");
	initMenu(menu);
	var footer = document.getElementById("footer");
	initFooter(footer);
}
function initHeader(headerCtrl) {
	headerCtrl.innerHTML = '<h1><a href="index.html">Red Panda</a></h1>';
}
function initMenu(menuCtrl) {
	menuCtrl.innerHTML = 
		  '<ul>'
		+ '<li><a href="index.html">HOME</a> | '
		+ '<li><a href="image-gallery.html">Image Gallery</a> | '
		+ '<li><a href="diet-information.html">Diet Information</a> | '
		+ '<li><a href="anatomy-biology.html">Animal Anatomy and Biology</a> | '
		+ '<li><a href="animal-behavior.html">Animal Behavior</a> | '
		+ '<li><a href="mating-reproductive.html">Mating and Reproductive Information</a> | '
		+ '<li><a href="email.html">Email Us</a> | '
		+ '<li><a href="contact.html">Contact Us</a> | '
		+ '<li><a href="about.html">About</a>'
		+ '</ul>';
}
function initFooter(footerCtrl) {
	footerCtrl.innerHTML = '<p>Red Panda website copyright (c) 2017 Alex - Product Owner; Zack - Scrum Master' +
					' | <a href="index.html">HOME</a> | <a href="about.html">About Red Panda</a>' +
					' | <a href="contact.html">Contact Us</a></p>';
}
function initPageTitle(pageTitleCtrl) {
	pageTitleCtrl.innerHTML = '<h3>' + pageTitleName + '</h3>';
}
