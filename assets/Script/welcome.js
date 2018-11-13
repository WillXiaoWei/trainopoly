cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

        let buttonLocation = "Canvas/settingBtn";
        let nodeButton = cc.find(buttonLocation).getComponent(cc.Button);

        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
	          // click event
	           cc.log("settings");
             cc.director.loadScene('settings');
        });

    },

    // called every frame
    update: function (dt) {

    },
});
