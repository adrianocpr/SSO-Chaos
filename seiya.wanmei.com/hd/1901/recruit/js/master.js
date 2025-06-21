$(function(){
	var levelObj = {
		1:{'name':'一元散仙','intro':'价值300元诛仙礼包','bfb':''},
		2:{'name':'二道游仙','intro':'价值1000元诛仙礼包','bfb':''},
		3:{'name':'三生洞虚','intro':'价值5000元诛仙大礼包','bfb':''},
		4:{'name':'四载空冥','intro':'价值15000元诛仙豪华礼包','bfb':''},
		5:{'name':'五修浩数','intro':'价值30000元诛仙豪华礼包','bfb':''},
		6:{'name':'六起洪荒','intro':'价值50000元诛仙尊享礼包','bfb':'15%'},
		7:{'name':'七开精芒','intro':'价值50000元诛仙尊享礼包','bfb':'20%'},
		8:{'name':'八合造化','intro':'价值100000元诛仙至尊礼','bfb':'25%'},
		9:{'name':'九归瀚宇','intro':'价值100000元诛仙至尊礼','bfb':'30%'},
	}
	//login
	var loginSucc = false;
	$.ajax({
		type: "GET",
		async: false,
		url: "http://passport.wanmei.com/sso/loginstatus",
		jsonp:"jsonpCallback",
		dataType: "jsonp",
		success: function(rs){
			if(rs.code == 0) {
				loginSucc = true;
				$('#auucount').html(rs.message);
				init();
			}else{
				$.simpleDialog({
					skin:false,
					content:'#pop_login',
					id:'pop_login'
				});
			}
		},
		error: function(){
			alert('网络错误，请稍后重试！');
		}
	});
	function login(){
		wanmei.passport.islogin({session:'USER',_false:function() {
		  wanmei.passport.login({session:'USER',hdid:'shenmo_charge2015_prize'});
		}});
	}
	function logout(){
		wanmei.passport.logout({session:'USER'})
	}
	$('.close_login').click(function(){
		$.simpleDialog.close('pop_login');
	});
	$('.btn_login').click(function(){
		$.simpleDialog.close('pop_login');
		login();
	});
	$('.no_have').click(function(){
		if(loginSucc){
			$.simpleDialog({
				skin:false,
				content:'#pop_no',
				id:'pop_no'
			});
		}else{
			login();
		}
	});
	$('#close_no,.btn_conform_no').click(function(){
		$.simpleDialog.close('pop_no');
	});
	//init
	function init(){
		$.ajax({
			url:'http://event.wanmei.com/zhuxian/callback1901/seiya/init?callback=callback',
			type:'get',
			jsonpCallback:'callback',
			dataType:'jsonp',
			success:function(rdata){
				if(rdata.status == 1){
					$.simpleDialog({
						skin:false,
						content:'#pop_no',
						id:'pop_no'
					});
				}else if(rdata.status == 2 || rdata.status == 3){
					var obj = levelObj[rdata.level],
						bfb = obj.bfb;
					$('#renzheng,.gift_name').html(obj.name);
					$('.gift_val').html(obj.intro);
					if(bfb == ''){
						$('.tequan').hide();
					}else{
						$('.bfb').html(bfb);
					}
					$.simpleDialog({
						skin:false,
						content:'#pop_have',
						id:'pop_have'
					});
					$('.no_have').hide();
					$('.have_box').show();
					$('#serverlist').serverlist({
						gamename: 'zhuxian2'
					});
				}
			},
			error:function(){
				alert('网络错误，请稍后重试！');
			}
		});
	}
	$('#close_have,.btn_conform_have').click(function(){
		$.simpleDialog.close('pop_have');
	});
	//getPrize
	$('.btn_get').click(function(){
		if(loginSucc){
			$.simpleDialog({
				skin:false,
				content:'#pop_bang',
				id:'pop_bang'
			});
		}else{
			login();
		}
	});
	$('#close_bang').click(function(){
		$.simpleDialog.close('pop_bang');
	});
	$('#btn_sub').click(function(){
		var server = $('#server').val();
		var serverName = $('#servername').val();
		var rolename = $('#rolename').val();
		if(server == ''){
			alert('请填写服务器！');
			return;
		}
		if(rolename == ''){
			alert('请填写角色名！');
			return;
		}
		$.ajax({
			url:'http://event.wanmei.com/zhuxian/callback1901/seiya/getPrize?callback=callback',
			type:'get',
			jsonpCallback:'callback',
			dataType:'jsonp',
			data:{
				server:server,
				serverName:serverName,
				roleName:rolename
			},
			success:function(rdata){
				if(rdata.success){
					$.simpleDialog.close('pop_bang');
				}
				alert(rdata.message);
			},
			error:function(){
				alert('网络错误，请稍后重试！');
			}
		});
	});
});