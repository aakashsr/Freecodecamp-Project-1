$(".extra").hide();

$(".box").on("mouseover",function(event){
	const target =$(event.target).children("div.extra");
	target.fadeIn(1000).slideUp(1000).fadeOut();
});