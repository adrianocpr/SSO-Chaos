$(document).ready(function(){
	//addSWF('/website130904/swf/temp_nav.swf','temp_nav',800,260,{xml:'/xml/temp_options130904.xml'});
	
	if($(".copybtn").size()>0){
		 addCopyButton('copybtn', 90, 20, 'setClipboard');	
	};
	
	if($("#news_text a").size()>0){
		names();		
	};

	//nav
		$(".nav,.navlist").hover(function(){
			$(".navlist").stop().animate({height:"150",borderWidth:"5px"} , 200 );
		},function(){
			$(".navlist").stop().animate({height:"0",borderWidth:"0"} , 200 );
		})	


	$('.piclist img').soChange({
		thumbObj:'.picbtn input',
		thumbNowClass:'hover',
		clickFalse:false,
		thumbOverEvent:true,
		slideTime:1000,
		changeTime:3000
	});
	
	$(".news_share span").click(function(){
		$(this).addClass("red").siblings().removeClass("red");
	});	
	
	$(".newserver").hover(function(){
		$(".servershow").slideDown("fast");
	},function(){
		$(".servershow").slideUp("fast");		
	});
});
function names(){
	var textbt = document.getElementById("textbt").innerHTML;
	var news_text = document.getElementById("news_text").getElementsByTagName("a");
	for(var i=0; i<news_text.length; i++){
		if(news_text[i].innerHTML == textbt){
			news_text[i].className = "hover";
		};
	};	
};

function sizeZoom(size){
	$(".fontstyle").css({"font-size":size+"px","line-height":(size*2-2) + "px"});
};

function setClipboard() {
	alert('复制完成！在QQ或者MSN对话框中使用ctrl+V快捷键，即可将本页分享给你的朋友！');
	return window.location.href;
};
