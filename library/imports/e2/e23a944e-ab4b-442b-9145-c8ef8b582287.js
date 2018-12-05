"use strict";
cc._RF.push(module, 'e23a9ROq0tEK5FFyO+LWCKH', 'mainSingleGame');
// Script/mainSingleGame.js

'use strict';

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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        progressBar: new cc.ProgressBar(),
        questions: [],
        level: 0,
        scores: 0,
        currentQuestion: {},
        question: cc.RichText,
        currentIndex: -1
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log('main scen');
    },
    start: function start() {
        var that = this;
        cc.loader.loadRes('questions.json', function (err, res) {
            //console.log(res.json.questions)
            that.questions = res.json.questions;
            cc.log(that.questions);
            //randomly fetch a question at current level
            var progressBarLocation = "Canvas/progressBar";
            that.progressBar = cc.find(progressBarLocation).getComponent(cc.ProgressBar);
            that.progressBar.progress = 0;

            // let currentLevelQuestions = that.questions[that.level]
            // let currentIndex = Math.floor(Math.random() * currentLevelQuestions.length)
            // let currentQuestion = currentLevelQuestions[currentIndex]
            // that.currentQuestion = currentLevelQuestions[currentIndex]
            //
            // let questionLocation = "Canvas/question"
            // that.question = cc.find(questionLocation).getComponent(cc.RichText);
            // that.question.string = currentQuestion["questionText"]
            // that.question.fontSize = 13
            //
            // let answerLength = currentQuestion.answer.length
            // for(var i = answerLength; i <= 3; i ++){
            //     let buttonName = "answer_" + i;
            //     let buttonLocation = "Canvas/" + buttonName
            //     let nodeButton = cc.find(buttonLocation).getComponent(cc.Button)
            //     let nodeButtonNode = cc.find(buttonLocation)
            //     nodeButton.enabled = false
            //     nodeButton.disabledColor = cc.color.TRANSPARENT
            //     nodeButtonNode.opacity = 0
            //     console.log(buttonName)
            // }
            //
            // for(var i = 0; i < answerLength; i ++){
            //     let buttonName = "answer_" + i;
            //     let buttonLocation = "Canvas/" + buttonName
            //     let theNode = cc.find(buttonLocation)
            //     let nodeButton = cc.find(buttonLocation).getComponent(cc.Button)
            //     let buttonLabelLocation = buttonLocation + "/Label"
            //     let nodeButtonLabel = cc.find(buttonLabelLocation).getComponent(cc.Label)
            //     nodeButtonLabel.string = currentQuestion.answer[i]
            //
            //
            //     var clickEventHandler = new cc.Component.EventHandler();
            //     clickEventHandler.target = theNode; //这个 node 节点是你的事件处理代码组件所属的节点
            //     clickEventHandler.component = "mainSingleGame";//这个是代码文件名
            //     clickEventHandler.handler = "false_callback";
            //
            //     nodeButton.clickEvents.push(clickEventHandler);
            //
            // }
            //
            // let correctButtonName = "answer_" + currentQuestion["correctAnswer"]
            // let correctButtonLocation = "Canvas/" + correctButtonName
            // let correctNodeButton = cc.find(correctButtonLocation).getComponent(cc.Button)
            // console.log(correctNodeButton.clickEvents)
            //
            // correctNodeButton.clickEvents[0].handler = "correct_callback"


            that.next_level();
        });
    },

    next_level: function next_level() {
        console.log("new level!!!!");
        //enable all the button
        for (var i = 0; i <= 3; i++) {
            var buttonName = "answer_" + i;
            var buttonLocation = "Canvas/" + buttonName;
            var nodeButton = cc.find(buttonLocation).getComponent(cc.Button);
            var nodeButtonNode = cc.find(buttonLocation);
            nodeButton.enabled = true;
            nodeButtonNode.opacity = 255;
        }

        var that = this;

        //randomly fetch new question at current level
        var currentLevelQuestions = that.questions[that.level];

        that.random_index(currentLevelQuestions);

        var currentQuestion = currentLevelQuestions[that.currentIndex];
        that.currentQuestion = currentLevelQuestions[that.currentIndex];
        var questionLocation = "Canvas/question";
        that.question = cc.find(questionLocation).getComponent(cc.RichText);
        that.question.string = currentQuestion["questionText"];
        that.question.fontSize = 13;
        //disable used button
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

        //set up button behavior
        for (var i = 0; i < answerLength; i++) {
            var _buttonName2 = "answer_" + i;
            var _buttonLocation2 = "Canvas/" + _buttonName2;
            var _nodeButton2 = cc.find(_buttonLocation2).getComponent(cc.Button);
            var buttonLabelLocation = _buttonLocation2 + "/Label";
            var nodeButtonLabel = cc.find(buttonLabelLocation).getComponent(cc.Label);
            nodeButtonLabel.string = currentQuestion.answer[i];

            // nodeButton.clickEvents[0].handler = "false_callback"

            _nodeButton2.node.on('click', function (event) {
                that.next_level();
            });
        }

        var correctButtonName = "answer_" + currentQuestion["correctAnswer"];
        var correctButtonLocation = "Canvas/" + correctButtonName;
        var correctNodeButton = cc.find(correctButtonLocation).getComponent(cc.Button);
        //correctNodeButton.clickEvents[0].handler = "correct_callback"


        correctNodeButton.node.on('click', function (event) {
            console.log("butttonn hitttted");
            that.scores = that.scores + 1;
            if (that.scores >= 2) {
                that.level = 1;
            }
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
        if (this.scores >= 2) {
            this.level = 1;
        }
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
        // let progressBarLocation = "Canvas/progressBar";
        // let progressBar = cc.find(progressBarLocation).getComponent(cc.ProgressBar);
        console.log(this.level);
        var progress = this.progressBar.progress;
        if (progress >= 0 && progress < 1) {
            if (this.level == 0) {
                progress += dt / 10;
            } else {
                progress += dt / 5;
            }
        } else if (progress >= 1) {
            progress = 0;
            this.next_level();
        }
        this.progressBar.progress = progress;
    }
});

cc._RF.pop();