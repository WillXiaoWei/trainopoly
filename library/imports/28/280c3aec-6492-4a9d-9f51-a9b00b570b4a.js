"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'welcome');
// Script/welcome.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {

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