/* -------------------------------------- */
/* Author:ranyu                           */ 
/* Version:2017.09.04                     */
/* -------------------------------------- */
var wmHeaderFnc = function (wmParameter,getParameter,adBanner) {
    window.wm_msg = '0';
    var bugtype = '01';
    var u = 'https://static.games.wanmei.com/public/';
    var bi = 'http://cookie.bi.wanmei.com/jsp/pvbi/wanmeibihd.js';
    var pi = 'http://211.147.1.178/';
    var py = 'https://pay.wanmei.com/new/';
    var bs = 'http://bbs.wanmei.com';
    var wb = 'http://www.wanmei.com';
    var ps = 'http://passport.wanmei.com';
	var pg = 'http://pgp.wanmei.com';

    function bbs(name) { if (!name) { return bs; } return 'http://bbs.' + name + '.wanmei.com'; }
    function pay(name) { if (!name) { return py; } return py + name; }
    function web(neme) { return 'http://' + neme + '.wanmei.com'; }
    //顶部默认图
    var topAdBanner;
    if(adBanner && adBanner.bigpic && adBanner.viewpic && adBanner.link){
    	topAdBanner = { 
	 		srcsmall: adBanner.viewpic, 
	 		srcbig: adBanner.bigpic, 
	 		href: adBanner.link
	 	}
    }else{
    	topAdBanner = { 
	 		srcsmall: u + "images/top/top2021/wanmei_gg_small_20210312.jpg?v=2", 
	 		srcbig: u + "images/top/top2021/wanmei_gg_big_20210312.jpg?v=1", 
	 		href: "https://sgsj.games.wanmei.com/"
	 	}
    }
    var top_ad = [
     	topAdBanner
    ];
    var Global = {
        'top': [
            //{name:'wanmei',skin:1,pay:py,bbs:'http://bbs.wanmei.com',ad:1},
            { name: 'www', skin: 1, pay: py, bbs: 'http://bbs.wanmei.com', ad: 1 },
            { name: 'passport', acc: true, skin: 1, pay: py, bbs: 'http://bbs.wanmei.com', ad: 1},
            { name: 'wanmei', skin: 1, pay: py, bbs: 'http://bbs.wanmei.com', ad: 1 },
		    { name: 'sg',acc: true, skin: 4, pay: pay('newpay.do?op=prepay&gametype=5'), bbs: bbs('sg'),bbsid:115, ad: 1},
		    { name: 'chibi',acc: true, skin: 4, pay: pay('newpay.do?op=prepay&gametype=5'), bbs: bbs('sg'),bbsid:115, ad: 1},
		    { name: 'sgcq',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=11'), bbs: bbs('sgcq'), ad: 1 },
		    { name: 'w2i',acc: true, skin: 2, pay: pay('newpay.do?op=prepay&gametype=3'), bbs: bbs('w2i'),bbsid:113, ad: 1 },
		    { name: 'world2',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=1'), bbs: bbs('world2'),bbsid:114, ad: 1 },
		    { name: 'wulin2',acc: true, skin: 3, pay: pay('newpay.do?op=prepay&gametype=2'), bbs: bbs('wulin2'),bbsid:48, ad: 1 },
            { name: 'wulin',acc: true, skin: 3, pay: pay('newpay.do?op=prepay&gametype=2'), bbs: bbs('wulin'),bbsid:48, ad: 1 },
		    { name: 'kdxy',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=7'), bbs: bbs('kdxy'), ad: 1 },
		    { name: 'zhuxian',acc: true, skin: 3, pay: pay('newpay.do?op=prepay&gametype=4'), bbs: bbs('zhuxian'),bbsid:112, ad: 1 },
		    { name: 'zhuxian2', skin: 3, pay: pay('newpay.do?op=prepay&gametype=4'), bbs: bbs('zhuxian2'),bbsid:112, ad: 1 },
            { name: 'zhuxian3', skin: 3, pay: pay('newpay.do?op=prepay&gametype=4'), bbs: bbs('zhuxian3'),bbsid:112, ad: 1 },
		    { name: 'rwpd',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=6'), bbs: bbs('rwpd'),bbsid:46, ad: 1 },
		    { name: 'mhzx', skin: 1, pay: pay(''), bbs: bbs('xmhzx'),bbsid:47, ad: 1 },
		    { name: 'shenmo',acc: true, skin: 2, pay: pay('newpay.do?op=prepay&gametype=12'), bbs: bbs('shenmo'),bbsid:119, ad: 1 },
		    { name: 'sm', skin: 2, pay: pay('newpay.do?op=prepay&gametype=12'), bbs: bbs('shenmo'), ad: 1 },
		    { name: 'xlzj', skin: 2, pay: pay(''), bbs: bbs('xlzj'), ad: 1 },
		    { name: 'sgsj',acc: true, skin: 4, pay: pay('newpay.do?op=prepay&gametype=18'), bbs: bbs('sgsj'),bbsid:44, ad: 1 },
		    { name: 'qd', skin: 1, pay: py, bbs: bs, ad: 1 },
		    { name: 'xa',acc: true, skin: 2, pay: pay('newpay.do?op=prepay&gametype=16'), bbs:bbs('xa'),bbsid:88,ad: 1 },
		    { name: 'radio', skin: 1, pay: py, bbs: bbs('radio'), ad: 1 },
		    { name: 'shop', skin: 1, pay: py, bbs: bs, ad: 1 },
		    { name: 'wangba', skin: 1, pay: py, bbs: bs, ad: 1 },
		    { name: 'yt', skin: 4, pay: py, bbs: bbs('yt'), ad: 1 },
		    { name: 'xljz', skin: 4, pay: pay('setup_2_xljz.html'), bbs: bbs('xljz'), ad: 1 },
		    { name: 'xmhzx', skin: 1, pay: pay('setup_2_mhzx.html'), bbs: bbs('xmhzx'), ad: 1 },
		    { name: 'seiya',acc: true, skin: 4, pay: pay('newpay.do?op=prepay&gametype=21'), bbs: bbs('seiya'), ad: 1 },
		    { name: 'sdxl',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=19'), bbs: bs,bbsid:116, ad: 1 },
		    { name: 'sdxlly',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=19'), bbs: bs,bbsid:116, ad: 1 },
		    { name: 'mhzx2',acc: true, skin: 1, pay: pay('newpay.do?op=prepay&gametype=8'), bbs: bbs('mhzx2'),bbsid:47, ad: 1 },
            { name: 'fans', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'pay', acc: true,skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'ms', skin: false, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'mslr', skin: false, pay: pay(''), bbs: false, ad: 1 },
            { name: 'chuhan', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'web_mhzx', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'zsg', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'vip', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'dota2', skin: 1, pay: pay(''), bbs: false, ad: 0 },
            { name: 'cs', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'touch', skin: 1, pay: pay(''), bbs: false,bbsid:56, ad: 1 },
            { name: 'pai', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'sw', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'chcard', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'co', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'sd', skin: 1, pay: pay('newpay.do?op=prepay&gametype=25'), bbs: false, ad: 1 },
            { name: 'role', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'nw', skin: 1, pay: pay('newpay.do?op=prepay&gametype=20000'), bbs: false, ad: 1 },
            { name: 'd', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'esales', skin: 1, pay: pay(''), bbs: false, ad: 1 },
            { name: 'ts', skin: 2, pay: pay('newpay.do?op=prepay&gametype=43'), bbs: false, ad: 1 },
            { name: 'xz', skin: 2, pay: pay(''), bbs: false, ad: 1 },
            { name: 'inf', skin: 2, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'wz', skin: 2, pay: pay(''), bbs: false, ad: 1 },
            { name: 'hd', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'pwrd', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'hex', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'ytxmz', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'zxsj', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'sgcqhj', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'service', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'zzbq', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'am', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'shushan', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'panzar', skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'store', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'ask', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'static', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'bbs', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'yqs', acc: true, skin: 1, pay: pay(''), bbs: false, ad: 1 },
			{ name: 'yeyou', acc: false, skin: 1, pay:'http://yeyou.wanmei.com/billing/charge', bbs: false, ad: 1 },
			{ name: 't', acc: true, skin: 1, pay:'http://yeyou.wanmei.com/billing/charge?gameId=36&serverNo=all', bbs: false, bbsid:56, ad: 1 }
        ],
        'bottom': [
			{ name: 'wanmei', skin: 1 },
			{ name: 'sg', skin: 4 },
			{ name: 'chibi', skin: 4 },
			{ name: 'sgcq', skin: 1 },
			{ name: 'w2i', skin: 2 },
			{ name: 'world2', skin: 1 },
			{ name: 'wulin2', skin: 3 },
	        { name: 'wulin', skin: 3 },
			{ name: 'kdxy', skin: 1 },
			{ name: 'zhuxian', skin: 3 },
			{ name: 'zhuxian2', skin: 3 },
	        { name: 'zhuxian3', skin: 3 },
			{ name: 'rwpd', skin: 1 },
			{ name: 'mhzx', skin: 1 },
			{ name: 'shenmo', skin: 2 },
			{ name: 'sm', skin: 2 },
			{ name: 'xlzj', skin: 2 },
			{ name: 'sgsj', skin: 4 },
			{ name: 'qd', skin: 1 },
			{ name: 'xa', skin: 2 },
			{ name: 'radio', skin: 1 },
			{ name: 'shop', skin: 1 },
			{ name: 'wangba', skin: 1 },
			{ name: 'yt', skin: 4 },
			{ name: 'xljz', skin: 4 },
			{ name: 'xmhzx', skin: 1 },
			{ name: 'seiya', skin: 4 },
			{ name: 'sdxl', skin: 1 },
			{ name: 'sdxlly', skin: 1 },
			{ name: 'mhzx2', skin: 1 },
	        { name: 'ms', skin: 1 },
			{ name: 'mslr', skin: 1 },
			{ name: 'chuhan', skin: 1 },
	        { name: 'web_mhzx', skin: 1 },
	        { name: 'zsg', skin: false },
	        { name: 'vip', skin: 1 },
	        { name: 'dota2', skin: 1 },
	        { name: 'cs', skin: 1 },
	        { name: 't', skin: 1 },
	        { name: 'pai', skin: 3 },
	        { name: 'sw', skin: 3 },
	        { name: 'chcard', skin: 3 },
	        { name: 'sd', skin: 1 },
	        { name: 'role', skin: 1 },
	        { name: 'ts', skin: 2 },
	        { name: 'xz', skin: 2 },
	        { name: 'inf', skin: 2 },		
			{ name: 'wz', skin: 2 },
			{ name: 'pwrd', skin: 1 },
			{ name: 'hex', skin: 1 },
			{ name: 'ytxmz', skin: 1 },
			{ name: 'zxsj', skin: 1 },
			{ name: 'sgcqhj', skin: 1 },
			{ name: 'zzbq', skin: 1 },
			{ name: 'am', skin: 1 },
			{ name: 'shushan', skin: 1 },
			{ name: 'store', skin: 1},
			{ name: 'static', skin: 1},
			{ name: 'yqs', skin: 1},
			{ name: 'co', skin: 1}
        ],
        'logo': [
			{ name: 'wanmei', skin: 1, href: wb, title: '%u5B8C%u7F8E%u4E16%u754C' },
			{ name: 'sg', skin: 1, href: web('sg'), title: '%u8D64%u58C1' },
			{ name: 'chibi', skin: 1, href: web('chibi'), title: '%u8D64%u58C1' },
			{ name: 'sgcq', skin: 1, href: web('sgcq'), title: '%u795E%u9B3C%u4F20%u5947' },
			{ name: 'w2i', skin: 1, href: web('w2i'), title: '%u5B8C%u7F8E%u4E16%u754C%u56FD%u9645%u7248' },
			{ name: 'world2', skin: 1, href: web('world2'), title: '%u5B8C%u7F8E%u4E16%u754C' },
			{ name: 'wulin2', skin: 1, href: web('wulin2'), title: '%u6B66%u6797%u5916%u4F20' },
	        { name: 'wulin', skin: 1, href: web('wulin'), title: '%u6B66%u6797%u5916%u4F20' },
			{ name: 'kdxy', skin: 1, href: web('kdxy'), title: '%u53E3%u888B%u897F%u6E38' },
			{ name: 'zhuxian', skin: 1, href: web('zhuxian'), title: '%u8BDB%u4ED93' },
			{ name: 'zhuxian2', skin: 1, href: web('zhuxian2'), title: '%u8BDB%u4ED93' },
			{ name: 'zhuxian3', skin: 1, href: web('zhuxian3'), title: '%u8BDB%u4ED93' },
			{ name: 'rwpd', skin: 1, href: web('rwpd'), title: '%u70ED%u821E%u6D3E%u5BF9%u2161' },
			{ name: 'mhzx', skin: 1, href: web('xmhzx'), title: '%u68A6%u5E7B%u8BDB%u4ED92' },
			{ name: 'shenmo', skin: 1, href: web('shenmo'), title: '%u795E%u9B54%u5927%u9646' },
			{ name: 'xlzj', skin: 1, href: web('xlzj'), title: '%u964D%u9F99%u4E4B%u5251' },
			{ name: 'sgsj', skin: 1, href: web('sgsj'), title: '%u795E%u9B3C%u4E16%u754C' },
			{ name: 'qd', skin: 1, href: web('qd'), title: '%u5B8C%u7F8E%u4E16%u754C' },
			{ name: 'xa', skin: 1, href: web('xa'), title: '%u7B11%u50B2%u6C5F%u6E56OL' },
			{ name: 'radio', skin: 1, href: 'http://www.playradio.cn/', title: '%u5B8C%u7F8E%u5A31%u4E50%u5728%u7EBF' },
			{ name: 'shop', skin: 1, href: web('shop'), title: '%u5B8C%u7F8E%u5546%u57CE' },
			{ name: 'wangba', skin: 1, href: web('wangba'), title: '%u5B8C%u7F8E%u4E16%u754C' },
			{ name: 'yt', skin: 1, href: web('yt'), title: '%u501A%u5929%u5C60%u9F99%u8BB0' },
			{ name: 'xljz', skin: 1, href: web('xljz'), title: '%u4FEE%u7F57%u5239' },
			{ name: 'xmhzx', skin: 1, href: web('xmhzx'), title: '%u68A6%u5E7B%u8BDB%u4ED92' },
			{ name: 'seiya', skin: 1, href: web('seiya'), title: '%u5723%u6597%u58EB%u661F%u77E2' },
			{ name: 'sdxl', skin: 1, href: web('sdxl'), title: '%u795e%u96d5%u4fa0%u4fa3%u5316%u5883%u7248' },
			{ name: 'sdxlly', skin: 1, href: web('sdxl'), title: '%u795e%u96d5%u4fa0%u4fa3%u6000%u65e7%u7248' },
	        { name: 'sdxl173', skin: 1, href: "http://sdxl.173.com/", title: '%u795E%u96D5%u4FA0%u4FA3' },
			{ name: 'mhzx2', skin: 1, href: web('mhzx2'), title: '%u68A6%u5E7B%u8BDB%u4ED92' },
	        { name: 'ms', skin: 1, href: 'http://ms.173.com/', title: '%u7F8E%u98DF%u730E%u4EBA' },
	        { name: 'web_mhzx', skin: 1, href: web('mhzx2'), title: '%u68A6%u5E7B%u8BDB%u4ED9web%u7248' },
	        { name: 'zsg', skin: 1, href: 'http://zsg.173.com', title: '%u300A%u6218%B7%u4E09%u56FD%u300B' },
	        { name: 'chuhan', skin: 1, href: 'http://chuhan.173.com', title: '%u5B8C%u7F8E%u4E16%u754C%u695A%u6C49%u4F20%u5947' },
	        { name: 'dota2', skin: 1, href: 'http://www.dota2.com.cn/', title: 'dota2' },
	        { name: 'touch', skin: 1, href: 'http://t.wanmei.com/', title: 'TOUCH' },
	        { name: 'yt173', skin: 1, href: 'http://yt.173.com/', title: '%u501A%u5929%u5C60%u9F99%u8BB0' },
	        { name: 'chcard', skin: 1, href: 'http://chcard.173.com/', title: '%u6697%u9ED1%u541B%u738B' },
	        { name: 'sw', skin: 1, href: 'http://sw.wanmei.com/', title: '%u5723%u738B' },
	        { name: 'sd', skin: 1, href: 'http://sd.wanmei.com/', title: '%u5C04%u96D5%u82F1%u96C4%u4F20' },
	        { name: 'nw', skin: 1, href: 'http://nw.wanmei.com/', title: '%u65E0%u51AConline' },
	        { name: 'ts', skin: 1, href: 'http://ts.wanmei.com/', title: '%u7B2C%u4E09%u628A%u5251' },
	        { name: 'xz', skin: 1, href: 'http://xz.173.com/', title: '%u4FEE%u771F%u5947%u7F18' },
	        { name: 'inf', skin: 1, href: 'http://bh.wanmei.com/', title: '%u51B0%u706B%u7834%u574F%u795E' },
			{ name: 'wz', skin: 1, href: 'http://wz.173.com/', title: '%u738B%u8005%u6218%u5203' },
			{ name: 'hex', skin: 1, href: 'http://hex.wanmei.com/', title: 'HEX' },
			{ name: 'ytxmz', skin: 1, href: 'http://ytxmz.wanmei.com/', title: '%u300A%u5FA1%u5929%u964D%u9B54%u4F20%u300B%u5B98%u65B9%u7F51%u7AD9' },
			{ name: 'zxsj', skin: 1, href: 'http://zxsj.wanmei.com/', title: '%u8BDB%u4ED9%u4E16%u754C%u5B98%u7F51' },
			{ name: 'sgcqhj', skin: 1, href: 'http://sgcqhj.wanmei.com/', title: '%u795E%u9B3C%u4F20%u5947%u7ECF%u5178%u7248' },
			{ name: 'zzbq', skin: 1, href: 'http://zzbq.wanmei.com/', title: '%u6700%u7EC8%u5175%u5668' },
			{ name: 'am', skin: 1, href: 'http://am.wanmei.com/', title: '%u7A7A%u7532%u8054%u76DF' },
			{ name: 'store', skin: 1, href: 'http://store.wanmei.com/', title: '%u9053%u5177%u5546%u57CE' },
			{ name: 'static', skin: 1, href: 'http://static.wanmei.com/', title: '' },
			{ name: 'shushan', skin: 1, href: 'http://shushan.wanmei.com/', title: '&#x8700;&#x5C71;&#x7F25;&#x7F08;&#x5F55;' },
			{ name: 'zx', skin: 1, href: 'http://zx.wanmei.com/', title: '%u8BDB%u4ED9%u624B%u6E38' },
			{ name: 'hytj', skin: 1, href: 'http://hytj.wanmei.com/', title: '%u5E7B%u5F71%u7A81%u51FB' },
			{ name: 'sdw', skin: 1, href: 'http://sdw.wanmei.com/', title: '%u300A%u5C04%u96D5%u82F1%u96C4%u4F20WEB%u300B' },
			{ name: 'co', skin: 1, href: 'http://co.wanmei.com/', title: '%u521B%u4E16%u6218%u8F66' }
        ]
    }

    var top_data = {

    }
    var bottom_data = [
		{ name: '%u516C%u53F8%u4ECB%u7ECD', href: wb + '/enterprise/company.htm' },
		//{ name: '%u5F00%u53D1%u56E2%u961F', href: wb + '/enterprise/developmentteam.htm' },
		{ name: '%u62DB%u8058%u4FE1%u606F', href: 'http://jobs.wanmei.com/'},
		{ name: '%u8054%u7CFB%u6211%u4EEC', href: wb + '/enterprise/aboutme.htm' },
		{ name: '%u5BA2%u670D%u4E2D%u5FC3', href: web('cs') },
		{ name: '%u5B8C%u7F8E%u6E38%u620F%u5E73%u53F0', href: pg },
		{ name: '%u5BB6%u957F%u76D1%u62A4', href: 'http://www.wanmei.com/jiazhang/index.htm' }
    ];
    var bottom_data2 = [
    	//{ name: '%u6CD5%u5F8B%u58F0%u660E', href: wb + '/enterprise/legal.htm' },
		{ name: '%u7528%u6237%u534F%u8BAE', href: 'http://static.wanmei.com/passport/agreement/003.html' },
		{ name: '%u4E2A%u4EBA%u4FE1%u606F%u4FDD%u62A4%u653F%u7B56', href: 'http://static.wanmei.com/passport/agreement/005.html' },
		{ name: '%u513F%u7AE5%u4E2A%u4EBA%u4FE1%u606F%u4FDD%u62A4%u6307%u5F15', href: 'http://static.wanmei.com/passport/agreement/children.html' },
		{ name: 'Cookie%u653F%u7B56', href: 'http://static.wanmei.com/passport/agreement/cookie-policy.html' },
		{ name: '%u7EA0%u7EB7%u5904%u7406', href: 'http://cs.wanmei.com/' }
    ];
    var top_skin = ['top201803.css?v=4', 'top201803.css?v=4', 'top201803.css?v=4', 'top201803.css?v=4', 'top201803.css?v=4', 'top201803.css?v=4', 'top201803.css?v=4'];
    var top_css = {
        wanmei_top: 'width: 100%; height: 41px; display:none; background: #fbfbfb url(https://static.games.wanmei.com/public/images/top/top201305/bg.jpg) repeat-x left top; position: relative; top: 0; left: 0; z-index: 20000;',
        wanmei_nav: 'width: 1002px; height: 37px; padding-top: 1px; padding-bottom: 3px; margin: 0 auto; background: #fbfbfb url(https://static.games.wanmei.com/public/images/top/top201305/bg.jpg) repeat-x left top; position: relative; top: 0; left: 0; z-index: 20000; font-family: "微软雅黑","宋体"; font-size: 12px;',
        wanmei_logo: ' width: 80px; height: 37px; position: absolute; top: 1px; left: 25px; background: url(https://static.games.wanmei.com/public/images/top/top201305/wanmei_top.gif) no-repeat left -180px; z-index: 29000;',
        wanmei_msg: 'width: 240px; height: 20px; line-height: 20px; position: absolute; top: 11px; right: 25px; text-align: right; z-index: 29000;',
        wanmei_ggbox_small: 'width:600px;height:37px;position:absolute;top:1px;left:155px;overflow:hidden;',
        wanmei_ggbox_ul: 'position:relative;z-index:20000;',
        wanmei_ggbox_ol: 'z-index:21000;position:absolute;right:28px;top:0;height:100%;-webkit-opacity:0;opacity:0;filter:alpha(opacity=0);',
        wanmei_ggbox_li: 'width:600px;float:left;',
        wanmei_games: ' width: 750px; background: #f8f8f8 url(https://static.games.wanmei.com/public/images/top/top201305/wanmei_games_bg.jpg) no-repeat left top; position: absolute; top: 38px; right:25px; z-index: 30000; border: solid 1px #cfcfcf; border-top: none; display: none;',
        wanmei_ggbox_big: 'width:952px;height:187px;position:absolute;left:25px;top:1px;z-index:22000;display:none;',
        wanmei_ggbox_big_a: 'display:block;height:187px;position:absolute;left:0;top:0;opacity:0;filter:alpha(opacity=0);'
    }
    var bottom_skin = ['bottom1.css', 'bottom1.css', 'bottom2.css', 'bottom3.css', 'bottom4.css', 'bottom5.css'];
    var bottom_css = {
        bottom: 'position:absolute;z-index:98;height:265px; ',
        bg: 'position:absolute;z-index:99;height:190px;',
        main: 'position:absolute;z-index:100;height:190px;',
        warp: 'position:relative;z-index:101;width:850px;height:175px;padding-top:15px;margin:0px auto;',
        foot1: 'position:absolute;z-index:102;width:67px; height:35px;top:26px; border:1px solid #3b3b3b;padding-left:45px;padding-top:10px; font-size:12px;text-align:center;',
        beian: 'left:0;background:url(https://static.games.wanmei.com/public/images/wm_icon_bg.gif) no-repeat -78px -211px;line-height:14px;',
        wangjin: 'left:120px;background:url(https://static.games.wanmei.com/public/images/wm_icon_bg.gif) no-repeat -0px -327px;line-height:14px; display:none;',
        items: 'position:absolute;z-index:103;height:20px;left:245px;top:12px;font-size:12px;font-family: Verdana,Geneva,sans-serif;',
        items2: 'position:absolute;z-index:103;height:20px;left:245px;top:32px;font-size:12px;font-family: Verdana,Geneva,sans-serif;',
        icp: 'position:absolute;z-index:103;height:20px;left:245px;top:72px;font-size:12px;',
        icp1: 'position:absolute;z-index:103;height:20px;left:245px;top:92px;font-size:12px;',
        icp2: 'position:absolute;z-index:103;height:20px;left:245px;top:112px;font-size:12px;',
        copyright: 'position:absolute;z-index:103;height:20px;left:245px;top:132px;font-size:12px;',
        copyright2: 'position:absolute;z-index:103;height:20px;left:245px;top:152px;font-size:12px;',
        year: 'position:absolute;z-index:103;height:20px;left:245px;top:52px;font-size:12px;',
        year2: 'position:absolute;z-index:103;left:120px;top:26px;',
        foot_hex1: 'position:absolute;z-index:102;width:80px; height:80px;top:26px;padding-left:45px;padding-top:10px; font-size:12px;text-align:center;',
        foot_hex2: 'position:absolute;z-index:102;width:67px; height:35px;top:26px;left:800px; border:1px solid #3b3b3b;padding-left:45px;padding-top:10px; font-size:12px;text-align:center;',
        beian_hex2: 'left:100px;line-height:14px;',
        beian_hex1: ';background:url(https://static.games.wanmei.com/public/images/wm_icon_bg.gif) no-repeat -78px -211px;line-height:14px;',
        ipv6:'position:absolute;left:135px;top:35px;width:80px;'
    };
    
    function mergeParameter(cla, obj) {
        var par;
        var mpar = {
            'top': { name: 'wanmei', skin: 0, opacity: 80, logo: true, login: true, tip: true, ad: 1 },
            'bottom': { name: 'wanmei', skin: 0, opacity: 0 },
            'logo': { name: 'wanmei', skin: 1, href: wb, title: '', target: "_blank", zindex: 19999, left: 50, top: 50 }
        }
        var urlpar = getParameter(wm.url(cla)) || {};
        var selfpar = wm.parameter[cla];
        if (obj === false || obj === 0 || urlpar == -1) { return false; }
        if (!obj) { obj = {} };
        var depa;
        if (selfpar.name) { depa = selfpar.name; };
        if (obj.name) { depa = obj.name; };
        if (urlpar.name) { depa = urlpar.name; }
        depa = wm.getGame(depa, cla);
        var gamedata = mpar[cla];
        wm.Extend(gamedata, depa);
        if (selfpar != -1 && selfpar != false) { wm.Extend(gamedata, selfpar); }
        if (obj && typeof obj == 'object') { wm.Extend(gamedata, obj); }
        if (urlpar && typeof urlpar == 'object') { wm.Extend(gamedata, urlpar); }
        return gamedata;
    }

    var readyBound = false
    var readyList = [];
    var isReady = false;
    var DOMContentLoaded;


    if (!window.wm) {
        var wm = window.wm = {
            copyright: "www.wanmei.com",
            edition: "1.0",
            game: 'wanmei',
            istop: true,
            isbottom: true,
            parameter: wmParameter,
            tip: false,
            deBug: function (str, type) {
                var tz = '0';
                if (type == 1) { ty = '1' }
                if (type == 2) { ty = '2' }
                if (type == 3) { ty = '3' }
                window.wm_msg += '-' + tz + bugtype + str;
            },
            showTip: function () { if (this.tip) { this.tip.style.display = 'block' } },
            closTip: function () { if (this.tip) { this.tip.style.display = 'none' } },
            isArray: function (obj) { return Object.prototype.toString.apply(obj) === '[object Array]' ? true : false; },
            get: function (id) { return document.getElementById(id); },
            tag: function (name, elm) { var e = elm || document; return e.getElementsByTagName(name); },
            set: function (neme) { return document.createElement(neme); },
            hasClass: function (elm, cls) { return elm.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')); },
            addClass: function (elm, cls) { if (!$hasClass(ele, cls)) { elm.className += " " + cls; } },
            removeClass: function (elm, cls) {
                if ($hasClass(elm, cls)) {
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                    elm.className = elm.className.replace(reg, ' ');
                }
            },
            pageSize: function () {
                return {
                    w: (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth),
                    h: (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight)
                }
            },
            addEven: function (nb) {
                if (typeof nb != 'number') { return false }
                return nb % 2 == 0 ? 1 : -1;
            },
            strCut: function (str, nb) { },
            rand: function (obj) {
                function gnb() { }
                var zz = { str: 2, nb: 6 }
            },
            getGame: function (str, bb) {
                function xhdt(da, d) {
                    var l = da.length, it;
                    for (var j = 0; j < l; j++) { if (da[j].name == d) { it = da[j]; break; } }
                    return it;
                }
                var gm_item = Global[bb];
                var el = {};
                var el_event = null;
                var href = window.location.hostname;
                var pathname = window.location.pathname;
                if (!str) {
                    if (href.substr(0, 5) != 'event') {
                        if (href.indexOf('.wanmei.com') != -1) {
                            str = href.split('.wanmei.com');
                            str = str.length > 1 ? str[0] : 'wanmei';
                        } else if (href.indexOf('.173.com') != -1) {
                            str = href.split('.173.com');
                            str = str.length > 1 ? str[0] : 'wanmei';
                        } else {
                            str = 'wanmei';
                        }
                    } else {
                        //str = pathname.split('/')[1];
                        if(pathname.split('/')[1] == "hdcard"){
                    		str = pathname.split('/')[2];
                    	}else{
                    		str = pathname.split('/')[1];
                    	}
                        el_event = {}
                        el_event.url = window.location.href;
                        //el_event.host = str + '.wanmei.com';
                        el_event.host = (str == 'wanmei' ? 'www' : str) + '.wanmei.com';
                        el_event.name = str;
                        var zzev = '/' + str;
                        var zzdh = href.split('.wanmei.com')[0];
                        el_event.view = pathname.replace(zzev, zzdh);
                    }
                }
                var strl = str.split('.');
                if (strl.length > 1) {
                    for (var c = strl.length - 1; c >= 0; c--) {
                        var zel = xhdt(gm_item, strl[c]);
                        if (zel) {
                            el = zel;
                            break;
                        }
                    }
                    if (el.son) {
                        if (el.son[str]) {
                            el = wm.Extend({}, el, el.son[str]);
                        }
                    }
                } else {
                    el = xhdt(gm_item, str);
                }
                if (el_event) {
                    el.events = el_event;
                }
                // el = Global.top[3]
                // console.log('el', el)
                return el;
            },
            url: function (str, typ) {
                var href = window.location.search;
                if (!href) { return }
                href = href.substring(1).split('&');
                var l = href.length, t, b;
                function gerurl(s) {
                    var tp = typeof (s), z;
                    for (var f = 0; f < l; f++) {
                        t = href[f].split('=');
                        if (tp == 'number' && s == f + 1) { z = t[1]; }
                        if (tp == 'string' && s == t[0]) { z = t[1]; }
                    }
                    return z;
                }
                if (this.isArray(str)) {
                    b = [];
                    for (var g = 0; g < str.length; g++) { b.push(gerurl(str[g])); }
                } else {
                    b = gerurl(str);
                }
                return b;
            },
            formaTime: function (d) {
                if (!d) { return null; }
                if (typeof d == 'object') { return d; }
                if (typeof d == 'string') {
                    var da = new Date();
                    d = d.split(/\D+/);
                    for (var z in d) { d[z] = parseInt(d[z], 10); }
                    da.setFullYear(d[0], d[1] ? d[1] - 1 : 0, d[2] ? d[2] : 1);
                    da.setHours(d[3] ? d[3] : 0, d[4] ? d[4] : 0, d[5] ? d[5] : 0, d[6] ? d[6] : 0);
                    return da;
                }
                return null;
            },

            Timer: function (a, c) {
                var astart = a.start ? this.formaTime(a.start).getTime() : null;
                var aend = a.end ? this.formaTime(a.end).getTime() : null;
                var aref = a.ref ? this.formaTime(a.ref).getTime() : (new Date()).getTime();
                if (!astart && !aend) { if (c) { c(); } return true; }
                if (astart < aend && astart < aref && aend > aref) { if (c) { c(); } return true; }
                if (astart > aref) { return -1; }
                if (aend < aref) { return 1; }
                return false;
            },

            lodeElm: function (str, id) {
                if (!str) { return false; }
                var ty = str.split("?")[0].split(".").pop();
                var elmSty;
                if (ty == 'js' || ty == 'css') {
                    var el = ty == 'js' ? ['script', 'text/javascript', 'src'] : ['link', 'text/css', 'href'];
                    elmSty = document.createElement(el[0]);
                    if (ty == 'css') { elmSty.setAttribute("rel", "stylesheet"); }
                    elmSty.setAttribute("type", el[1]);
                    elmSty.setAttribute(el[2], str);
                    if (id && typeof id == 'string') { elmSty.setAttribute('id', id); }
                } else {
                    elmSty = document.createElement('style');
                    if (elmSty.styleSheet) {
                        elmSty.styleSheet.cssText = str;
                    } else {
                        elmSty.appendChild(document.createTextNode(str));
                    }
                }
                wm.tag("head")[0].appendChild(elmSty);
                return true;
            },

            delTop: function () {
                var box = wm.get('wanmei_top');
                if (box) { box.innerHTML = ''; }
                this.istop = true;
            },

            //top设置
            top: function (obj, elm, fn) {
                if (!this.istop) {return;}
                var box = wm.get('wanmei_top');
                var pa = mergeParameter('top', obj);

                //添加头部判断
                if (pa == false || pa.skin === false) {
                    this.istop = false;
                    if (box){box.innerHTML = '';}
                    return;
                };

                // var sk;
                // if (typeof pa.skin == 'number' && pa.skin >= 0 && pa.skin <= top_skin.length) {
                //     sk = top_skin[pa.skin];
                // } else if (typeof pa.skin == 'string') {
                //     sk = pa.skin;
                // } else {
                //     sk = top_skin[0];
                // }
                //sk = u + 'style/top/' + sk;

                //添加头部样式
                var sk = "https://static.games.wanmei.com/public/style/top/top221010.css";

                //加载头部样式
                var sid = wm.get('wanmei_top');
                if(sid){
                	sid.setAttribute('href', sk);
                }else{
                	this.lodeElm(sk,'wm_top_styleid');
                }

                if(this.istop === 1) {
                    this.istop = false;
                    var t2 = wm.set('div');
                    t2.setAttribute('class', 'hg_top');
                    t2.setAttribute('id', 'hg_top');
                    t2.innerHTML = '<style>.public_hg_top{background: #FFF; border-bottom: 1px solid #e2e2e2;  font-size: 12px;}.public_hg_main{width: 1200px; height: 51px; margin: 0 auto;}.public_hg_text{float: left; width:950px; padding: 6px 0 0 48px; color: #000; line-height: 20px; font-size: 14px;}.public_hg_text a{color: #000; text-decoration: underline;}.public_hg_text span{font-family: arial;}.public_hg_ok{float: right; width: 86px; padding-top: 10px;}.public_hg_ok a{display: block; width: 66px; height: 28px; line-height: 28px; text-align: center; background: #e8e8ea; border: 1px solid #e2e2e2; color:#666; border-radius: 4px; text-decoration: none;}.public_hg_ok a:hover{background: #f5f5f5; text-decoration: none;}</style><div class="public_hg_top" id="public_hg_top" style="display:none;"><div class="public_hg_main"><div class="public_hg_text">为向您提供良好的网站使用体验，完美世界网站会使用自身或第三方的<span>Cookie</span>，以作为安全、技术、分析、推广等之用。继续浏览本网站即表示您同意我们使用<span>Cookie</span>。若想了解更多，请阅读我们的<a href="http://static.wanmei.com/passport/agreement/cookie-policy.html" target="_blank"><span>Cookie</span>政策</a>。</div></div></div>';
                    var b2 = wm.tag('body')[0];
                    var f2 = wm.tag('body')[0].firstChild;
                    b2.insertBefore(t2,f2);

				    function getIdName(id){
				        return document.getElementById(id);
				    };
				    function setCookieHg(c_name,value,expiredays){
				        var exdate=new Date()
				        exdate.setDate(exdate.getDate()+expiredays)
				        document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";path=/;expires="+exdate.toGMTString())
				    };
				    function getCookieHg(name){ 
				        var strCookie=document.cookie;
				        var arrCookie=strCookie.split("; "); 
				        for(var i=0;i<arrCookie.length;i++){ 
				            var arr=arrCookie[i].split("="); 
				            if(arr[0]==name)return arr[1]; 
				        } 
				        return ""; 
				    };
				    function searchCookieTop(){
				        if(getCookieHg("puclic_hg_flag2")){
				            getIdName("public_hg_top").style.display="none"
				        }else{
				            getIdName("public_hg_top").style.display="block"
				            setCookieHg("puclic_hg_flag2","true",365);
				        }
				    };
				    searchCookieTop();

                    var t = wm.set('div');
                    t.setAttribute('id', 'wanmei_top');
                    t.innerHTML = creTop(pa);

                    var b = wm.tag('body')[0];
                    var f = wm.tag('body')[0].firstChild;
                    b.insertBefore(t,f);
                    bind();
                    if(typeof fn == 'function') { fn(pa);}
                    setTimeout(function(){loadpageJavascript("https://static.games.wanmei.com/public/js/top/loadGameData.js",function(){
                    	function getGamelistPublic(obj,id){
                    		var str="";
                    		for(var i=0; i<obj.length; i++){
                    			var isNew = obj[i].new ? 'new' : '';
								var isHot = obj[i].hot ? 'hot' : '';
								var className = isNew + ' ' + isHot;
                    			str+='<li><a href="'+obj[i].url+'" class="'+className+'" target="_blank">'+obj[i].name+'</a></li>'
                    		};
                    		document.getElementById(id).innerHTML = str;
                    	};
				        getGamelistPublic(publicloadGameData.client,"insertClient");
				        getGamelistPublic(publicloadGameData.mobiel,"insertMobiel");
				        getGamelistPublic(publicloadGameData.other,"insertOther");
				        getGamelistPublic(publicloadGameData.webgame,"insertWebgame");
				    })}, 10);
                    return false;
                }
            },
            delBottom: function () {
                var box = wm.get('wm_bottom_');
                if (box) { box.innerHTML = ''; }
                this.isbottom = true;
            },
            //bottom设置
            bottom: function (obj, elm) {
                if (!this.isbottom) { return; }
                var box = wm.get('wm_bottom_');
                var pa = mergeParameter('bottom', obj);
                if (pa == false || pa.skin === false) {
                    this.isbottom = false;
                    if (box) { box.innerHTML = ''; }
                    return;
                }
                if (this.isbottom === 1) {
                    this.isbottom = false;
                    if(wm.get("wmgameFooterInsert")){
                    	wm.get("wmgameFooterInsert").innerHTML = creBottom(pa.name);
                    }else{
                    	var t = document.createElement('div');
	                    t.setAttribute('id', 'wm_bottom_');
	                    t.innerHTML = creBottom(pa.name);
	                    var b = wm.tag('body')[0];
	                    b.appendChild(t);
                    }
                    document.getElementById("wmgameFooter_navyang").onclick = function(){
				        document.getElementById("wmgameFooter_navShow").style.display = "block";
				    };
				    document.getElementById("wmgameFooter_navClose").onclick = function(event){
				        document.getElementById("wmgameFooter_navShow").style.display = "";
				        event.stopPropagation();
				    };
                    return;
                }
            },
            delLogo: function () { },
            logo: function (obj, elm) {
                var pa = mergeParameter('logo', obj);
                if (pa == false) { return; }

                var sk;
                if (typeof pa.skin == 'number' && pa.skin >= 0) {
                    sk = pa.name + '_' + pa.skin + '.css';
                } else if (typeof pa.skin == 'string') {
                    sk = pa.skin;
                } else {
                    sk = top_skin[0];
                }
                sk = u + 'style/logo/' + pa.name + '/' + sk;
                var sid = wm.get('wm_logo_styleid_' + pa.name + '_' + pa.skin);
                if (!sid) { this.lodeElm(sk, 'wm_logo_styleid_' + pa.name + '_' + pa.skin); }

                if (elm) {
                    if (typeof elm == 'string') { elm = wm.get(elm); }
                    if (typeof elm == 'object') {
                        var wz = elm.style.position;
                        if (wz != 'absolute' || wz != 'relative' || wz != 'fixed') {
                            elm.style.position = 'relative';
                        }
                        elm.innerHTML = creLogo(pa, elm);
                        return;
                    } else {
                    }
                }
                document.write(creLogo(pa));
            },
            css: function () { },
            attr: function () { },
            Extend: function () {
                var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
                if (target.constructor == Boolean) { deep = target; target = arguments[1] || {}; i = 2; }
                if (typeof target != "object" && typeof target != "function") { target = {} };
                if (length == i) { target = this; --i; }
                for (; i < length; i++) {
                    if ((options = arguments[i]) != null) {
                        for (var name in options) {
                            var src = target[name], copy = options[name];
                            if (target === copy) { continue; }
                            if (deep && copy && typeof copy == "object" && !copy.nodeType) {
                                target[name] = this.extend(deep, src || (copy.length != null ? [] : {}), copy);
                            } else if (copy !== undefined) { target[name] = copy; }
                        }
                    }
                }
                return target;
            },
            ready: function (fn) {
                bindReady();
                if (isReady) { fn(); } else { readyList.push(fn); }
                return this;
            },
            blank: function (obj, cal) {
                var def = { opacity: 70, zindex: 188888, bgcolor: '#000', trigger: false }
                if (typeof obj == 'object') { wm.Extend(def, obj); }
                creMask(def, cal);
            },
            delBlank: function () {
                var el = wm.get('wm_public_mask');
                if (el) {
                    wm.tag('body')[0].removeChild(el);
                    wm.tag('body')[0].style.overflow = 'auto';
                    wm.tag('html')[0].style.overflow = 'auto';
                }
            },
            resize: function (fun) {
                window.onresize = function () {
                    fun(wm.pageSize());
                }
            },
            tipBox: function (obj, btn) {
                var def = { width: 350, height: 250, zindex: 188999, msg: '消息提示', title: false };
                if (typeof obj == 'object') { wm.Extend(def, obj); }
                creTipbox(def, btn);
            },
            delTipbox: function () {
                var box = wm.get('wm_public_tipbox');
                if (box) {
                    wm.tag('body')[0].removeChild(box);
                }
            },
            //fastarg
            fastreg: function (options) {
                var code = {
                    "world2": 1, "wulin2": 2, "w2i": 3, "zhuxian2": 4, "sg": 5,
                    "rwpd": 6, "kdxy": 7, "sgcq": 8, "xmhzx": 9, "shenmo": 10, "xlzj": 11,
                    "sgsj": 12, "xljz": 13, "yt": 14, "xa": 19, "seiya": 16, "sdxl": 15,"sdxl":15,
                    "sw": 20 ,"ytxmz": 21, "zxsj":23
                };
                var param = [];
                var to = options.game;
                var css = options.css || 1;
                var card = options.card;
                var wmrid = options.wmrid;
                var width = options.width;
                var height = options.height;
                //var regurl = card ? "http://passport.wanmei.com/fastreg/regbonusdefii.jsp" : "http://passport.wanmei.com/fastreg/fastregii.jsp";
                var regurl = "http://www.wanmei.com/public/iframe/fastreg.html";
                var defskin = "www.wanmei.com/public/style/fastreg/skin{num}.css";
                var defsize = ['', [230, 200], [320, 160]];
                var iframe;
                if (!isNaN(css)) {
                    width = defsize[css][0];
                    height = defsize[css][1];
                    css = defskin.replace(/\{num\}/, css);
                }
                param.push("to=" + to);
                param.push("css=" + css);
                if (card) {
                    if (code[to]) {
                        param.push("g=" + code[to]);
                        param.push("c=" + card);
                    } else {
                        alert('g is undefined.');
                    }
                }
                if (wmrid) {
                    param.push('wmrid=' + wmrid);
                }
                regurl = regurl + "?" + param.join('&');
                //window.console && console.log(regurl);
                iframe = '<iframe scrolling="no" frameborder="0" allowtransparency="yes" src="' + regurl + '" width="' + width + '" height="' + height + '"></iframe>';
                if (options.box) {
                    var elem = document.getElementById(options.box);
                    if (elem) {
                        elem.innerHTML = iframe;
                    } else {
                        //alert('页面上不存在该ID.');
                    }
                }
            }
        };
    }

    if (document.addEventListener) {
        DOMContentLoaded = function () {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            ready();
        };
    }
    else if (document.attachEvent) {
        DOMContentLoaded = function () {
            if (document.readyState === "complete") {
                document.detachEvent("onreadystatechange", DOMContentLoaded);
                ready();
            }
        };
    }
    function ready() {
        if (!isReady) {
            if (!document.body) { return setTimeout(ready, 13); }
            isReady = true;
            if (readyList) {
                var fn, i = 0;
                while ((fn = readyList[i++])) { fn(); }
                readyList = null;
            }
        }
    }
    function bindReady() {
        if (readyBound) { return; }
        readyBound = true;
        if (document.readyState === "complete") { return ready(); }
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
            window.addEventListener("load", ready, false);
        } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", DOMContentLoaded);
            window.attachEvent("onload", ready);
            var toplevel = false;
            try { toplevel = window.frameElement == null; } catch (e) { }
            if (document.documentElement.doScroll && toplevel) { doScrollCheck(); }
        }
    };
    function doScrollCheck() {
        if (isReady) { return; }
        try { document.documentElement.doScroll("left"); } catch (error) { setTimeout(doScrollCheck, 1); return; }
        ready();
    }


    
    function creItem(obj, p, css) {
        css = css ? css : ' ';
        var str = '<div style="padding-bottom: 3px;">'
        for (var t = 0; t < obj.length; t++) { str += creList(obj[t], p, css); }
        str += '<div style="clear:both;"></div>';
        str += '</div>';
        return str;
    }
    function creList(obj, p, css) {
        var target = obj.target ? 'target="' + obj.target + '"' : 'target="_blank"';
        var width = obj.width ? 'width:' + obj.width + 'px;' : '';
        if (obj.ishot) {
            if (obj.ishot == 1) { obj.ishot = 'background-position:0px -233px;' }
            else if (obj.ishot == 2) { obj.ishot = 'background-position:-27px -234px;' }
            else { obj.ishot = 'background:none;' }
        }
        if (obj.isnew) {
            if (obj.isnew == 1) { obj.isnew = 'color:red' }
            else if (obj.isnew == 2) { obj.isnew = 'color:red; font-weight:bold' }
            else { obj.isnew = '' }
        }
        var str = '<span style="' + top_css.node + width + '">';
        if (wm.isArray(obj.name)) {
            var lshref;
            if (wm.isArray(obj.href[0])) {
                lshref = p[obj.href[0][0]] ? p[obj.href[0][0]] : obj.href[0][1];
            }
            str += '<a href="' + (lshref ? lshref : obj.href[0]) + '" ' + target + ' style="' + top_css.nodeico + 'background-position:' + obj.ico + ';' + css + ';"></a>';
            for (var z = 0; z < obj.name.length; z++) {
                if (wm.isArray(obj.href[z])) {
                    obj.href[z] = p[obj.href[z][0]] ? p[obj.href[z][0]] : obj.href[0][1];
                }

                str += '<a href="' + obj.href[z] + '" ' + target + ' style="' + top_css.nodelink + 'padding-right:0px;' + css + '">' + unescape(obj.name[z]) + '</a>';
                str += z == 0 ? '/&nbsp;' : '';
            }
        } else {
            if (wm.isArray(obj.href)) { obj.href = p[obj.href[0]] ? p[obj.href[0]] : obj.href[1]; }
            str += '<a href="' + obj.href + '" ' + target + ' style="' + top_css.nodeico + 'background-position:' + obj.ico + ';"></a>';
            if (obj.isnew) {
                str += '<a href="' + obj.href + '" ' + target + ' style="' + top_css.nodelink + css + obj.isnew + '">' + unescape(obj.name) + '</a>';
            } else {
                str += '<a href="' + obj.href + '" ' + target + ' style="' + top_css.nodelink + css + '">' + unescape(obj.name) + '</a>';
            }
            if (obj.ishot) {
                str += '<a ' + target + ' style="' + top_css.nodehot + obj.ishot + '"></a>';
            }
        }
        str += '</span>'
        return str;
    }
    function creTitle(name, cla) {
        var str = '<div id="' + cla + '" class="wm_top_box_tit ' + cla + '" style="' + top_css.title + '">';
        str += '<span></span>';
        str += unescape(name);
        str += '</div>';
        return str;
    }
    function move(dom,json,callback){
		//让每一次动画都是全新的
		if(dom.timer != undefined){
			clearInterval(dom.timer);
			//console.log(dom.timer);
		}else{
			//console.log(dom.timer);
		}
		dom.timer = setInterval(function(){
			//所有元素执行完毕以后的状态
			var mark = true;
			//循环所有动画的属性
			for(var attr in json){
				var cur = null;
				//如果是opacity的透明的动画
				if(attr=="opacity"){
					//获取已经产生的透明度
					cur = getStyle(dom,attr) * 100;
				}else{
					//获取已经执行的距离
					cur = parseInt(getStyle(dom,attr)) || 0;
				}
				//获取目标终止值
				var target = json[attr];
				//速度，*0.2是增加摩擦力
				var speed = (target - cur) * 0.2;
				//如果cur在执行过程中因为已经除去了小数部分。而速度可能会产生小数位 
				//所有说当cur执行的递增，那么可能cur到达不了目标,当速度是大于0的上取整，然后整数+speed==目标
				//199 +1 200 反之向下取整
				speed = (speed>0 ? Math.ceil(speed): Math.floor(speed));
				if(cur != target){
					mark = false;
					if(attr=="opacity"){
						dom.style.opacity= (cur+speed)/100;
						dom.style.filter = "alpha(opacity="+((cur+speed))+")";
					}else{
						dom.style[attr]= cur+speed+"px";
					}
				}
			}
			//如果执行完毕，
			if(mark){
				//清楚动画
				clearInterval(dom.timer);
				//回调函数，一定要放在下面。要不然你动画没有关闭。
				if(callback)callback.call(dom);
			}
		},30);
	}
	
	
	function dom(id){
		return document.getElementById(id);
	};
	
	//获取css中的样式的值，跟浏览器兼容无关
	function getStyle(dom,attr){
		return window.getComputedStyle ? window.getComputedStyle(dom,false)[attr]:dom.currentStyle[attr];
	};
    function bind() {
        
		    function bindDom(elem,ev,callback){
		    	
		        if(document.all){
					elem.attachEvent("on"+ev,callback);
		        }else{
					elem.addEventListener(ev,callback,false); 
		        }
		    }
		    function hover(elems,overCallback,outCallback){
		        var hoverTimeout=null;
		        var isOver=false;
		        function over(e){
					clearTimeout(hoverTimeout);
					isOver=true;
					overCallback(e);
		        }
		        function out(e){
					clearTimeout(hoverTimeout);
					isOver=false;
					setTimeout(function(){
						if(!isOver){
							outCallback(e);
						}
					},200);
				}
				
		        for(var i =0;i<elems.length;i++){
		        	
		            bindDom(elems[i],"mouseover",over);
		            bindDom(elems[i],"mouseout",out);
		        }
		    };
		
		// hover([document.getElementById("gamelist_hover1"),document.getElementById("gamelist_show1")],function(e){
		//     document.getElementById("gamelist_show1").style.display="block"
		// },function(e){
		//     document.getElementById("gamelist_show1").style.display="none"
		// });
		hover([document.getElementById("gamelist_hover2"),document.getElementById("gamelist_show2")],function(e){
		    document.getElementById("gamelist_show2").style.display="block"
		},function(e){
		    document.getElementById("gamelist_show2").style.display="none"
		});
		hover([document.getElementById("gamelist_hover3"),document.getElementById("gamelist_show3")],function(e){
		    document.getElementById("gamelist_show3").style.display="block"
		},function(e){
		    document.getElementById("gamelist_show3").style.display="none"
		});
    }
    var olLiDoms,smImgDoms,bigImgDoms,len;
    var smIndex;
    var dotIndex;
    //每张图片的宽度
	var everyWidth = 600;
	//小图父元素的宽度
	var ulWidth;
	function initVar(){
		olLiDoms = dom("numol").children;
		//console.log(olLiDoms);
		smImgDoms = dom("wanmei_ggbox_small").children;
		bigImgDoms = dom("wanmei_ggbox_big").children;
		//图片的个数
		len = smImgDoms.length;
		if( len <= 1){
			dom("numol").style.display = "none";
		}
		smIndex = 0;
		dotIndex = 0;
		//定时器
		//var timer = null;
		//每张图片的宽度
		//everyWidth = smImgDoms[0].offsetWidth;
		//everyWidth = 600;
		//小图父元素的宽度
		ulWidth = everyWidth * len+"px";
		//console.log(smImgDoms[0].offsetWidth);
		dom("wanmei_ggbox_small").style.width = ulWidth;
		//创建子节点
		olLiDoms[0].className = "active";
		mouseDot();
	}
	//滑过
	function mouseDot(){
		for(var i = 0;i<olLiDoms.length;i++){
			olLiDoms[i].index = i;
			olLiDoms[i].onmouseover = function(){
				for(var i = 0;i<olLiDoms.length;i++){
					olLiDoms[i].className = "";
				}
				this.className = "active";
				smImgDoms[0].style.position = "static";
				//alert(smImgDoms[0].offsetWidth);
				move(dom("wanmei_ggbox_small"),{left:-smImgDoms[0].offsetWidth*this.index});
				smIndex = this.index;
				dotIndex = this.index;
			}
		}
	}
	
	
	/*轮播*/
	if(top_ad.length>1 && wm.get("wanmei_top") != null){
		var timer = setInterval(playBanner,5000);
	}else{
		//alert(top_ad.length);
	}
	function playBanner(){
		if(smIndex==0){
			smImgDoms[0].style.position = "static";
			dom("wanmei_ggbox_small").style.left = 0;
			dotIndex = 0;
		}
		if(smIndex == (len-1)){
			smImgDoms[0].style.position = "relative";
			smImgDoms[0].style.left = len * everyWidth +"px";
			//alert(smIndex);
			smIndex = 0;
		}else{
			smIndex++;
		}
		dotIndex++;
		for(var i = 0;i<olLiDoms.length;i++){
			olLiDoms[i].className = "";
		}
		//console.log("dotIndex:"+dotIndex);
		move(dom("wanmei_ggbox_small"),{left:-everyWidth * dotIndex});
		//数字选中
		olLiDoms[smIndex].className = "active";
	}
	function clearInit(){
		//console.log("smIndex:"+smIndex);
		move(bigImgDoms[smIndex],{opacity:100});
		bigImgDoms[smIndex].style.display = "block";
		clearInterval(timer);
	}
	
	function initAd(){
		for(var i = 0;i<olLiDoms.length;i++){
			move(bigImgDoms[i],{opacity:0},function(){
				this.style.display = "none";
			});
		}
    	clearInterval(timer);
		timer = setInterval(playBanner,5000);
	}
	function dotHover(){
		dom("numol").onmouseover = function(){
			clearInterval(timer);
		};
		dom("numol").onmouseout = function(){
			clearInterval(timer);
			timer = setInterval(playBanner,5000);
		};
	}
	
    function bindAD() {
        var isshow = false;
        var adtip = wm.get("wanmei_ggbox_small");
        var adtipNum = wm.get("wanmei_ggbox_small").children;
        var adbox = wm.get("wanmei_ggbox_big");
        
        if (adtip && adbox) {
        	//1020
        	adtip.onmouseover = function () { 
				isshow = true; 
				adbox.style.display = "block";
				clearInit();
			}
            adtip.onmouseout = function () { 
            	isshow = false; 
            	setTimeout(function () { if (!isshow) { adbox.style.display = "none"; } }, 500);
            	if(top_ad.length==1){
					initAd();
					clearInterval(timer);
				}else{
					initAd();
				}
            }
            adbox.onmouseover = function () { 
            	isshow = true; 
				clearInit();
            }
            //adbox.onmouseout = function () { isshow = false; setTimeout(function () { if (!isshow) { adbox.style.display = "none"; } }, 500); }
            adbox.onmouseout = function () { 
            	isshow = false; 
            	if (!isshow) { adbox.style.display = "none"; }
            	if(top_ad.length==1){
					initAd();
					clearInterval(timer);
				}else{
					initAd();
				}
            }
            //1020
            //*adtip.onmouseover = function () { isshow = true; adbox.style.display = "block"; }
            //*adtip.onmouseout = function () { isshow = false; setTimeout(function () { if (!isshow) { adbox.style.display = "none"; } }, 500); }
            //*dbox.onmouseover = function () { isshow = true; }
            //adbox.onmouseout = function () { isshow = false; setTimeout(function () { if (!isshow) { adbox.style.display = "none"; } }, 500); }
            //*adbox.onmouseout = function () { isshow = false; if (!isshow) { adbox.style.display = "none"; } }
        }
    }
    
    function creLogo(obj) {
        var style = '';
        if (obj.left) { style += 'left:' + obj.left + 'px;' }
        if (obj.top) { style += 'top:' + obj.top + 'px;' }
        if (obj.right) { style += 'right:' + obj.right + 'px;' }
        if (obj.bottom) { style += 'bottom:' + obj.bottom + 'px;' }
        if (obj.width) { style += 'width:' + obj.width + 'px;'; }
        if (obj.height) { style += 'height:' + obj.height + 'px;'; }
        var lk = '<a href="' + obj.href + '" target="' + (obj.name || '_blank') + '" class="wm_public_' + obj.name + '_logo_lk" style="' + style + (obj.zindex ? ('z-index:' + obj.zindex + ';') : "") + '" title="' + (unescape(obj.title) || ' ') + '"></a>'
        var bg = '<div class="wm_public_' + obj.name + '_logo_bg" style="' + style + (obj.zindex ? ('z-index:' + (obj.zindex - 1) + ';') : "") + '" ></div>';
        return lk + bg;
    }
    function creBottomlist(obj) {
        var str = ''
        for (var d = 0; d < obj.length; d++) {
            var taget = obj[d].target ? 'target="' + obj[d].target + '"' : 'target="_blank"';
            str += '<a href="' + obj[d].href + '" ' + taget + '>' + unescape(obj[d].name) + '</a>&nbsp;&nbsp;';
        }
        str += '';
        return str;
    }
    function creBottomlist2(obj) {
        var str = ''
        for (var d = 0; d < obj.length - 1; d++) {
        	var taget = obj[d].target ? 'target="' + obj[d].target + '"' : 'target="_blank"';
        	if (d != obj.length - 2) {
            	str += '<a href="' + obj[d].href + '" ' + taget + '>' + unescape(obj[d].name) + '</a>' + '<span>|</span>';
        	} else {
            	str += '<a href="' + obj[d].href + '" ' + taget + '>' + unescape(obj[d].name) + '</a>';
        	}
        }
        str += '';
        return str;
    }
    function creBottom(bottomTypeValue) {
    	var str=""
    	str+='<style type="text/css">\
	        .wmgameFooter{background:#282a2c; font-size: 12px; font-family:"Microsoft YaHei"; color:#81868c; text-align: center; line-height: 24px; padding: 10px 0;}\
	        .wmgameFooter_healthTitle{font-size:14px;}\
	        .wmgameFooter_logo a{display: block; width: 175px; margin: 0 auto;}\
	        .wmgameFooter_logo img{display: block; width: 175px; margin: 0 auto;}\
	        .wmgameFooter_nav a{color: #81868c;}\
	        .wmgameFooter_nav a:hover{color: #FFF;}\
	        .wmgameFooter_nav span{padding: 0 6px;}\
	        .wmgameFooter_navyang{position: relative; cursor: pointer;}\
	        #wmgameFooter_navShow{position: absolute; left:50%; z-index:10; margin-left: -85px; top:20px; border: 2px solid #393c40; width: 170px; line-height: 22px; background-color: #303338; padding: 6px 0; color: #f15733;display: none;}\
	        #wmgameFooter_navShow em{display:block; background: url(https://safestatic.games.laohu.com/main_station/images/stel.png) no-repeat 24px center; font-family: "Microsoft YaHei";}\
	        #wmgameFooter_navClose{display:block; width: 12px; height: 12px; position: absolute; right:1px; top:1px; cursor: pointer; background:url(https://safestatic.games.laohu.com/main_station/images/sclose.png) no-repeat center center; background-size: 100% auto;}\
	        .wmgameFooter_infolink{padding: 0 10px;}\
	        .wmgameFooter_infolink a{color: #81868c;}\
	        .wmgameFooter_infolink a:hover{color: #FFF;}\
	        .wmgameFooter_infoDiv span{padding: 0 10px;}\
	        .wmgameFooter_infoDiv strong{font-weight: normal; color: #81868c;}\
	        @media only screen and (max-width: 750px){\
	          .wmgameFooter{width: 750px; position: relative; height: 170px; line-height: 18px;}\
	          .wmgameFooter_infolink{padding: 0 10px;}\
	          .wmgameFooter_logo img{display: block; width: 130px; margin: 0 auto;}\
	          .wmgameFooter_infoDiv span{padding: 0 10px;}\
	          .wmgameFooter_infoDiv span.beian{display:block;}\
	          .wmgameFooter_nav span{padding: 0 5px;}\
	        }\
	    </style>'
    	str +='<div class="wmgameFooter">\
	        <div class="wmgameFooter_health">\
	            <div class="wmgameFooter_healthTitle">健康游戏忠告</div>\
	            <div class="wmgameFooter_healthDesc"><span>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。</span><span>适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</span></div>\
	        </div>\
	        <div class="wmgameFooter_logo"><a title="完美世界" href="https://games.wanmei.com/" target="_blank"><img alt="完美世界" src="https://static.games.wanmei.com/public/images/wmlogo.png"></a></div>\
	        <div class="wmgameFooter_nav">\
	            <div class="wmgameFooter_navlink">\
	                <a target="_blank" href="https://cs.wanmei.com/">客服中心</a><span>|</span>\
	                <a target="_blank" href="https://www.wanmei.com/zh/contact_us.html">联系我们</a><span>|</span>\
	                <a target="_blank" href="http://static.wanmei.com/passport/agreement/003.html">用户协议</a><span>|</span>\
	                <a target="_blank" href="http://static.wanmei.com/passport/agreement/005.html">个人信息保护政策</a><span>|</span>\
	                <a target="_blank" href="http://static.wanmei.com/passport/agreement/cookie-policy.html">Cookie政策</a><span>|</span>\
	                <a target="_blank" href="http://static.wanmei.com/passport/agreement/children.html">儿童个人信息保护指引</a><span>|</span>\
	                <a target="_blank" href="https://www.wanmei.com/jiazhang/">家长监护</a><span>|</span>\
	                <a class="wmgameFooter_navyang" id="wmgameFooter_navyang">未成年人关怀<div id="wmgameFooter_navShow">未成年人关怀专线：<br><em>010-89170112</em><div id="wmgameFooter_navClose"></div></div></a><span>|</span>\
	                <a target="_blank" href="https://static.games.wanmei.com/public/images/business221011.jpg">营业执照</a>\
	            </div>\
	        </div>\
	        <div class="wmgameFooter_infolink">\
	            <div class="wmgameFooter_infoDiv"><span>（署）网出证（皖）字第013号</span><span>京网文<strong>[2022]0044-009号</strong></span><span>京ICP证<strong>160281号</strong></span><span>京ICP备<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">15025398号-6</a></span><span class="beian">京公网安备<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033859" target="_blank">11010502033859号</a></span></div>\
	            <div class="wmgameFooter_infoDiv2"><span>© 完美世界 版权所有 Perfect World.All Rights Reserved.</span></div>\
	        </div>\
	    </div>';
        return str;
    }
    function creAd(obj) {
        var str = '';
        if (obj) {
            str += '<div class="wanmei_ggbox_small" style=' + top_css.wanmei_ggbox_small + '>';
            str += 		'<ul id="wanmei_ggbox_small" style=' + top_css.wanmei_ggbox_ul + '>'
            for(var i=0;i<top_ad.length;i++){
            		str += '<li style=' +top_css.wanmei_ggbox_li+ '><img src="' + top_ad[i].srcsmall + '" alt="" /></li>'
            }
            str +=		'</ul>';
            str +=		'<ol id="numol" style=' + top_css.wanmei_ggbox_ol + '>';
            for(var i=0;i<top_ad.length;i++){
            		str += '<li></li>'
            }
            str +=		'</ol>';
            str +=	'</div>';
			str +=	'<div class="wanmei_ggbox_big" id="wanmei_ggbox_big" style=' + top_css.wanmei_ggbox_big + '>';
			for(var i=0;i<top_ad.length;i++){
            		str +=		'<a onclick="trackEvent(\'41407\',\'wm_main_xiaoao_click\')" href="' + top_ad[i].href + '" hidefocus="true" target="_blank" style=' + top_css.wanmei_ggbox_big_a + '><img src="' + top_ad[i].srcbig + '" alt="" /></a>';
            }
			str +=	'</div>';
            return str;
        } else {
            return ''
        }

    }

    function creTop(p){
		function domain(name){
			var reg_url;
			if(name == "touch"){
				reg_url = "https://passport.wanmei.com/reg/?s=t"
			}else if(name == "passport"){
				reg_url = "https://passport.wanmei.com/reg/"
			}else{
				reg_url = "https://passport.wanmei.com/reg/?s=" + name;
			}
			return reg_url;
		};
        var intbbsUrl = "http://bbs.wanmei.com/forum.php";
		if(p.bbsid){
			intbbsUrl = "http://bbs.wanmei.com/forum.php?mod=forumdisplay&fid="+p.bbsid;
		}
		var str="";
		str+='<div class="general_wm">\
			    <div class="main_20220704">\
			        <div class="logoMain_20220704"><a href="https://games.wanmei.com/" target="_blank" class="logoWanmei">完美世界游戏</a><a href="https://douliu.wanmei.com/" target="_blank" class="logoDouliu">官方福利社区</a></div>\
			        <div class="wm_passport_div" id="wm_passport_div">\
			        	<div class="wm_login_divint" id="wm_login_divint"><a href="https://passport.wanmei.com/reg/?s=pay" id="register_pay" target="_blank">注册</a><a href="https://passport.wanmei.com" target="_blank" id="wm_login_Btn">登录</a></div>\
			        	<div class="wm_logout_divint" id="wm_logout_divint" style="display:none"><a href="https://passport.wanmei.com" target="_blank" id="wm_login_Name" class="wm_login_Name"></a><a href="#" id="wm_logout_Btn">退出</a></div>\
			        </div>\
			        <div class="navItem_20220704">\
			            <div class="gameList_20220704 hoverBox_20220704" id="gamelist_hover2">\
			                <div class="navName_20220704"><a>游戏列表</a></div>\
			                <div class="gameShow_20220704 hoverShow_20220704" id="gamelist_show2" style="display: none;">\
			                    <div class="gameBox_20220704">\
			                        <div class="gameClient_20220704">\
			                            <div class="gameType_20220704">客户端游戏</div>\
			                            <div class="games_20220704">\
			                                <ul type="client" id="insertClient"></ul>\
			                            </div>\
			                        </div>\
			                        <div class="gameMobiel_20220704">\
			                            <div class="gameType_20220704">手机游戏</div>\
			                            <div class="games_20220704">\
			                                <ul type="mobiel" id="insertMobiel"></ul>\
			                            </div>\
			                        </div>\
			                        <div class="gameAlone_20220704">\
			                            <div class="gameType_20220704">游戏平台</div>\
			                            <div class="games_20220704 games_marginBottom">\
			                                <ul type="other" id="insertOther"></ul>\
			                            </div>\
			                            <div class="gameType_20220704">网页游戏</div>\
			                            <div class="games_20220704">\
			                                <ul type="webgame" id="insertWebgame"></ul>\
			                            </div>\
			                        </div>\
			                    </div>\
			                </div>\
			            </div>\
			        </div>\
			        <div class="navItem_20220704">\
			            <div class="navName_20220704"><a href="'+p.pay+'" target="_blank">账号充值</a></div>\
			        </div>\
			        <div class="navItem_20220704">\
			            <div class="serviceShow_20220704 hoverBox_20220704" id="gamelist_hover3">\
			                <div class="navName_20220704"><a>游戏客服</a></div>\
			                <div class="serviceMenu_20220704 hoverShow_20220704" id="gamelist_show3" style="display: none;">\
			                    <a href="https://kf.wanmei.com/" target="_blank">手机游戏客服</a>\
			                    <a href="https://cs.wanmei.com/" target="_blank">电脑游戏客服</a>\
			                </div>\
			            </div>\
			        </div>\
			        <div class="navItem_20220704">\
			            <div class="navName_20220704"><a href="'+intbbsUrl+'" target="_blank">官方论坛</a></div>\
			        </div>\
			        <div class="navItem_20220704">\
			            <div class="navName_20220704"><a href="https://games.wanmei.com/" target="_blank">完美世界游戏</a></div>\
			        </div>\
			    </div>\
			</div><div class="generalBox_wm"></div>'
	    return str;
    }
    function creMask(obj, sta) {

        wm.tag('body')[0].style.overflow = 'hidden';
        wm.tag('html')[0].style.overflow = 'hidden';

        size = wm.pageSize();
        var op = obj.opacity;
        var style = 'position:absolute;left:0px;top:0px;z-index:' + obj.zindex + ';background-color:' + obj.bgcolor + ';width:' + size.w + 'px;height:' + size.h + 'px;filter:alpha(opacity=' + op + ');-moz-opacity:' + (op / 100) + ';-khtml-opacity:' + (op / 100) + ';opacity:' + (op / 100) + ';';
        var mask = wm.set('div');
        mask.setAttribute('id', 'wm_public_mask');
        mask.style.cssText = style;
        if (obj.trigger) {
            mask.onclick = function () { wm.delBlank(); }
        }
        wm.tag('body')[0].appendChild(mask);
        wm.resize(function (ps) {
            mask.style.width = ps.w + 'px';
            mask.style.height = ps.h + 'px';
        });
    }
    function creTipbox(obj, btn) {
        function size(el) {
            var size = wm.pageSize();
            var w = size.w <= obj.width ? 0 : Math.ceil((size.w - obj.width) / 2);
            var t = size.h <= obj.height ? 0 : Math.ceil((size.h - obj.height) / 2);
            el.style.left = w + 'px';
            el.style.top = t + 'px';
        }
        var box = wm.set('div');

        var style = 'position:absolute;width:' + obj.width + 'px;height:' + obj.height + 'px;z-index:' + obj.zindex + ';border:3px #ccc solid; background-color:#fff; padding:20px;';
        box.setAttribute('id', 'wm_public_tipbox');
        box.style.cssText = style;
        size(box);
        var stybnt = "position:absolute;height:20px; padding-top:3px; width:20px; font-family:Verdana; color:#666; font-size:14px; text-align:center; cursor:pointer;background-color:#F6F6F6;"
        if (obj.title) {
            var tit = wm.set('span');
            tit.setAttribute('style', stybnt + 'top:4px;right:4px;');
            tit.onmouseover = function () { tit.style.color = '#F30'; }
            tit.onmouseout = function () { tit.style.color = '#666'; }
            tit.onclick = function () { wm.delBlank(); wm.delTipbox(); }
            tit.innerHTML = 'X';
            box.style.paddingTop = '30px'
            box.appendChild(tit);
        }
        if (obj.msg) {
            if (typeof obj.msg == 'string') {
                var msg = wm.set('div');
                msg.setAttribute('style', 'color:#666; font-size:14px;line-height:22px;');
                msg.innerHTML = obj.msg
                box.appendChild(msg);
            }
            if (typeof obj.msg == 'object') {
                box.appendChild(obj.msg);
            }
        }
        if (typeof btn == 'object') {
            var nn = 0;
            for (var z in btn) { nn += 1; }
            var nb = nn * 80 > obj.width ? 0 : Math.ceil((obj.width - nn * 80) / 2) + 20;
            for (var zx in btn) {
                var b = wm.set('a');
                b.setAttribute('style', stybnt + 'width:70px;border:2px solid #999;left:' + nb + 'px;text-decoration:none;bottom:10px;');
                b.onmouseover = function () { b.style.color = '#F30'; }
                b.onmouseout = function () { b.style.color = '#666'; }
                b.innerHTML = unescape(zx);
                if (typeof btn[zx] == 'string') { b.setAttribute('href', btn[zx]); }
                if (typeof btn[zx] == 'function') {
                    b.onclick = btn[zx];
                }
                box.appendChild(b);
                nb += 80;
            }
        }
        wm.resize(function (ps) {
            size(box);
        });

        wm.tag('body')[0].appendChild(box);
    }

    /* 登录部分的补充 */
    /* 事件绑定 */
    var events = {}, emit;
    //增加事件绑定
    wm.on = function (name, callback) {
        var list = events[name] || (events[name] = []);
        list.push(callback);
        return wm;
    };
    //删除事件绑定
    wm.off = function (name, callback) {
        if (!(name || callback)) {
            events = {};
            return wm;
        }
        var list = events[name], i;
        if (list) {
            if (callback) {
                i =  list.length - 1;
                for (; i >= 0; i--) {
                    if (list[i] === callback) {
                        list.splice(i, 1);
                    }
                }
            } else {
                delete events[name];
            }
        }
        return wm;
    };
    //发射事件
    wm.emit  = function (name, data) {
        var list = events[name], fn;
        if (list) {
            list = list.slice();
            while ((fn = list.shift())) {
                fn(data);
            }
        }
        return wm;
    };

	var symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@";
	var loAZ = "abcdefghijklmnopqrstuvwxyz";
	symbols+= loAZ.toUpperCase();
	symbols+= "[\\]^_`";
	symbols+= loAZ;
	symbols+= "{|}~";
    function toHex(str){
		var hexChars = "0123456789abcdef";
		var text = "";
		for( i=0; i<str.length; i++ ) {
			var oneChar = str.charAt(i);
			var asciiValue = symbols.indexOf(oneChar) + 32;
			var index1 = asciiValue % 16;
			var index2 = (asciiValue - index1)/16;
			//if ( text != "" ) text += ":";
			text += hexChars.charAt(index2);
			text += hexChars.charAt(index1);
		}
		return text;
	}

	function getJSONP(url, callback) {
	    if (!url) { return; }
		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
		var maxPos = chars.length;
		var name = 'WM';
		for (i = 0; i < 6; i++) { name += chars.charAt(Math.floor(Math.random() * maxPos)); }
		url += url.indexOf('?') === -1 ?  '?jsonpCallback=' + name : '&jsonpCallback=' + name;
	    var script = document.createElement('script');
	    window[name] = function (d) {
			callback(d);
			script.parentNode.removeChild(script);
		};
	    script.src = url;
	    document.getElementsByTagName('head')[0].appendChild(script);  
	}  

    wm.account = {};
    wm.account.open = function (opt) {
    	creatLogin(opt || {});
    	wm.emit('showAccount');
    }
    wm.account.close = function () {
    	var elm = wm.get('accountBox');
    	if (elm) {
    		elm.innerHTML = '';
    		wm.emit('hideAccount');
    	}
    }
    wm.account.isLogin = function (fn) {
    	var wm_login_divint = wm.get('wm_login_divint');
        var wm_logout_divint = wm.get('wm_logout_divint');
        var loginBox = wm.get('wm_login_Name');
        getJSONP('https://passport.wanmei.com/sso/loginstatus', function (da) {
        	//da.code = 0;
        	//da.message = 'ceshi';
        	if(da.code) {
        		wm.USER = null;
	    		wm_login_divint.style.display = '';
	    		wm_logout_divint.style.display = 'none';
	    		fn();
	    	} else {
	    		wm.USER = da;
	    		wm_login_divint.style.display = 'none';
	    		wm_logout_divint.style.display = '';
	    		loginBox.innerHTML = da.message;
	    		fn(da);
	    	}
        });
    }
    function creatLogin(opt) {
    	var css = 'https://static.games.wanmei.com/public/style/account/acc20150916.css?v=20171127';
    	var aid = wm.get('wm_acc_styleid');
        if (!aid) { wm.lodeElm(css, 'wm_acc_styleid'); }
        var hostUrl = opt['location'] || window.location.href;
        //var optype = '&continue=logintoiframe';  //顶层打开
        var optype = '&continue=' + (opt['continue'] !== undefined ? opt['continue'] : 'https://passport.wanmei.com/sso/logintoiframe');
        //var tourl = 'https://static.games.wanmei.com/public/loginRe.htm';
        //var optype = '&continue=loginto'; //原窗打开
    	//var src = 'http://passport.wanmei.com/sso/login?service=ssowanmei'+optype+'&isiframe=1';
    	var serviceType = opt['service'] || 'ssowanmei';
		var src = 'https://passport.wanmei.com/sso/login?service='+serviceType+optype+'&isiframe=1';

    	src += '&location=' + toHex(hostUrl);
    	var str = '<div class="WM_LoginBox">'
    	str += '<div class="closebox"><span onclick="wm.account.close()"></span></div>';
    	str += '<iframe scrolling="no" frameborder="0" allowtransparency="yes" src="' + src + '"></iframe>'
    	str += '</div>';
    	var accBox = wm.get('accountBox');
    	if (!accBox) {
    		accBox = wm.set('div');
    		accBox.setAttribute('id', 'accountBox');
    	}
		accBox.innerHTML = str;
		wm.tag('body')[0].appendChild(accBox);
    };
    var loadpageJavascript = function (url, callback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        s.onload = s.onreadystatechange = function () {
            if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                s.onload = s.onreadystatechange = null;
                if (callback) callback();
                s.parentNode.removeChild(s);
            }
        };
        var doc = document.getElementsByTagName('head')[0];
        doc.appendChild(s);
    };

    /* 登录部分补充结束 */

    //----------------------------------------------------------------------
    wm.ready(function () {
        wm.tag('body')[0].style.textAlign = 'left';


        //analytics
        (function () {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            s.src = 'https://static.games.wanmei.com/public/js/stat.js?v=171127';
            var doc = document.getElementsByTagName('head')[0];
            doc.appendChild(s);
        })();

        var wm_public = wm.tag('*'), wl;
        var elar = []
        wl = wm_public.length;
        for (var pc = 0; pc < wl; pc++) {
            if (/((.+)( +)|\b)wm-public(( +)(.+)|\b)/.test(wm_public[pc].className.replace(/(^\s*)|(\s*$)/g, ""))) {
                elar.push(wm_public[pc])
            }
        }
        var elmt, elt, elb, ell, tim, elad;
        var elmad = [];

        for (var pz = 0; pz < elar.length; pz++) {
            elmt = elar[pz];
            elt = getParameter(elmt.getAttribute("top"));
            elb = getParameter(elmt.getAttribute("bottom"));
            ell = getParameter(elmt.getAttribute("logo"));
            tim = getParameter(elmt.getAttribute("time"));

            if (elt) {  wm.top(elt, elmt); }
            if (elb) { wm.bottom(elb, elmt); }
            if (typeof ell == 'object') { wm.logo(ell, elmt); }
            if (elad) { elmad.push(elad); }
        }

        if (wm.istop && wm.parameter['top'] != -1) {
            wm.istop = 1;
            wm.top(null, null, function (pa) {
            	var loginElm = wm.get('wm_login_Btn');
            	var logoutElm = wm.get('wm_logout_Btn');
            	if(pa && pa.acc && location.href.indexOf('https://passport.wanmei.com/sso/') == -1 && wm.parameter.login != -1) {
		            loginElm.onclick = function (e) {
		            	wm.account.open();
		            	if (e && e.preventDefault){
		            		e.preventDefault();
		            	} else {
		            		window.event.returnValue = false; 
		            	}
		            	return false;
		            }
		            //绑定退出地址
		            var logoutUrl = 'https://passport.wanmei.com/sso/logout?serviceurl=' + encodeURIComponent(window.location.href);
		            logoutElm.href = logoutUrl;
		            //判断是否登录成功
		            wm.account.isLogin(function(u){});
            	}else{
            		loginElm.style.display = 'none';
            	}
            });
        };

        /*var onmessage = function (event) {
			var data = event.data;
			var origin = event.origin;
			wm.account.close();
			wm.emit('login', wm.USER);

			console.log(data);
			console.log(origin);
		};

		if (typeof window.addEventListener != 'undefined') {
			window.addEventListener('message', onmessage, false);
		} else if (typeof window.attachEvent != 'undefined') {
			window.attachEvent('onmessage', onmessage);
		}*/

        if (wm.isbottom && wm.parameter['bottom'] != -1) {
            wm.isbottom = 1;
            wm.bottom();
        }
        if (typeof wm.parameter['logo'] == 'object') {
            wm.logo(wm.parameter['logo'], wm.tag('body')[0]);
        }

        if (getParameter(wm.url('debug'))) {
            var bugel = document.createElement('div');
            bugel.innerHTML = '<a href="" >' + window.wm_msg + '</a>';
            bugel.setAttribute('style', 'border:5px solid #F00; color:#F00; font-size:12px; position:absolute; bottom:0px; left:0px; width:300px; height:30px;');
            wm.tag('body')[0].appendChild(bugel);
        }

        var time = wm.parameter['time'];
        if (typeof time == 'object') {
            if (typeof tim == 'object') { wm.Extend(time, tim); }
        } else {
            time = tim;
        }

        if (typeof time == 'object') {
            var ti = wm.Timer(time);
            if (ti === -1) {
                var timurl = location.host ? 'http://' + location.host : 'http://www.wanmei.com';
                wm.blank({});
                wm.tipBox({ msg: '<b>%u4EB2%u7231%u7684%u73A9%u5BB6%uFF0C%u8BE5%u6D3B%u52A8%u5DF2%u7ED3%u675F%uFF0C%u611F%u8C22%u60A8%u7684%u5173%u6CE8%u3002%u5B98%u7F51%u4E0A%u66F4%u591A%u7CBE%u5F69%u6D3B%u52A8%u7B49%u7740%u4F60%u54E6%7E</b>', height: 80 }, { '%u53BB%u5B98%u7F51%u770B%u770B': timurl });
            }
            if (ti === 1) {
                wm.blank({});
                wm.tipBox({ msg: '<b>%u4EB2%u7231%u7684%u73A9%u5BB6%uFF0C%u8BE5%u6D3B%u52A8%u5DF2%u7ED3%u675F%uFF0C%u611F%u8C22%u60A8%u7684%u5173%u6CE8%u3002%u5B98%u7F51%u4E0A%u66F4%u591A%u7CBE%u5F69%u6D3B%u52A8%u7B49%u7740%u4F60%u54E6%7E</b>', height: 80 }, { '%u53BB%u5B98%u7F51%u770B%u770B': 'http://' + location.host });
            }
        }

    });
};
//加载广告图
(function(){
	//以为改了异步首先获取banner，所以需要将getParameter，wmParameter变量作为参数传递，以免污染其他的同名方法和变量
	function getParameter(str) {
        if (!str) { return false; }
        try {
            eval('str=' + str);
            if (str === false || str === 0) { return -1; }
            if (str === true || str === 1) { return 1; }
            if (typeof str == 'object') { return str; }
            if (str) { return {}; }
        } catch (e) { }
        return false;
    }
    var wmParameter = (function () {
        var k = document.getElementsByTagName("script");
        var l = k.length - 1;
        return {
            "top": getParameter(k[l].getAttribute("top")),
            "bottom": getParameter(k[l].getAttribute("bottom")),
            "logo": getParameter(k[l].getAttribute("logo")),
            "time": getParameter(k[l].getAttribute("time")),
            "login": getParameter(k[l].getAttribute("login"))
        };
    })();
    (function(){
    	var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		head.appendChild(script)
		var callback = function(){
			head.removeChild(script);
			try{
				wmHeaderFnc(wmParameter,getParameter,wm_public_banner_json)
			}catch(e){
				wmHeaderFnc(wmParameter,getParameter,)
			}
		};
		try{
			script.onreadystatechange = function(){
				if(script.readyState == 'loaded'){
					callback()
				}
			}
			script.onload = function(res){
				callback()
			}
			script.onerror = function(res){
				callback()
			}
			script.src = 'https://static.games.wanmei.com/public/commonData/gamesData/commonBar/commonBar.js?v=' + (Date.now());
		}catch(e){
			callback()
		};
    })();
})();
var trackEvent = function (k, v) {
    try {
        _mtxq.push(["_trackActionEvent", k, v]);
    } catch (e) { }
}



