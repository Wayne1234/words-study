<template>
  <div class="list-page">
    <custom-nav :navTitle="title"></custom-nav>
    <div class="container">
      <div class="func-list">
        <el-button type="text" class="custom-btn" @click="importWords">导入</el-button>
      </div>
      <div class="text-container">
        <el-input v-model="listTitle" placeholder="请输入单词表名字" class="custom-input"></el-input>
        <el-input
          class="input-area"
          type="textarea"
          placeholder="请输入内容"
          v-model="inputRawString">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import customNav from '../components/nav.vue';
  import '../less/public.less'

  export default {
    name: 'setlist',
    data: function () {
      return {
        root: 'test-hot',
        inputRawString: "",
        title: '导入单词表',
        listTitle: '',
      };
    },
    beforeMount() {
//      console.log(this.hotSettings.data);
    },
    methods: {
      importWords: function () {
        let arr = this.inputRawString.split('\n');
        let wordList = arr.map(wordPair => {
          let enWord = wordPair.split('\t')[0];
          let cnWord = wordPair.split('\t')[1];
          return {
            en: enWord,
            cn: cnWord,
            wrongCount: 0,
          }
        });

        if (this.listTitle && wordList && wordList.length > 0) {
          localStorage.setItem(this.listTitle, JSON.stringify(wordList));
          alert('导入成功');
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
  .text-container {
    .input-area {
      height: 480px;
      margin: 0 auto;
      width: 100%;
      font-size: 16px;
      margin-left: 10px;
      .el-textarea__inner {
        height: 480px;
        border-radius: 0;
        padding: 5px 10px;
        border-color: #999999;
        width: 790px;
        &:focus {
          border-color: #4eb1e0;
        }
      }
    }
    .custom-input {
      margin-left: 10px;
      .el-input__inner {
        border-radius: 0;
        border-color: #999;
        width: 790px;

        &:focus {
          border-color: #4eb1e0;
        }
      }
      margin-bottom: 20px;
    }
  }
</style>
