﻿var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){_swfStyleClass=aa.className;if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
var PWRD_SWFPATH="https://www.wanmei.com/public/swf/";
var _swfStyleClass;
function addSWF(src, containerID, width, height, argObj)
{
	if(!src)
	{
		alert("未设置SWF源！");
	}
	if(!containerID)
	{
		alert("未设置SWF容器！");
	}
	if(src.indexOf(".swf") < 0)
	{
		src += ".swf";
	}
	if(typeof(width) === "object")
	{
		argObj = width;
		width = "100%";
		height = "100%";
	}
	else
	{
		width = (width || width == 0)?width:"100%";
		height = (height || height == 0)?height:"100%";
	}
	var version = "10.0.0";
	var flashVars = {};
	var attributes = false;
	var params = {allowfullscreen:true, wmode:"transparent", allowscriptaccess:"always"};
	if(!argObj)
	{
		argObj = {};
	}
	flashVars["__objectID"] = containerID;
	flashVars["__url"] = window.location.href.split("?")[0].split("#")[0];
	argObj.name = containerID;
	for(var i in argObj)
	{
		switch(i)
		{
			case "version":
				version=argObj[i];
				break;
				
			case "id":
			case "name":
			case "styleclass":
			case "align":
				if(!attributes)
				{
					attributes = {};
				}
				attributes[i] = argObj[i];
				break;
				
			case "wmode":
				if(typeof(argObj[i]) === "boolean")
				{
					params[i] = argObj[i]?"transparent":"window";
				}
				else
				{
					params[i] = argObj[i];
				}
				break;
				
			case "play":
			case "loop":
			case "menu":
			case "quality":
			case "scale":
			case "salign":
			case "bgcolor":
			case "base":
			case "swliveconnect":
			case "devicefont":
			case "allowscriptaccess":
			case "seamlesstabbing":
			case "allowfullscreen":
			case "allownetworking":
				params[i] = argObj[i];
				break;
				
			default:
				flashVars[i] = argObj[i];
				break;
		}
	}
	
	if(argObj && argObj['useURLParams'])
	{
		var varsString = "";
		for(i in flashVars)
		{
			varsString += "&" + i + "=" + flashVars[i];
		}
		if(src.indexOf("?") < 0)
		{
			src += "?" + varsString.substr(1);
		}
		else
		{
			src += varsString;
		}
	}

	swfobject.embedSWF(src, containerID, width, height, version, "http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75", flashVars, params, attributes, addedSWF);
}
function addedSWF(callback)
{
	if(callback && callback.success)
	{
		if(_swfStyleClass)
		{
			callback.ref.className = _swfStyleClass;
		}
	}
	else
	{
		var content = document.getElementById(callback.id);
		if(content)
		{
			content.innerHTML = '<p style=" margin:0 auto; width: 500px; padding-top: 20px;"><strong style="line-height: 35px;float: left;font-weight: normal;">若您不能正常打开，请安装Adobe Flash Player插件。</strong><a href="http://www.adobe.com/go/getflashplayer"><img src="https://www.wanmei.com/images/get_flash_player.gif" alt="Get Adobe Flash player"></a></p>';
		}
	}
}
function removeSWF(swfName)
{
	var content = document.getElementById(swfName);
	if(content)
	{
		var contentReplace = document.createElement("div");
		contentReplace.id = swfName;
		if(content.className)
		{
			contentReplace.className = content.className;
		}
		content.parentNode.replaceChild(contentReplace, content);
	}
}
function getSWF(swfName){var swf;if(navigator.appName.indexOf("Microsoft")!=-1){swf=window[swfName];}else{swf=document[swfName];}return swf;}
function callSWF(swfName)
{
	var swf = getSWF(swfName);
	if(swf)
	{
		if(swf.call)
		{
			var args = [];
			for(var i = 1;i < arguments.length;i ++)
			{
				args[i-1] = arguments[i];
			}
			return swf.call.apply(swf, args);
		}
	}
	else
	{
		alert('未找到' + swfName + '对象或该对象尚未初始化！');
	}
}
function hideSWF(swfName)
{
	var swf = getSWF(swfName);
	if(swf)
	{
		swf.widthBackup = swf.width;
		swf.heightBackup = swf.height;
		swf.style.width = 0 + "px";
		swf.style.height = 0 + "px";
	}
}
function showSWF(swfName)
{
	var swf = getSWF(swfName);
	if(swf)
	{
		if(swf.widthBackup && swf.heightBackup)
		{
			swf.style.width = swf.widthBackup + "px";
			swf.style.height = swf.heightBackup + "px";
			delete swf.widthBackup;
			delete swf.heightBackup;
		}
	}
}
function addVideoPlayer(containerID,width,height,params){
	if( location.href.indexOf('laohu.com') != -1){
		return;	
	}
	if(params){
		params.bgcolor="0x000000";
	}
	addSWF(PWRD_SWFPATH+"videoplayer.swf",containerID,width,height,params);
}
function addCopyButton(containerID, width, height, setClipboard, params)
{
	params = params || {};
	params['setClipboard'] = setClipboard || params['setClipboard'];
	params['wmode'] = params['wmode'] || 'transparent';
	
	addSWF(PWRD_SWFPATH+"copybutton.swf",containerID,width,height,params);
}
function addSaveButton(containerID, width, height,getFileData, params)
{	/*
		fileData
		fileName
		fileCharset
	*/
	params = params || {};
	params['getFileData'] = getFileData || params['getFileData'];
	params['wmode'] = params['wmode'] || 'transparent';
	
	addSWF(PWRD_SWFPATH+"savebutton.swf",containerID,width,height,params);
}
function addMusic(containerID, width, height, params)
{
	if(params)
	{
		params['autoPlay'] = params['autoPlay'] != null?params['autoPlay']:true;
		params['volume'] = params['volume'] || 0.6;
	}
	var player = params && params['player'] || PWRD_SWFPATH + 'musicplayer_v1.swf';
	addSWF(player, containerID, width || 100, height || 16, params);
}
function addVideo(containerID, width, height, params)
{
	if( location.href.indexOf('laohu.com') != -1){
		return;	
	}
	if(params)
	{
		params['bgcolor'] = params['bgcolor'] || '0x000000';
		params['wmode'] = params['wmode'] || 'window';
		params['configPath'] = params['configPath'] || 'https://www.wanmei.com/public/swf/player_config.xml';
	}
	var player = params && params['player'] || PWRD_SWFPATH + 'player_v2.swf';
	addSWF(player, containerID, width, height, params);
	document.getElementById(containerID).style.background = '#000000';
}
function addPreviewVideo(containerID, width, height, params, paramsNext)
{
	if( location.href.indexOf('laohu.com') != -1){
		return;	
	}
	if(params)
	{
		params['autoPlay'] = params['autoPlay'] != null?params['autoPlay']:true;
		params['repeat'] = params['repeat'] != null?params['repeat']:true;
		params['volume'] = params['volume'] || 0;
		params['skinMode'] = params['skinMode'] || 'button';
		params['scaleMode'] = params['scaleMode'] || 'proportionalOutside';
		params['middleBtnAlign'] = params['middleBtnAlign'] || 'middle';
		params['group'] = params['group'] || null;
		
		if(paramsNext)
		{
			var callbackName = 'pwrdVideoCallback_' + containerID;
			params['eventHandler'] = callbackName;
			paramsNext['autoPlay'] = paramsNext['autoPlay'] != null?paramsNext['autoPlay']:true;
			paramsNext['wmode'] = paramsNext['wmode'] || params['wmode'];
			
			window[callbackName] = function(swfID, eventID)
			{
				if(eventID == 'playerClick')
				{
					setTimeout(function(){
						addVideo(containerID, width, height, paramsNext);
					},100);
				}
			}
		}
	}
	addVideo(containerID, width, height, params);
}