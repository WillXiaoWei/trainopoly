(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Storage.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0ff6cfTCf9FJZ1zCsy3TdXD', 'Storage', __filename);
// Script/Storage.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUserInfo = setUserInfo;
exports.setAudioId = setAudioId;
exports.getAudioId = getAudioId;
exports.setLanguage = setLanguage;
// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

function setUserInfo(userInfo) {

    wx.setStorage({
        key: 'userInfo',
        data: userInfo
    });
    wx.setStorage({
        key: 'nikename',
        data: userInfo.nikename
    });
    wx.setStorage({
        key: 'city',
        data: userInfo.city
    });
    wx.setStorage({
        key: 'country',
        data: userInfo.country
    });
    wx.setStorage({
        key: 'avatar_url',
        data: userInfo.avatarUrl
    });
}

function setAudioId(id) {
    wx.setStorage({
        key: 'audio_id',
        data: id
    });
}

function getAudioId() {
    try {
        var value = wx.getStorageSync('audio_id');
        if (value != undefined) {
            return value;
        } else {
            return -1;
        }
    } catch (e) {
        return -1;
    }
}

function setLanguage(language) {
    wx.setStorage({
        key: 'language',
        data: language
    });
}

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
        //# sourceMappingURL=Storage.js.map
        