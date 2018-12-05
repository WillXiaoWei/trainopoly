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
  gameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81d3agTaAJNqaC8SbW4P0tg", "gameOver");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var buttonLocation = "Canvas/playAgainBtn";
        var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);
        nodeButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          cc.log("play again");
          cc.director.loadScene("mainSingleGame");
        });
      },
      start: function start() {}
    });
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
  mainSingleGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e23a9ROq0tEK5FFyO+LWCKH", "mainSingleGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        progressBar: new cc.ProgressBar(),
        questions: [],
        level: 0,
        scores: 0,
        currentQuestion: {},
        question: cc.RichText,
        currentIndex: -1
      },
      onLoad: function onLoad() {
        cc.log("main scen");
      },
      start: function start() {
        var that = this;
        cc.loader.loadRes("questions.json", function(err, res) {
          that.questions = res.json.questions;
          cc.log(that.questions);
          var progressBarLocation = "Canvas/progressBar";
          that.progressBar = cc.find(progressBarLocation).getComponent(cc.ProgressBar);
          that.progressBar.progress = 0;
          that.next_level();
        });
      },
      next_level: function next_level() {
        console.log("new level!!!!");
        for (var i = 0; i <= 3; i++) {
          var buttonName = "answer_" + i;
          var buttonLocation = "Canvas/" + buttonName;
          var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);
          var nodeButtonNode = cc.find(buttonLocation);
          nodeButton.enabled = true;
          nodeButtonNode.opacity = 255;
        }
        var that = this;
        var currentLevelQuestions = that.questions[that.level];
        that.random_index(currentLevelQuestions);
        var currentQuestion = currentLevelQuestions[that.currentIndex];
        that.currentQuestion = currentLevelQuestions[that.currentIndex];
        var questionLocation = "Canvas/question";
        that.question = cc.find(questionLocation).getComponent(cc.RichText);
        that.question.string = currentQuestion["questionText"];
        that.question.fontSize = 13;
        var answerLength = currentQuestion.answer.length;
        for (var i = answerLength; i <= 3; i++) {
          var _buttonName = "answer_" + i;
          var _buttonLocation = "Canvas/" + _buttonName;
          var _nodeButton = cc.find(_buttonLocation).getComponent(cc.Button);
          var _nodeButtonNode = cc.find(_buttonLocation);
          _nodeButton.enabled = false;
          _nodeButton.disabledColor = cc.color.TRANSPARENT;
          _nodeButtonNode.opacity = 0;
          console.log(_buttonName);
        }
        for (var i = 0; i < answerLength; i++) {
          var _buttonName2 = "answer_" + i;
          var _buttonLocation2 = "Canvas/" + _buttonName2;
          var _nodeButton2 = cc.find(_buttonLocation2).getComponent(cc.Button);
          var buttonLabelLocation = _buttonLocation2 + "/Label";
          var nodeButtonLabel = cc.find(buttonLabelLocation).getComponent(cc.Label);
          nodeButtonLabel.string = currentQuestion.answer[i];
          _nodeButton2.node.on("click", function(event) {
            that.next_level();
          });
        }
        var correctButtonName = "answer_" + currentQuestion["correctAnswer"];
        var correctButtonLocation = "Canvas/" + correctButtonName;
        var correctNodeButton = cc.find(correctButtonLocation).getComponent(cc.Button);
        correctNodeButton.node.on("click", function(event) {
          console.log("butttonn hitttted");
          that.scores = that.scores + 1;
          that.scores >= 2 && (that.level = 1);
          that.next_level();
        });
        console.log(correctNodeButton.clickEvents);
        that.progressBar.progress = 0;
        var scoreLocation = "Canvas/score";
        var scoreText = cc.find(scoreLocation).getComponent(cc.RichText);
        scoreText.string = "Score:" + that.scores;
      },
      false_callback: function false_callback(event, customEventData) {
        console.log("hahaha");
        var node = event.target;
        var nodeButton = node.getComponent(cc.Button);
        this.next_level();
      },
      correct_callback: function correct_callback(event, customEventData) {
        console.log("hahahah");
        var node = event.target;
        var button = node.getComponent(cc.Button);
        this.scores = this.scores + 1;
        this.scores >= 2 && (this.level = 1);
        this.next_level();
      },
      random_index: function random_index(currentLevelQuestions) {
        while (true) {
          var currentIndex = Math.floor(Math.random() * currentLevelQuestions.length);
          if (currentIndex != this.currentIndex) {
            this.currentIndex = currentIndex;
            break;
          }
        }
      },
      update: function update(dt) {
        console.log(this.level);
        var progress = this.progressBar.progress;
        if (progress >= 0 && progress < 1) 0 == this.level ? progress += dt / 10 : progress += dt / 5; else if (progress >= 1) {
          progress = 0;
          this.next_level();
        }
        this.progressBar.progress = progress;
      }
    });
    cc._RF.pop();
  }, {} ],
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
        nodeStartButton.node.on(cc.Node.EventType.TOUCH_START, function(event) {
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
}, {}, [ "Storage", "gameOver", "getUserInfo", "mainSingleGame", "settings", "welcome" ]);