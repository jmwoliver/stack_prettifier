var sidebar = document.getElementById("sidebar");
sidebar.parentNode.removeChild(sidebar);

var leftsidebar = document.getElementById("left-sidebar");
leftsidebar.parentNode.removeChild(leftsidebar);

var banner = document.getElementById("js-gdpr-consent-banner");
banner.parentNode.removeChild(banner);

var footer = document.getElementById("footer");
footer.parentNode.removeChild(footer);

var mainbar = document.getElementById("mainbar");
var width = mainbar.offsetWidth;
var newWidth = width * .138;
mainbar.style.width = newWidth + '%';