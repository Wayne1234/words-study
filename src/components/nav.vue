<template>
  <div class="custom-nav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="nav-title" index="0">{{navTitle}}</div>
      <el-menu-item class="nav-index1" index="1">NAV1</el-menu-item>
      <el-menu-item index="3">NAV2</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    props:['navTitle'],

    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .custom-nav {
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(199, 199, 199, 0.5);
    z-index: 99;
    position: fixed;
    border-bottom: 1px solid black;
    width: 100%;
    .el-menu {
      background-color: white;
      width: 800px;
      margin: 0 auto;
      .nav-title{
        float: left !important;
        font-size: 20px;
        position: relative;
        top:15px;
        margin-left: 10px;
      }

      .el-menu-item{
        float: right;
        color: black;
        border-bottom: none !important;
        padding:0 10px;
        &:hover{
          background-color: black;
          color: white;
        }
      }
      .nav-index1{

      }
    }
  }


</style>
