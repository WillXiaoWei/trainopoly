// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },
    onLoad: function () {
      cc.log("settings")

      let buttonLocation = "Canvas/back";
      let nodeButton = cc.find(buttonLocation).getComponent(cc.Button);

      nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
          // click event
           cc.log("back");
           cc.director.loadScene('welcome');
      });



      let musicToggleLoc = "Canvas/switch";
      let musicToggleButton = cc.find(musicToggleLoc).getComponent(cc.Button);
      musicToggleButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
          // click evnt
           cc.log("music");
           cc.log(musicToggleButton.isChecked);

      });
    },

    // update (dt) {},
    // called every frame
    update: function (dt) {

    },
});
