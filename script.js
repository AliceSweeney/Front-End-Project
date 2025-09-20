$(document).ready(function() {
	$(".star-rating span").click(function(){
  		$(this).css("color", "yellow");
    	$(this).prevAll().css("color", "yellow");
    	$(this).nextAll().css("color", "black");
  });
    $(".checklist").click(function() {
		$(this).closest(".checklist-row").toggleClass("checkbox", this.checked);
	});
});
