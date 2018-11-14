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
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.log("wechat");
        var button = wx.createUserInfoButton({
          type: "text",
          text: "\u83b7\u53d6\u7528\u6237\u4fe1\u606f",
          style: {
            left: 10,
            top: 76,
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
          wx.setStorage({
            key: "userInfo",
            data: res.userInfo
          });
        });
        button.show();
        cc.log("pass");
        var buttonLocation = "Canvas/settingBtn";
        var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);
        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("settings");
          cc.director.loadScene("settings");
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "settings", "welcome" ]);