/**
 * 3.0版本，新增自id名称定义，如若不填采用默认名称，用于解决同一个页面上有两个或以上模块下拉选择需求
 *
 * eq:
 *  $("#serverlist").serverlist({
         gamename: "xajh"
     });
 * $("#serverlist1").serverlist({//select id="serverlist1"
     gamename: "xajh",
     server: "server1",
     servername: "servername1",
     rolename: "rolename1",
     rolelist: "rolelist1"
    });
 */

(function ($) {
    function ServerList() {
    }

    $.extend(ServerList.prototype, {
        gameProperties: {

            world2: 1,
            world2ly: 60,
            wulin2: 9,
            w2i: 10,
            zhuxian2: 11,
            chibi: 12,
            rwpd: 13,
            kdxy: 14,
            sgcq: 18,
            mhzx2: 15,
            xlzj: 22,
            shenmo: 19,
            sgsj: 25,
            yt: 17,
            ys: 14,
            xajh: 23,
            xljz: 31,
            seiya: 28,
            sdxl: 26,
            mslr: 35,
            sw: 40,
            sd: 32,
            ts: 50,
            zxsj: 46,
            shushan: 46,
            sdxlly:54,
            xajhhd:62

        },

        _attachServerList: function (target, settings) {
            var settings = $.extend({
                serverid: settings.server || 'server',
                servername: settings.servername || "servername",
                client: "pc"
            }, settings || {});
            this._initServerList(target, settings);
            this._bindChange(target, settings);
        },
        _initServerList: function (target, settings) {
            $(target).append("<option value=''>请选择服务器</option>");
            var aid = $.serverlist.gameProperties[settings.gamename];
            $.ajax({
                url: "https://event.games.wanmei.com/server/list/serverList?t=" + new Date().getTime(),
                dataType: "jsonp",
                data: { "gameId": aid,"limitToken": settings.limittoken},
                timeout: 30 * 1000,
                error: function () {
                    $(target).append("<option value=''>服务器维护</option>")
                },
                success: function (data) {
                    if(data.success){
                        $.serverlist.resolveJSON(data, target, settings);
                    }else{
                        $(target).append("<option value=''>服务器维护</option>")
                    }
                }
            });
        },
        _bindChange: function (target, settings) {
            $(target).change(function () {
                var $serverInfo = $(this).val();
                if ($serverInfo == '') {
                    $("#" + settings.serverid).val('');
                    $("#" + settings.servername).val('');
                    return;
                }
                $("#" + settings.serverid).val($serverInfo.split("_")[0]);
                $("#" + settings.servername).val($serverInfo.substr($serverInfo.indexOf("_")+1));
                //服务器选择之后，如果当前页面有角色下拉框则调用接口返回角色信息
                var rolelist = $("#" + (settings.rolelist || "rolelist"));
                if (rolelist.length > 0) {
                    //select框变动后为隐藏字段赋值，方便后台提取
                    rolelist.change(function () {
                        $("#" + (settings.roleid || "roleid")).val(rolelist.val().substring(0, rolelist.val().indexOf("_")));
                        $("#" + (settings.level || "level")).val(rolelist.val().substring(rolelist.val().lastIndexOf("_") + 1));
                        $("#" + (settings.rolename || "rolename")).val(rolelist.find("option:selected").text());
                        //$("#" + (settings.rolename || "rolename")).val(rolelist.val().substring(rolelist.val().indexOf("_") + 1, rolelist.val().lastIndexOf("_")));
                    });

                    var aid = $.serverlist.gameProperties[settings.gamename];
                    $.getJSON('https://event.games.wanmei.com/server/list/getRoleListByServerJsonp?callback=?', {
                        key: new Date().getTime(),
                        gameId: aid,
                        server: $serverInfo.split("_")[0],
                        client: settings.client
                    }, function (json) {
                        if (json) {
                            rolelist.empty();
                            $("<option></option>").attr("value", "").html("请选择角色名").appendTo(rolelist);
                            if (json.success) {
                                $.each(json.roleList, function (i, v) {
                                    if (v.roleid != 0 && v.roleName != "")
                                        var roleName = v.roleName.replace(/[<>"&]/g, function(match, pos, originalText){
                                            switch(match){
                                                case "<": return "&lt;";
                                                case ">":return "&gt;";
                                                case "&":return "&amp;";
                                                case "\"":return "&quot;";
                                            }
                                        });
                                    $("<option></option>").attr("value", v.roleId + "_" + v.roleName + "_" + v.level).html(roleName).appendTo(rolelist);
                                });
                            }

                        }
                    });
                }
                //角色下拉结束
            });
        },
        resolveJSON: function (json, target, settings) {
            var aid = $.serverlist.gameProperties[settings.gamename];
            var includeides = settings.includeids;
            var exceptids = settings.exceptids;
            if (includeides && exceptids) {
                throw "includeids,exceptids只能配置一种。";
            } else if (includeides) {
                var includArray = includeides.split(",");
            } else if (exceptids) {
                var exceptArray = exceptids.split(",");
            }
            $.each(json.message, function (index, field) {

                var $zone = field;
                if (aid == $zone.gameId || ("world2" == settings.gamename && $zone.gameId <= 8)) {
                    //普通列表
                    if (!includeides && !exceptids) {
                        $.serverlist.createOption(target, $zone);
                    } else if (includeides) {
                        for (var i = includArray.length - 1; i >= 0; i--) {
                            if (includArray[i] == $zone.serverId) {
                                $.serverlist.createOption(target, $zone);
                                break;
                            }
                        }
                    } else if (exceptids) {
                        var notInclude = true;
                        for (var i = exceptArray.length - 1; i >= 0; i--) {
                            if (exceptArray[i] == $zone.serverId) {
                                notInclude = false;
                                break;
                            }
                        }
                        if (notInclude) {
                            $.serverlist.createOption(target, $zone);
                        }

                    }
                }
            });
            var complete = settings.complete;
            if (complete) {
                $.serverlist.complete = complete;
            }
            $.serverlist.complete();
        },
        createOption: function (target, zoneInfo) {
            var option = [];
            option.push('<option value="');
            option.push(zoneInfo.serverId);
            option.push('_');
            option.push(zoneInfo.fullName);
            option.push('">');
            option.push(zoneInfo.fullName);
            option.push('</option>');
            $(target).append(option.join(""));
        },
        complete: function () {
        }

    });

    $.fn.serverlist = function (options) {
        return this.each(function () {
            $.serverlist._attachServerList(this, options);
        });
    };
    $.serverlist = new ServerList();
    $.serverlist.uuid = new Date().getTime();
    $.serverlist.version = "3.0";
}(jQuery));