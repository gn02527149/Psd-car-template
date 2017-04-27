// Shorthand for $( document ).ready()
$(function() {
	$("#button").on("click",
		function(){
			if($("#menu-button").hasClass("is-open")){
				$("#menu-button").removeClass("is-open");
			}else{
				$("#menu-button").addClass("is-open");
			}
		}
	);
});