var bio_button = document.getElementById("bio");
var proj_button = document.getElementById("proj");
var contact_button = document.getElementById("contact");
var project = document.getElementById("project-info");
var bio = document.getElementById("bio-info");
var contact_body = document.getElementById("contact-info")
var container = document.getElementsByClassName("bio")[0];
var _scrolled = false


document.addEventListener("click", function(event){
	if (event.target.id === "bio" || event.target.id === "proj" || event.target.id === "contact"){
		if (!_scrolled){
			$("#container").scrollIntoView(2500, "easeOutExpo");
			_scrolled = true;
		} 
		toggle(event.target.id);
	}
})

var toggle = function(id){

	if (id === "bio"){

		bio.className = "description center fade-in"
		project.className += " hidden"
		contact_body.className += " hidden"
		bio_button.className = "tag hvr-underline-reveal selected"
		proj_button.className = "tag hvr-underline-reveal unselected"
		contact_button.className = "tag hvr-underline-reveal unselected"

	} else if (id === "proj") {

		bio.className += " hidden"
		contact_body.className += " hidden"
		project.className = "projects group fade-in" 
		proj_button.className = "tag hvr-underline-reveal selected"
		bio_button.className = "tag hvr-underline-reveal unselected"
		contact_button.className = "tag hvr-underline-reveal unselected"

	} else {

		contact_body.className = "description center fade-in"
		project.className += " hidden"
		bio.className += " hidden"
		bio_button.className = "tag hvr-underline-reveal unselected"
		proj_button.className = "tag hvr-underline-reveal unselected"
		contact_button.className = "tag hvr-underline-reveal selected"

	}
}