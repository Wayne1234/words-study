<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less" type="text/less">
  @import "~@dp/mbase-style/src/less/dp/index";
  @unit: 0.1rem;
  html{
    font-size: 12px;
    /*background-color: #252526;*/
  }
  body{
    /*overflow: hidden;*/
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
