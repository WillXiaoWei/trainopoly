// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

export function setUserInfo(userInfo) {

    wx.setStorage({
        key:'userInfo',
        data: userInfo
    })
    wx.setStorage({
        key:'nikename',
        data: userInfo.nikename
    })
    wx.setStorage({
        key:'city',
        data: userInfo.city
    })
    wx.setStorage({
        key:'country',
        data: userInfo.country
    })
    wx.setStorage({
        key:'avatar_url',
        data: userInfo.avatarUrl
    })

}

export function setAudioId(id){
    wx.setStorage(
        {
            key:'audio_id',
            data:id
        }
    )
}

export function getAudioId(){
    try {
        var value = wx.getStorageSync('audio_id')
        if (value!=undefined) {
            return value
        }else{
            return -1
        }
    } catch (e) {
        return -1
    }

}

export function setLanguage(language) {
    wx.setStorage(
        {
            key:'language',
            data:language
        }
    )

}


