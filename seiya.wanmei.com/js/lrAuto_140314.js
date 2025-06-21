// JavaScript Document
/* 
	author:bianyuan;
	time:2011.10.8;
*/
function lrAuto(overHide, leftBtn, rightBtn, num){
	//获取前3个参数
	var doc = document,
		overHide = doc.getElementById(overHide),
		leftBtn = doc.getElementById(leftBtn),
		rightBtn = doc.getElementById(rightBtn);
	//判断内容太少不需要滚动和按钮
	var	scrollUl = overHide.getElementsByTagName('ul')[0],
		liArr = scrollUl.getElementsByTagName('li'),
		liLen = liArr.length,
		len = liLen*2;
	if (liLen*num <= overHide.offsetWidth){
		leftBtn.style.visibility = 'hidden';
		rightBtn.style.visibility = 'hidden';
	}else{
		//复制ul内容
		scrollUl.style.width = len * num + 'px';
		var	fragment = document.createDocumentFragment();
		for (var i = 0; i < liLen; i++){
			var copyLi = document.createElement('li');
			copyLi.innerHTML = liArr[i].innerHTML;
			fragment.appendChild(copyLi);
		}
		scrollUl.appendChild(fragment);
		var setTimeId;
		//滚动方法
		function stepL(obj, step){
			clearTimeout(setTimeId);//清楚自动滚动
			var n = 0, m = obj.scrollLeft;
			function scrollL(){
				if (n < step){
					obj.scrollLeft += 10;
					n += 10;
					var comeon = setTimeout(scrollL, 20);//渐增
				}else{
					clearTimeout(comeon);//清楚渐增
					obj.scrollLeft = m + step;
					if (obj.scrollLeft == len*num/2){
						obj.scrollLeft = 0;
					}
					setTimeId = setTimeout(autoScroll, 5000);//调用自动滚动
				}
			}
			scrollL(obj, step);
		}
		function stepR(obj, step){
			clearTimeout(setTimeId);
			if (obj.scrollLeft == 0){
				obj.scrollLeft = len*num/2;
			}
			var n = step, m = obj.scrollLeft;
			function scrollR(){
				if (n > 0){
					obj.scrollLeft -= 10;
					n -= 10;
					var comeon = setTimeout(scrollR, 20);
				}else{
					clearTimeout(comeon);
					obj.scrollLeft = m - step;
					setTimeId = setTimeout(autoScroll, 5000);
				}
			}
			scrollR(obj, step);
		}
		//自动滚动事件
		function autoScroll(){
			stepL(overHide, num);
		}
		//setTimeId = setTimeout(autoScroll, 5000);
		//点击左右按钮事件
		leftBtn.onclick = function(){
			if (overHide.scrollLeft % num == 0){
				clearTimeout(setTimeId);
				stepR(overHide, num);
			}
		}
		rightBtn.onclick = function(){
			if (overHide.scrollLeft % num == 0){
				clearTimeout(setTimeId);
				stepL(overHide, num);
			}
		}
	}	
}