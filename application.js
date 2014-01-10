$(document).ready(function(){
	$("#headline-bc, #headline-hr, #headline-cf").hide();
	$("#bc-box").mouseenter(function(){
		$("#headline-bc").show();
	});
	$("#bc-box").mouseleave(function(){
		$("#headline-bc").hide();
	});

	$("#hr-box").mouseenter(function(){
		$("#headline-hr").show();
	});
	$("#hr-box").mouseleave(function(){
		$("#headline-hr").hide();
	});

	$("#cf-box").mouseenter(function(){
		$("#headline-cf").show();
	});
	$("#cf-box").mouseleave(function(){
		$("#headline-cf").hide();
	});
	
	$("#bc-box,#hr-box, #cf-box").mouseenter(function(){
		$("#headline").hide();
	});
	$("#bc-box,#hr-box, #cf-box").mouseleave(function(){
		$("#headline").show();
	});

});