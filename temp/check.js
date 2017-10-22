let data = require('../words/moduleDate.json')

let list = data.data.moduleDateMetrics;
list = list.reverse();

let key = 'view_cnt';
let moduleName = 'app-common-banner';

list.forEach(item => {
  if (item.module_name === moduleName) {
    console.log(item[key]+'\t'+item.module_name+'\t'+item.cal_dt)
  }
})
