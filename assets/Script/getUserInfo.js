// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
import {setAudioId, setUserInfo} from './Storage'
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        let button = wx.createUserInfoButton({
            type: 'text',
            text: 'Login and start',
            style: {
                left: 107,
                top: 300,
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
            //cc.log(res.userInfo)
            // wx.setStorage({
            //     key:"userInfo",
            //     data:res.userInfo
            // })
            setUserInfo(res.userInfo)
            button.hide()
            cc.director.loadScene('welcome')

        })

        cc.loader.loadRes("Music/yoyoyo.mp3", cc.AudioClip, function (err, audioClip) {
            var audio_id = cc.audioEngine.play(audioClip, true, 1)
            //console.log(audio_id)
            setAudioId(audio_id)

        })
        button.show()


    } ,

    update: function (dt) {

    },

    // update (dt) {},
});
