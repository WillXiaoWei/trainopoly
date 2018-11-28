window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Storage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ff6cfTCf9FJZ1zCsy3TdXD", "Storage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setUserInfo = setUserInfo;
    exports.setAudioId = setAudioId;
    exports.getAudioId = getAudioId;
    exports.setLanguage = setLanguage;
    function setUserInfo(userInfo) {
      wx.setStorage({
        key: "userInfo",
        data: userInfo
      });
      wx.setStorage({
        key: "nikename",
        data: userInfo.nikename
      });
      wx.setStorage({
        key: "city",
        data: userInfo.city
      });
      wx.setStorage({
        key: "country",
        data: userInfo.country
      });
      wx.setStorage({
        key: "avatar_url",
        data: userInfo.avatarUrl
      });
    }
    function setAudioId(id) {
      wx.setStorage({
        key: "audio_id",
        data: id
      });
    }
    function getAudioId() {
      try {
        var value = wx.getStorageSync("audio_id");
        return void 0 != value ? value : -1;
      } catch (e) {
        return -1;
      }
    }
    function setLanguage(language) {
      wx.setStorage({
        key: "language",
        data: language
      });
    }
    cc._RF.pop();
  }, {} ],
  getUserInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "562ferZNqRPVb9zc1MS27rB", "getUserInfo");
    "use strict";
    var _Storage = require("./Storage");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var button = wx.createUserInfoButton({
          type: "text",
          text: "Login and start",
          style: {
            left: 107,
            top: 300,
            width: 200,
            height: 40,
            lineHeight: 40,
            backgroundColor: "#ff0000",
            color: "#ffffff",
            textAlign: "center",
            fontSize: 16,
            borderRadius: 4
          }
        });
        button.onTap(function(res) {
          (0, _Storage.setUserInfo)(res.userInfo);
          button.hide();
          cc.director.loadScene("welcome");
        });
        cc.loader.loadRes("Music/yoyoyo.mp3", cc.AudioClip, function(err, audioClip) {
          var audio_id = cc.audioEngine.play(audioClip, true, 1);
          (0, _Storage.setAudioId)(audio_id);
        });
        button.show();
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "./Storage": "Storage"
  } ],
  settings: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6547fxEFPpFkIrkJcy2rAb1", "settings");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.log("settings");
        var buttonLocation = "Canvas/back";
        var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);
        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("back");
          cc.director.loadScene("welcome");
        });
        var musicToggleLoc = "Canvas/switch";
        var musicToggleButton = cc.find(musicToggleLoc).getComponent(cc.Button);
        musicToggleButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("music");
          cc.log(musicToggleButton.isChecked);
          musicToggleButton.isChecked ? cc.audioEngine.pauseAll() : cc.audioEngine.resumeAll();
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  welcome: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "welcome");
    "use strict";
    var _Storage = require("./Storage");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var user_info;
        wx.getStorage({
          key: "userInfo",
          success: function success(res) {
            console.log(res.data);
            user_info = res.data;
            var avatar_url = res.data.avatarUrl;
            console.log("avatar!!!");
            cc.loader.load({
              url: avatar_url,
              type: "png"
            }, function(err, texture) {
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
        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("settings");
          cc.director.loadScene("settings");
        });
        var startButtonLocation = "Canvas/startBtn";
        var nodeStartButton = cc.find(startButtonLocation).getComponent(cc.Button);
        nodeStartButton.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("game loop");
          cc.director.loadScene("mainSingleGame");
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "./Storage": "Storage"
  } ]
}, {}, [ "Storage", "getUserInfo", "settings", "welcome" ]);