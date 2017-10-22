import Vue from 'vue'
import Router from 'vue-router'
import StudyWord from '../pages/StudyWord.vue'
import SetList from '../pages/SetList.vue'
import Main from '../pages/Main.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/list',
      name: 'setlist',
      component: SetList
    },
    {
      path:'/study',
      name:'study',
      component:StudyWord,
    },
    {
      path:'/edit',
      name:'edit',
      component:SetList,
    }
  ]
})
