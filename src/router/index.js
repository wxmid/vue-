import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import DateFormate from '@/components/DateFormate/DateFormate'
import Sort from '@/components/Sort/Sort'
import FileFormateLimited from '@/components/FileFormateLimited/FileFormateLimited'
import DragAnDrop from '@/components/DragAnDrop/DragAnDrop'
import Container from '@/Base/Container/Container'
import UEditor from '@/components/UEditor/UEditor' // 富文本编辑器
import QuillEditor from '@/components/QuillEditor/QuillEditor' // 富文本编辑器

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {title: '首页', icon: 'el-icon-setting'},
      children: [
        {
          path: '/formate',
          name: 'formate',
          meta: {title: '格式转化', icon: 'el-icon-setting'},
          component: Container,
          children: [
            {
              path: '/dateFormate',
              name: 'dateFormate',
              component: DateFormate,
              meta: {title: '时间格式化', icon: 'el-icon-location'}
            }
          ]
        },
        {
          path: '/limitVerify',
          name: 'limitVerify',
          meta: {title: '限制&验证', icon: 'el-icon-setting'},
          component: Container,
          children: [
            {
              path: '/fileFormateLimited',
              name: 'fileFormateLimited',
              component: FileFormateLimited,
              meta: {title: '文件类型限制', icon: 'el-icon-location'}
            }
          ]
        },
        {
          path: '/normalComponent',
          name: 'normalComponent',
          meta: {title: '常用组建', icon: 'el-icon-setting'},
          component: Container,
          children: [
            {
              path: '/dragAnDrop',
              name: 'dragAnDrop',
              component: DragAnDrop,
              meta: {title: '全屏拖拽组件', icon: 'el-icon-location'}
            },
            {
              path: '/sort',
              name: 'sort',
              component: Sort,
              meta: {title: '数组排序', icon: 'el-icon-setting'}
            }
          ]
        },
        {
          path: '/richEditor',
          name: 'richEditor',
          component: Container,
          meta: {title: '富文本编辑器', icon: 'el-icon-setting'},
          children: [
            {
              path: '/uEditor',
              name: 'uEditor',
              component: UEditor,
              meta: {title: 'UE编辑器', icon: 'el-icon-setting'}
            },
            {
              path: '/quillEditor',
              name: 'quillEditor',
              component: QuillEditor,
              meta: {title: 'Quill编辑器', icon: 'el-icon-setting'}
            }
          ]
        }
      ]
    }
  ]
})
