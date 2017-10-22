<template>
  <div class="study-page">
    <custom-nav :navTitle="title"></custom-nav>
    <div class="container">
      <div class="func-list">
        <el-button type="text" class="custom-btn">提示</el-button>
        <el-button type="text" class="custom-btn">跳过</el-button>
        <el-button type="text" class="custom-btn">记录</el-button>
        <div class="info-item">剩余单词：{{listLength}}</div>
      </div>
      <div class="study-section" v-if="!finished">
        <h1 class="word">{{tempWord.cn}}</h1>
        <div class="blank"></div>
        <h2 class="real-answer" :class="[{'answer-right':answerRight},
                 {'answer-wrong':!answerRight},
                 {'invisible':!showAnswer}]">
          {{tempWord.en}}</h2>
        <div class="blank"></div>
        <el-input v-model="inputValue" class="input"
                  @keyup.enter.native="checkAnswer"
                  @keyup.ctrl.enter.native="getWord">
        </el-input>
      </div>
      <div class="finished-page" v-if="finished">
        <div class="finished-text">完成</div>
      </div>
    </div>
  </div>
</template>

<script>

  import customNav from '../components/nav.vue';
  import '../less/public.less';

  let tempList = require('../../words/toefl.json');
  export default {
    name: 'wordstudy',
    data() {
      return {
        list: [],
        tempWord: {},
        inputValue: "",
        showAnswer: false,
        answerRight: false,
        checkCount: 0,
        wrongList: [],
        title: '单词学习',
        finished:false,
      }
    },
    computed: {
      listLength() {
        return this.list.length;
      }
    },
    beforeMount() {
      console.log(window.location.href);
      this.init();
    },
    methods: {
      getIndex() {
        return Math.floor(Math.random() * this.list.length);
      },
      init() {
        let url = window.location.href;
        let paramsString=url.split('?')[1];
        let listKey=paramsString.split('=')[1];
        console.log(listKey);
        this.list = JSON.parse(localStorage.getItem(listKey)) || [];
        if (this.list && this.list.length) {
          this.tempWord = this.list[this.getIndex()];
          this.addNativeEventListener();
        } else {
          this.tempWord = {
            en: 'EMPTY LIST',
            cn: '单词表为空',
          };
          this.answerRight = false;
          this.showAnswer = true;
        }
      },
      addNativeEventListener() {
        let that = this;
        document.addEventListener('keyup', function (e) {
          let keyNum = window.event ? e.keyCode : e.which;
//        console.log(keyNum);
          if (keyNum === 13 && e.ctrlKey) {
            that.getWord();
          }
          if (keyNum === 65 && e.ctrlKey) {
            that.inputValue = that.tempAnswer;
            that.checkAnswer();
          }
        })
      },
      getWord: function () {
        if (this.list.length === 0) {
          console.log(this.wrongList);
          this.finished = true;
        } else {
          let index = this.getIndex();
          this.tempWord = this.list[index];
          this.showAnswer = false;
          this.inputValue = "";
          this.checkCount = 0;//用于禁止重复检查
          this.list.splice(index, 1);
        }
      },
      checkAnswer: function () {
        if (this.inputValue && this.checkCount < 1) {
          this.showAnswer = true;
          this.answerRight = (this.inputValue === this.tempWord.en);
          if (this.answerRight) {
            setTimeout(this.getWord, 500);
          } else {
            this.tempWord.wrongCount += 1;
            this.wrongList.push(this.tempWord);
            setTimeout(this.getWord, 2000);
          }
          this.checkCount += 1;
//          console.log(this.wrongList);
        }
      }
    },
    components: {
      customNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
  .study-page {
    text-align: center;
    .container {
      .study-section {
        padding-top: 60px;
        .input input {
          width: 500px;
          border-radius: 0;
          font-family: "Verdana", sans-serif;
          text-align: center;
          font-size: 48px;
          height: 72px;
          background-color: transparent;
          caret-color: #569cd6;
          border: none;
          border-bottom: solid 1px #999;
          &:focus {
            border-bottom: solid 1px #569cd6;
          }
        }
        .word {
          font-size: 36px;
          font-weight: 300;
          text-align: center;
          padding: 0 100px;
        }
        .real-answer {
          font-size: 60px;
        }
        .invisible {
          opacity: 0;
        }
        .answer-right {
          color: #608b4e;
        }

        .answer-wrong {
          color: #d16969;
        }
      }
      .finished-page{
        text-align: center;
        .finished-text{
          font-size: 48px;
          margin: 0 auto;
          margin-top: 80px;
          background-color: #65c07a;
          color: white;
          width: 400px;
        }
      }
      .blank {
        width: 100%;
        height: 24px;
      }
    }
  }
</style>
