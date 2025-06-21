
var baseURL = 'http://event.wanmei.com/seiya/redenvelope/';

function init(){
	getSignLog();
	myfuzi();
	exchange();
	sendPrize();
}

function getSignLog(){
	$.ajax({
        url: baseURL + 'signlog',
        type: 'get',
        dataType: 'jsonp',
        callback: 'jsonpCallback',
        success: function(data) {
            console.log(data);
			if(data.success){
				$('.content-one-box li:lt('+ data.status +')').addClass('over');
				$('.content-one-box li').not('.over').off('click').on('click',function(){
					sign('sign',$('.content-one-box li').eq(data.status));
				});
			}else if(data.status == '-105'){
				$('.content-one-box li').on('click',function(){
					login();
				});
			}
        },
        error: function() {
            alert('网络错误，稍后再试！');
        }
    });	
}


function sign(url,ele){
	//$(ele).addClass('over');
	$.ajax({
        url: baseURL + url,
        type: 'get',
        dataType: 'jsonp',
        callback: 'jsonpCallback',
        success: function(data) {
			console.log(data);
			alert(data.message);
			if(data.success){
				$(ele).addClass('over');
				//更新福字
				myfuzi();
				getSignLog()
			}
        },
        error: function() {
            alert('网络错误，稍后再试！');
        }
    });	
}

/*领取开年红包*/
function openPrize(){
	$.ajax({
		url: baseURL + 'openprize',
		type: 'get',
		dataType: 'jsonp',
		callback: 'jsonpCallback',
		success: function(data) {
			console.log(data);
			if(data.success){
				alert('奖品领取成功！');
				$('.btn_get').addClass('btn_get_over');
			}else if(!data.success && data.status == -105){
				login();
			}else{
				alert(data.message);
			}
			
		},
		error: function() {
			alert('网络错误，稍后再试！');
		}
	});
}

/*查看已拥有的福字*/
function myfuzi(){
	var str = '';
	$.ajax({
		url: baseURL + 'myfuzi',
		type: 'get',
		dataType: 'jsonp',
		callback: 'jsonpCallback',
		success: function(data) {
			console.log(data);
			if(data.success){
				$.each(data.message,function(i,item){
					str += '<dd>福字：'+item.fuziName+'<span>'+ (item.num - item.usedNum) +'个</span></dd>';
				})	
				$('.my-word dl').html(str);
			}
		},
		error: function() {
			alert('网络错误，稍后再试！');
		}
	});
}

/*福字兑换礼包*/
function exchange(){
	$('.prize_list .btn_change').on('click',function(){
		var id = $(this).data().id;
		var r = confirm("确认兑换？");
		if (r==true){
			$.ajax({
				url: baseURL + 'exchange',
				type: 'get',
				dataType: 'jsonp',
				callback: 'jsonpCallback',
				data:{prize:id},
				success: function(data) {
					console.log(data);
					if(data.status == '-105'){
						login();
					}else{
						alert(data.message);
					}
					//更新福字
					myfuzi();
				},
				error: function() {
					alert('网络错误，稍后再试！');
				}
			});
		}else{}
	})
}

/*查看领取记录*/
function myprizes(filter){
	var str = '',className = '';
	$.ajax({
		url: baseURL + 'myprizes',
		type: 'get',
		dataType: 'jsonp',
		callback: 'jsonpCallback',
		success: function(data) {
			if(data.success){
				
				if(filter){
					$.each(data.message,function(i,item){
						if(filter == item.status){
							className = item.status == 1?'disabled':'';
							console.log(filter +'---'+ item.status)
							str += '<div class="tbody '+ className +'" data-id="'+item.id+'"><span class="icon">&nbsp;</span><span>'+item.prizeName+'</span><span>'+item.serverName+'</span><span>'+item.roleName+'</span>'+sendStatus(item.status)+'</div>';
						}
					});
				}else{
					$.each(data.message,function(i,item){
						className = item.status == 1?'disabled':'';
						str += '<div class="tbody '+ className +'" data-id="'+item.id+'"><span class="icon">&nbsp;</span><span>'+item.prizeName+'</span><span>'+item.serverName+'</span><span>'+item.roleName+'</span>'+sendStatus(item.status)+'</div>';
					});	
				}
				$.each(data.message,function(i,item){
					if(item.prize == 14848){
						$('.btn_get').off('click').addClass('btn_get_over');
					}	
				})
				$('#data .scroll').html(str);
				setVal();
				$('#data .scroll .tbody').not('.disabled').off('click').on('click',function(ev){
					var ev = ev || window.event;
			　　　　	var target = ev.target || ev.srcElement;
					if(target.className === 'icon'){
						if($(this).hasClass('on')){
							$(this).removeClass('on');
						}else{
							$(this).addClass('on');	
						}
						setVal();
					}
				})
			}else{
					
			}
			console.log(data);
		},
		error: function() {
			alert('网络错误，稍后再试！');
		}
	});
}

function sendStatus(n){
	switch(n){
		case 9:
			return '<span>未发送</span>';
		break;
		case 0:
		case 8:
			return '<span class="ing">正在发送</span>';
		break;
		case 1:
			return '<span class="success">发送成功</span>';
		break;
		default:
			return '<span class="error">发送失败</span>';
		break;
	}
}

/*发送奖品*/
function sendPrize(){
	$('#chooseAll').off('click').on('click',function(){
		if($(this).attr('checked')=='checked'){
			$('#chooseAll').attr('checked','checked');
			$('#data .scroll .tbody').not('.disabled').addClass('on');
		}else{
			$('#chooseAll').removeAttr('checked');
			$('#data .scroll .tbody').removeClass('on');
		}
		setVal();
	});
	
	$('#btn_submit2').on('click',function(){
		if($('#ids').val()==''){
			alert('请选择要发送的物品！');
			return;
		}
		var server = $('#server').val();
		var serverName = $('#servername').val();
		var roleName = $('#rolename').val();
		if(serverName == ''){
			alert('请选择要发送的服务器！');
			return false;
		}
		if(roleName == ''){
			alert('请选择要发送的角色！');
			return false;
		}
		console.log(server + '////' + serverName + '////' + roleName)
		$.ajax({
			url: baseURL + 'sendprize',
			type: 'get',
			dataType: 'jsonp',
			callback: 'jsonpCallback',
			data:{prizeidStr:$('#ids').val(),server:server,serverName:serverName,roleName:roleName},
			success: function(data) {
				console.log(data);
				alert(data.message);
				myprizes(9);
			},
			error: function() {
				alert('网络错误，稍后再试！');
			}
		});
	})
}
function setVal(){
    var cbx = $('#data .scroll .tbody.on');
    var allCbx= $('#data .scroll .tbody').not('.disabled');
	
    if(cbx.length==allCbx.length && cbx.length !== 0){
		$('#chooseAll').attr('checked','checked');
    }else{
		$('#chooseAll').removeAttr('checked','checked');
    }
    if(cbx&&cbx.length>0){
		var val='';
		$(cbx).each(function(i,e){
			if(val==''){
				val+= $(e).data().id;
			}else{
				val+='-'+ $(e).data().id;
			}
		});
		$('#ids').val(val);
	}else{
		$('#ids').val('');
	}
}
