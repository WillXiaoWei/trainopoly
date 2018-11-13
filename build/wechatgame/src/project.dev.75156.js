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