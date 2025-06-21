/*
 ** 完美通行证
 *  by liaomin
 *  2009-3-19
 */

// 注册命名空间
var wanmei = {};
wanmei.passport = {};


var wanmei = {};
wanmei.passport = {};
// document.domain = 'wanmei.com';

wanmei.passport.csgologin=function(options) {
    var loginUrl = 'https://passport.wanmei.com/sso/login?service=csgo&isiframe=1&location=' + toHex(location.href);
    var layer = $('#loginLayer');
    if (layer.size() == 0) {
        layer = $('<div id="loginLayer"></div>');
        layer.css({
            'width': '448px',
            'height': '575px',
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
            'margin-left': '-224px',
            'margin-top': '-300px',
            'border': '1px solid #369be3',
            'box-shadow': '0 2px 5px #7c7c7c',
            'z-index': 111
        });
        var closeBtn = $('<a onclick="wanmei.passport.csgocloseLogin()"></a>')
        closeBtn.css({
            'position': 'absolute',
            'right': '14px',
            'top': '14px',
            'width': '20px',
            'height': '20px',
            'cursor': 'pointer'
        });
        layer.append(closeBtn);
        layer.append('<iframe scrolling="no" allowtransparency="yes" src="' + loginUrl + '" frameborder="0" width="448" height="575"></iframe>');
        $('body').append(layer);
    }
    $('.prompt_bg').show();
    layer.show();
}

wanmei.passport.csgocloseLogin=function(options) {
    $('.prompt_bg').hide();
    $('#loginLayer').hide();
}


wanmei.passport.login = function (options) {
    var redirectURL = (options.url || window.top.location.href);
    var hdid = options.hdid;
    if (!hdid) {
        alert("Please add argument of hdid first.");
        return;
    }
    var isMobile=options.mobile;
 if(redirectURL.indexOf("event.csgo.com.cn")!=-1){
        //该方法是 https://safestatic.csgo.com.cn/members/js/main.js  login方法的拷贝
        wanmei.passport.csgologin();
    }else if(!isMobile){
        // wanmei.passport.addLog(options);
        wm.account.open({location: redirectURL});

    }else {
        window.top.location.href="https://passport.wanmei.com/sso/login?service=ssowanmei&mobile=1&continue=loginto&location="+stringToHex(redirectURL)
    }

}

function stringToHex(str){
    var val="";
    for(var i = 0; i < str.length; i++){
        if(val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val +=str.charCodeAt(i).toString(16);
    }
    return val;
}

wanmei.passport.logout = function (options) {
    var redirectURL = (options.url || window.top.location.href);
    if(redirectURL.indexOf("event.csgo.com.cn")!=-1){
        window.top.location.href = "https://passport.wanmei.com/sso/logout?service=csgo&serviceurl=" + redirectURL;
    }else{

        window.top.location.href = "https://passport.wanmei.com/sso/logout?serviceurl=" + encodeURIComponent(redirectURL);

    }

}

wanmei.passport.islogin = function (options) {
    var _void = function () {
    };
    var _false = (options._false || _void);
    _false();
}


wanmei.passport.addLog = function (options) {
    var hdid=options.hdid;
    var sessionName=options.session||"USER";
    var redirectURL = (options.url || window.top.location.href);
    var _url = "/log/loginlog/addLog?hdid="+hdid+"&sessionName="+sessionName+"&url="+encodeURIComponent(redirectURL);
    var success = function (responseText) {
        if (parseInt(responseText) == 0)
            console.info("success");
        else if (parseInt(responseText) == 1)
            console.info("fail");
        else
            console.error("服务器内部错误。");
    }
    var fail = function () {
        console.error("服务器未响应，请重试。");
    }
    wanmei.passport.ajax(_url, success, fail);
};

wanmei.passport.ajax = function (url, success, fail) {
    var _void = function () {
    };
    success = (success || _void);
    fail = (fail || _void);
    var xhr = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                success(xhr.responseText);
            } else {
                fail();
            }
        }
    }
    xhr.open('POST', url);
    xhr.send(null);
};

/*
 ** 登入
 ** login(options)
 ** options是一个包含以下参数的json对象：
 var options = {  url:登录成功后跳转的页面绝对地址,
 target: 跳转页面显示位置,
 session:登录session USER 重命名,
 path: passport文件夹在工程中的存放目录。默认值为 "/extend/",
 opacity: div背景层的颜色深度
 hdid: 活动登录次数统计标识，留空不统计
 str: 已经登录的提示(有些活动只有登录按钮)，默认 “您已经登录。”
 }
 */
// wanmei.passport.login = function (options) {
//     var str = options.str || "您已经登录。";
//     var sessionName = (options.session || "USER");
//     var filepath = (options.path || "/extend/");
//     var hdid=options.hdid;
//     //用户xbox登录
//     var xbox=options.xbox;
//     var surrounding=options.surrounding;
//     // 判断是否已经登录
//     wanmei.passport.islogin({path: filepath, session: sessionName, _true: function () {
//         alert(str);
//         return;
//     }, _false: function () {
//
//         var wWidth = 452;
//         var wHeight = 227;
//
//         var redirectURL = (options.url || window.top.location.href);
//
//         if (redirectURL.indexOf("/") == 0) {
//             var preurl = window.top.location.href;
//             preurl = preurl.substring(0, preurl.indexOf('/', 8));
//             redirectURL = preurl + redirectURL;
//         }
//         if (options.target) {
//             window.top.document._target = window.top.frames[options.target];
//         }
//
//
//         var opacity = (options.opacity || 20);
//         var bgcolor = (options.bgcolor || "#666");
//
//         if (!hdid) {
//             alert("Please add argument of hdid first.");
//             return;
//         }
//         var iframe_src = filepath + 'wmpassport2/jsp/ssologin.jsp?sessionName=' + sessionName + '&filepath=' + filepath + '&hdid=' + hdid + '&redirectURL=' + encodeURIComponent(redirectURL);
//
//         if(xbox||surrounding){
//             iframe_src+="&xbox=1"
//         }
//
//         // 完美周边xbox游客登录
//         if(xbox&&xbox==3){
//             iframe_src= filepath + 'wmpassport2/jsp/phone.jsp?flag=1';
//         }
//
//
//         if(surrounding&&surrounding==3){
//             iframe_src= filepath + 'wmpassport2/jsp/phone.jsp?flag=2';
//         }
//
//         if(xbox&&xbox==2){
//             iframe_src= filepath + 'wmpassport2/jsp/access.jsp?toLogin='+encodeURIComponent(iframe_src);
//         }
//
//
//         messContent = "<iframe name=\"passport_login_iframe_parent\" src='" + iframe_src + "' frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"" + wHeight + "\"/>";
//         wanmei.passport.showMessageBox(messContent, opacity, wWidth, wHeight, filepath, bgcolor);
//     }});
// };
//
// /*
//  ** 登出
//  ** logout(options)
//  ** options是一个包含以下参数的json对象：
//  var options = {  url:登出后跳转的页面绝对地址,
//  session:登录后session名（必须和login方法指定的session参数相同）,
//  path: passport文件夹在工程中的存放目录。默认值为 "/extend/" ,
//  opacity: div背景层的颜色深度
//  }
//  */
// wanmei.passport.logout = function (options) {
//     var wWidth = 452;
//     var wHeight = 227;
//
//     var redirectURL = (options.url || window.top.location.href);
//     var sessionName = (options.session || "USER");
//     var filepath = (options.path || '/extend/');
//     var opacity = (options.opacity || 20);
//     var bgcolor = (options.bgcolor || "#666");
//
//     var iframe_src = filepath + 'wmpassport2/jsp/confirm.jsp?sessionName=' + sessionName + '&redirectURL=' + redirectURL;
//
//     messContent = "<iframe name=\"passport_login_iframe_parent\" src='" + iframe_src + "' frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"" + wHeight + "\"/>";
//     wanmei.passport.showMessageBox(messContent, opacity, wWidth, wHeight, filepath, bgcolor);
// };
// /*
//  ** ajax方式登出
//  **
//  var options = {  _true:登出后执行的方法；默认什么都不做,
//  _false:如果登出失败执行的方法; 默认什么都不做,
//  session:登录后session名（必须和login方法指定的session参数相同）,
//  path: passport文件夹在工程中的存放目录。默认值为 "/extend/"
//  }
//  */
// wanmei.passport.ajaxlogout = function (options) {
//     var _void = function () {
//     };
//     var _true = (options._true || _void);
//     var _false = (options._false || _void);
//     var sessionName = (options.session || "USER");
//     var filepath = (options.path || '/extend/');
//
//     var _url = filepath + 'wmpassport2/jsp/ajaxssologout.jsp?sessionName='
//         + sessionName + '&rand=' + Math.random();
//     var success = function (responseText) {
//         // 去除空格
//         if (parseInt(responseText) == 0)
//             _false();
//         else {
//             // 请求登出地址
//             var scope = window.top.document;
//             var _div = scope.createElement("div");
//             var logoutUrl = filepath + 'wmpassport2/jsp/ajaxlogout.jsp?rand=' + Math.random();
//             _div.innerHTML = "<iframe src=\"" + logoutUrl + "\"/>"
//             _div.style.width = "0px";
//             _div.style.height = "0px";
//             _div.style.display = "none";
//             scope.body.appendChild(_div);
//
//             // 注册_true为window.top.document下的一个对象
//             scope.ajaxlogout_true = _true;
//         }
//     }
//     wanmei.passport.ajax(_url, success, _false);
// };
//
// /*ajax异步获取封装函数
//  **
//  ** success是请求成功后的回调函数，带一个参数:xhr.responseText
//  ** fail是请求失败后的无参回调函数
//  */
// wanmei.passport.ajax = function (url, success, fail) {
//     var _void = function () {
//     };
//     success = (success || _void);
//     fail = (fail || _void);
//     var xhr = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 success(xhr.responseText);
//             } else {
//                 fail();
//             }
//         }
//     }
//     xhr.open('GET', url);
//     xhr.send(null);
// };
//
// /*
//  ** 检查是否已登录
//  ** options是一个包含以下参数的json对象：
//  var options = {  _true:如果已登录执行的方法；默认什么都不做,
//  _false:如果未登录执行的方法; 默认什么都不做,
//  session:登录后session名（必须和login方法指定的session参数相同）,
//  path: passport文件夹在工程中的存放目录。默认值为 "/extend/"
//  }
//  */
// wanmei.passport.islogin = function (options) {
//     var _void = function () {
//     };
//     var _true = (options._true || _void);
//     var _false = (options._false || _void);
//     var sessionName = (options.session || "USER");
//     var filepath = (options.path || '/extend/');
//
//     var _url = filepath + 'wmpassport2/jsp/islogin.jsp?sessionName='
//         + sessionName + '&rand=' + Math.random();
//     var success = function (responseText) {
//         if (parseInt(responseText) == 0)
//             _false();
//         else if (parseInt(responseText) == 1)
//             _true();
//         else
//             alert("服务器内部错误。");
//     }
//     var fail = function () {
//         alert("服务器未响应，请重试。");
//     }
//     wanmei.passport.ajax(_url, success, fail);
// };
//
// // 消息框
// wanmei.passport.showMessageBox = function (content, opacity, wWidth, wHeight, filepath, bgcolor) {
//     // 背景渐渐变暗
//     var showBackground = function (obj, endInt) {
//         if (document.all) {
//             obj.filters.alpha.opacity += 5;
//             if (obj.filters.alpha.opacity < endInt) {
//                 setTimeout(function () {
//                     showBackground(obj, endInt)
//                 }, 5);
//             }
//         } else {
//             var al = parseFloat(obj.style.opacity);
//             al += 0.05;
//             obj.style.opacity = al;
//             if (al < (endInt / 100)) {
//                 setTimeout(function () {
//                     showBackground(obj, endInt)
//                 }, 5);
//             }
//         }
//     }
//
//     //login弹出框返回顶部的方法
// //    function login() {
// //		   var top = $("#header").offset().top;
// //			$(window).scrollTop(top);
// //        wanmei.passport.islogin({session: 'USER', _false: function () {
// //            wanmei.passport.login({url: '<%=preurl%>/xa/herostickers/login.action', session: 'USER'});
// //        }});
// //    }
//     //以下控制login弹出框显示在当前屏幕中间
//     var scope = window.top.document;
//
//     var bWidth = parseInt(scope.body.scrollWidth + scope.body.scrollLeft);
//     var bHeight = parseInt(scope.body.scrollHeight);
//     if (scope.body.clientHeight > bHeight)
//         bHeight = scope.body.clientHeight;
//     if (document.all) {
//         window.top.document._setSelectState('hidden');
//     }
//     var back = scope.createElement("div");
//     back.id = "passport_login_back";
//     var styleStr = "z-index:1111;top:0px;left:0px;position:absolute;background:" + bgcolor + ";width:" + bWidth + "px;height:" + bHeight + "px;";
//     styleStr += (scope.all) ? "filter:alpha(opacity=0);" : "opacity:0;";
//     back.style.cssText = styleStr;
//     scope.body.appendChild(back);
//
//     var mesW = scope.createElement("div");
//     mesW.id = "passport_login_mesWindow";
//     mesW.className = "passport_login_mesWindow";
//
//     mesW.innerHTML = "<div id=\"passport_login_til\" style=\"z-index:9999;background:url(" + filepath + "wmpassport2/images/til.jpg) no-repeat;width:452px;height:40px;position:relative;cursor:move\"><span id=\"passport_login_btn_close\" style=\"z-index:3333;width:55px;height:22px;display:block;cursor:pointer;position:absolute;top:9px;left:391px;\" onclick=\"window.top.document._closeWindow();\"></span></div>";
//     mesW.innerHTML = mesW.innerHTML + content;
//     var left = Math.ceil(((scope.body.scrollWidth) - wWidth) / 2) + scope.body.scrollLeft;
//     var htmltop = scope.documentElement.clientHeight;
//     var jsptop = scope.body.clientHeight;
//     var test;
//     if (htmltop == 0) {
//         test = jsptop;
//     } else if (jsptop == 0) {
//         test = htmltop;
//     } else {
//         test = htmltop < jsptop ? htmltop : jsptop;
//     }
//
//     var top = (test - wHeight) / 2;
//     var sctop = scope.documentElement.scrollTop || scope.body.scrollTop;
//     top = (document.all) ? ( top + sctop ) : ( top + sctop || window.top.pageYOffset);
//     top = (top < 0) ? 0 : top;
//
//     styleStr = "z-index:2222;left:" + left + "px;" + "top:" + top + "px;position:absolute;padding:2px; width:" + wWidth + "px;height:" + wHeight + "px";
//     mesW.style.cssText = styleStr;
//     scope.body.appendChild(mesW);
//
//     // 添加拖动功能
//     var _script = scope.createElement("script");
//     _script.type = "text/javascript";
//     _script.src = filepath + "wmpassport2/js/drag.js?rand=" + Math.random();
//     scope.body.appendChild(_script);
//
//     if (document.all) // 保证ie6下内容正确显示
//         scope.frames('passport_login_iframe_parent').location.reload();
//     showBackground(back, opacity);
// };
//
// //设置select的可见状态
// window.top.document._setSelectState = function (state) {
//     var objl = window.top.document.getElementsByTagName('select');
//     for (var i = 0; i < objl.length; i++) {
//         objl[i].style.visibility = state;
//     }
//     var parent_window = parent;
//     do {
//         var objl = parent_window.document.getElementsByTagName('select');
//         for (var i = 0; i < objl.length; i++) {
//             objl[i].style.visibility = state;
//         }
//
//         for (var i = 0; i < parent_window.frames.length; i++) {
//             try {
//                 objl = parent_window.frames[i].document.getElementsByTagName('select');
//                 for (var j = 0; j < objl.length; j++) {
//                     objl[j].style.visibility = state;
//                 }
//             } catch (ex) {
//
//             }
//         }
//         parent_window = parent_window.parent;
//     } while (parent_window != window.top);
// };
//
// //关闭窗口
// window.top.document._closeWindow = function () {
//     var scope = window.top.document;
//
//     if (scope.getElementById('passport_login_back') != null) {
//         var obj = scope.getElementById('passport_login_back');
//         if (obj != null) {
//             obj.parentNode.removeChild(obj);
//         }
//     }
//     if (scope.getElementById('passport_login_mesWindow') != null) {
//         scope.getElementById('passport_login_mesWindow').parentNode.removeChild(scope.getElementById('passport_login_mesWindow'));
//     }
//
//     if (scope.all) {
//         window.top.document._setSelectState('visible');
//     }
//     if (wanmei.passport.onCloseHandler != null) {
//         wanmei.passport.onCloseHandler();
//     }
// };
//
// wanmei.passport.isEmpty = function (arg) {
//     return arg == "undefined" || arg == null || arg == "" || arg == "null";
// };
//
// //use to site statistics
// var _hdq = _hdq || [];
// _hdq.push(['_setAccount', 'activity_event']);

//(function () {
//    var src = "/static/js/ha.js";
//    setTimeout(function () {
//        loadJS(src)
//    }, 10);
//    var loadJS = function (url, callback) {
//        var ha = document.createElement('script');
//        ha.type = 'text/javascript';
//        ha.async = true;
//        ha.src = url;
//        ha.onload = ha.onreadystatechange = function () {
//            if (!this.readyState || 'loaded' == this.readyState || 'complete' == this.readyState) {
//                ha.onload = ha.onreadystatechange = null;
//                if (callback) callback();
//                ha.parentNode.removeChild(ha);
//            }
//        };
//        var doc = document.getElementsByTagName('head')[0];
//        doc.parentNode.appendChild(ha);
//    }
//
//})();



