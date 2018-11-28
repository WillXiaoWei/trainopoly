"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'welcome');
// Script/welcome.js

"use strict";

var _Storage = require("./Storage");

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {

        var user_info;
        //var res = cc.loader.getRes("https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoCu6ITtLK6OvRI9wiaMUWCWawIHGicn78FiaLUeUia7jhTYVDnlhNDL1bMEBt0ejP2Rev4Yv3aApCJsQ/132")
        // cc("https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoCu6ITtLK6OvRI9wiaMUWCWawIHGicn78FiaLUeUia7jhTYVDnlhNDL1bMEBt0ejP2Rev4Yv3aApCJsQ/132",function (texture) {
        //     cc.log(texture)
        //     }
        // )
        //cc.log(res)

        // cc.loader.load({ url: avatar_url, type: 'png' },function (err, texture) {
        //     cc.log(texture)
        //     let avatarLocation = "Canvas/Avatar"
        //     let sprite = cc.find(avatarLocation).getComponent(cc.Sprite)
        //     var sprite_frame = new cc.SpriteFrame(texture)
        //     if(sprite_frame.textureLoaded ()) {
        //         sprite.spriteFrame = sprite_frame;
        //         cc.log(sprite)
        //     }
        // })

        wx.getStorage({
            key: "userInfo",
            success: function success(res) {
                console.log(res.data);
                user_info = res.data;
                var avatar_url = res.data.avatarUrl;
                console.log("avatar!!!");
                cc.loader.load({ url: avatar_url, type: 'png' }, function (err, texture) {
                    cc.log(texture);
                    var avatarLocation = "Canvas/Avatar";
                    var sprite = cc.find(avatarLocation).getComponent(cc.Sprite);
                    var sprite_frame = new cc.SpriteFrame(texture);
                    if (sprite_frame.textureLoaded()) {
                        sprite.spriteFrame = sprite_frame;
                        cc.log(sprite);
                    }
                });
                var greetingLocation = "Canvas/greeting";
                var greeting = cc.find(greetingLocation).getComponent(cc.Label);
                greeting.string = "Hi " + user_info.nickName + " from " + user_info.city + ", " + user_info.country + ",\n ready to be humiliated?";
                greeting.fontSize = 13;
            }
        });

        var buttonLocation = "Canvas/settingBtn";
        var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);

        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // click event
            cc.log("settings");
            cc.director.loadScene('settings');
        });

        var startButtonLocation = "Canvas/startBtn";
        var nodeStartButton = cc.find(startButtonLocation).getComponent(cc.Button);

        nodeStartButton.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // click event
            cc.log("game loop");
            cc.director.loadScene('mainSingleGame');
        });
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();