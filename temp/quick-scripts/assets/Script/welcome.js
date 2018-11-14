(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/welcome.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'welcome', __filename);
// Script/welcome.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {

        //if(cc.sys.platform===cc.sys.WECHAT_GAME){
        cc.log('wechat');

        var button = wx.createUserInfoButton({
            type: 'text',
            text: '获取用户信息',
            style: {
                left: 10,
                top: 76,
                width: 200,
                height: 40,
                lineHeight: 40,
                backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        button.onTap(function (res) {
            wx.setStorage({
                key: "userInfo",
                data: res.userInfo
            });
        });
        button.show();

        //}


        cc.log('pass');
        var buttonLocation = "Canvas/settingBtn";
        var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);

        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // click event
            cc.log("settings");
            cc.director.loadScene('settings');
        });
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=welcome.js.map
        