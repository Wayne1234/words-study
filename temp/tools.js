let list = require('../words/toefl.json');
let Vue = require('vue');
let VueResource = require('vue-resource');
Vue.use(VueResource);

function getMaxCnLength() {
  let lenMax = 0;
  list.forEach(item => {
    if (lenMax < item.cn.length) {
      console.log(item.cn);
      lenMax = item.cn.length;
    }
  });
  return lenMax;
}

function getMaxEnLength() {
  let lenMax = 0;
  list.forEach(item => {
    if (lenMax < item.en.length) {
      console.log(item.en);
      lenMax = item.en.length;
    }
  });
  return lenMax;
}

function countEnLength(len) {
  let count = 0;
  list.forEach(item => {
    if (item.en.length <= len) {
      count += 1;
    }
  });
  return count;
}

function countCnLength(len) {
  let count = 0;
  list.forEach(item => {
    if (item.cn.length <= len) {
      count += 1;
    }
  });
  return count;
}

function getTest() {
  Vue.http.get("https://www.baidu.com").then(res => {
    console.log(res);
  }).catch(e => {
    console.log(e);
  })
}


console.log(getMaxEnLength());
console.log(getMaxCnLength());
console.log(countEnLength(10));
console.log(countCnLength(30));
// getTest();
