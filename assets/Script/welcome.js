cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {


        //if(cc.sys.platform===cc.sys.WECHAT_GAME){
        cc.log('wechat')
        
        let button = wx.createUserInfoButton({
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
        })
        button.onTap((res) => {
          wx.setStorage({
            key:"userInfo",
            data:res.userInfo
          })

        })
        button.show()

        //}


        cc.log('pass')
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
