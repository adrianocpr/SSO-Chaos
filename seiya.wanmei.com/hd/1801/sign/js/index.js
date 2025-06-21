(function ($) {
    // DOM元素
    var dom = {};
    var timer = null;
    // 当前距屏幕顶部距离
    var thisScrollTop = 0;
    $(window).on('load', function () {
        dom = {
            'win': $(window),
            'navUl': $('.nav-ul').eq(0),
            'contentCon': $('.content').eq(0),
            'head': $('.head').eq(0),
            'nav': $('.nav').eq(0),
            'headBang': $('#head-bang'),
            'jiangClose': $('#jiang-close')
        };

        // 事件处理函数
        bindEvent();
    })
    function bindEvent() {
        // 专题切换函数
        switchSpecial();
        // 奖品库弹窗
        jiangAlert();
    };

    // 专题切换事件函数
    var switchSpecial = function () {
        var navid = null;
        var scrollTop = 0;
        var nowWinTop = 0;
        dom.navUl.delegate('li', 'click', function () {
            scrollTop = dom.head.height();
            nowWinTop = dom.win.scrollTop();
            navid = parseInt($(this).attr('nav-id'));
            if (navid !==0) {
				var n = $(this).attr("tip");				
				$("body,html").animate({scrollTop:n},300);	
            }
        })
    }
    // 奖品仓库弹窗
    var jiangAlert = function () {
        dom.headBang.click(function () {
            toupiaoAlert('.jiang-alert', 'jiang-alert');
			myprizes(9);
        })
        // 关闭弹窗
        dom.jiangClose.click(function () {
            $.simpleDialog.close('jiang-alert');
        })
    }
    // 弹窗
    var toupiaoAlert = function(eleContent, eleId) {
         $.simpleDialog({
             skin:false,
             content: eleContent,
             id: eleId
         });
     }

})(jQuery);