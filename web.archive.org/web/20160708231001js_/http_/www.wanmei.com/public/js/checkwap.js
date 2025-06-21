var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function checkwap(url){
	var thisOS=navigator.platform;
	//定义匹配的移动终端操作系统类型列表，随时间推移准确性有待矫正
	var os=new Array("iPhone","iPod","iPad","android","Nokia","Opera","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");

	for(var i=0;i<os.length;i++){//循环匹配到列表中的手机系统
			if(thisOS.match(os[i])){                        
					window.location=url;//document.write(thisOS);
			}                
	}
	//因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
	if(navigator.platform.indexOf('iPad') != -1){
			window.location=url;
	}
	//做这一部分是因为Android手机的内核也是Linux 
	//但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
	 var check = navigator.appVersion;
	 if( check.match(/linux/i) ) {
			 //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
			 if(check.match(/mobile/i) || check.match(/X11/i)) { 
					window.location=url;
			 }   
	}
}

}
/*
     FILE ARCHIVED ON 23:10:01 Jul 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:34:27 Jun 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.541
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 7.114
  LoadShardBlock: 212.338 (3)
  PetaboxLoader3.datanode: 164.775 (5)
  PetaboxLoader3.resolve: 230.426 (3)
  load_resource: 196.944 (2)
*/