<template>
  <div class="main">
    <custom-nav :navTitle="title"></custom-nav>
    <div class="container">
      <div class="func-list">
        <el-button type="text" class="custom-btn">导入单词</el-button>
        <el-button type="text" class="custom-btn">功能2</el-button>
      </div>
      <div class="list-container">
        <div class="list-item" v-for="item in listInfo">
          <div class="title-func">
            <div class="item-title">{{item.listName}}</div>
            <div class="item-edit">编辑</div>
            <div class="item-study"><a :href="item.studyUrl">开始学习</a></div>
            <div class="item-study _red">删除</div>
          </div>
          <div class="words-preview">{{item.preview}}</div>
          <div class="other-info">
            <div class="words-count">{{item.wordsCount}}个单词</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const allList = require('../../words/toefl.json');
  import customNav from '../components/nav.vue';
  import '../less/public.less';

  const title = "我的单词本";

  const listInfo = [
    {
      listId: '100001',
      listName: "customList(测试单词列表)",
      preview: "tenacious,attorney,diffident,meticulous...",
      wordsCount: 233,
      createTime: '2017.09.21',
      editUrl: '/',
      studyUrl: '/#/study/?list=customList',
      localStorageKey: 'customList',
    },
    {
      listId: '100002',
      listName: "托福单词",
      preview: "tenacious,attorney,diffident,meticulous...",
      wordsCount: 233,
      createTime: '2017.09.21',
      editUrl: '/#/edit/?listId=100002',
      studyUrl: '/#/study/?listId=100002',
    }];

  export default {
    name: 'wordstudy',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        title: title,
        listInfo: listInfo
      }
    },
    beforeMount() {
      this.$http.jsonp('http://localhost:3000/users/testAPi', {credentials: true});
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      customNav
    }
  }
</script>

<style lang="less" type="text/less">
  .container {
    .list-container {
      .list-item {
        padding: 10px;
        .title-func {
          .item-title {
            font-size: 20px;
            display: inline-block;
            width: 280px;
          }
          .item-edit, .item-study {
            display: inline-block;
            margin-left: 20px;
            font-size: 16px;
          }
        }
        .words-preview {
          font-size: 20px;
          margin-top: 5px;
        }
        .other-info {
          .words-count, .create-time {
            display: inline-block;
            color: #999;
            font-size: 16px;
            margin-right: 20px;
          }
        }
      }
    }
  }

</style>
