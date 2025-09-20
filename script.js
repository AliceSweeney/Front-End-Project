$(document).ready(function() {
	$(".star-rating span").click(function(){
  		$(this).css("color", "yellow");
    	$(this).prevAll().css("color", "yellow");
    	$(this).nextAll().css("color", "black");
  });
  
  function updateChecklist() {
		$(".checklist-row").removeClass("completed next-step");
		
		$(".checklist").each(function() {
			if ($(this).is(":checked")) {
				$(this).closest(".checklist-row").addClass("completed");
			} else {
			  if (!$("next-step").length) {
			  	$(this).closest(".checklist-row").addClass("next-step");
			  }
			}
		});
	}
	$(".checklist").on("change", function() {
		updateChecklist();
	});
	
	updateChecklist();
});