window.addEventListener("load", function() { setTimeout(loaded, 100) }, false);

function loaded() {
	document.getElementById("body").style.visibility = "visible";
	window.scrollTo(0, 1); // pan to the bottom, hides the location bar
}

