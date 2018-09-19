import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import DateFormate from '@/components/DateFormate/DateFormate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      icon: 'el-icon-setting',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      icon: 'el-icon-setting',
      component: DateFormate,
      children: [
        {
          path: '/dateFormate',
          name: 'dateFormate',
          icon: 'el-icon-setting',
          component: DateFormate
        }
      ]
    }
  ]
})
