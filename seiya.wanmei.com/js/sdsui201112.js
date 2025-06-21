
	 function show(){
		var oLeft = $(window).width()/2 -250;
		var offTop = $(window).height()/2 -180 + $(document).scrollTop();
		var bgObj = document.createElement("div");
		//bgObj.setAttribute("id","bgobj");
		//$("body").append(bgObj);
		$(".show").show().css({left:oLeft,top:offTop});
	}

	function onScroll(){
		var oLeft = $(window).width()/2 -180;
		var offTop = $(window).height()/2 -230 + $(document).scrollTop();
		$(".show").animate({top:offTop},{duration:200,queue:false});
		$(".show").animate({left:oLeft},{duration:200,queue:false});
	}

	function close(){
		$("#bgobj").remove();
		$(".show").hide();
	}
	
function sizeZoom(size){
	$(".newspage_content").css({"font-size":size+"px","line-height":(size*2-2) + "px"});
}

$(document).ready(function (){
	$('.footer').load("/foot.htm");
	
	$(".news li:nth-child(6n)").addClass('line');
	$(".close").click(function(){
		//$(".news,.news_list").hide("quick");
	});
	$(".sizeZoom a").click(function(){
		$(this).addClass("red").siblings().removeClass("red");
	})

})