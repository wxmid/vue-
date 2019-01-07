import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Home from '@/components/Home/Home'
import DateFormate from '@/components/DateFormate/DateFormate'
import Sort from '@/components/Sort/Sort'
import FileFormateLimited from '@/components/FileFormateLimited/FileFormateLimited'
import DragAnDrop from '@/components/DragAnDrop/DragAnDrop'
import Container from '@/Base/Container/Container'
import UEditor from '@/components/UEditor/UEditor' // 富文本编辑器
import QuillEditor from '@/components/QuillEditor/QuillEditor' // 富文本编辑器
import FileUpload from '@/components/FileUpload/FileUpload' // 文件上传
import Login from '@/components/Login/Login' // 登录页
import DragDrop from '@/components/DragDrop/DragDrop' // 登录页
// const DragDrop = () => require("@/components/DragDrop/DragDrop")
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
        },
        {
          path: '/filesUoload',
          name: 'filesUoload',
          component: Container,
          meta: {title: '文件上传', icon: 'el-icon-setting'},
          children: [
            {
              path: '/fileUpload',
              name: 'fileUpload',
              component: FileUpload,
              meta: {title: '图片上传', icon: 'el-icon-setting'}
            }
          ]
        },
        {
          path: '/test',
          name: 'test',
          component: Container,
          meta: {title: '测试', icon: 'el-icon-setting'},
          children: [
            {
              path: '/test1',
              name: 'test1',
              component: Container,
              meta: {title: '测试1', icon: 'el-icon-setting'},
              children: [
                {
                  path: '/test2',
                  name: 'test2',
                  component: FileUpload,
                  meta: {title: '测试2', icon: 'el-icon-setting'}
                },
                {
                  path: '/test3',
                  name: 'test3',
                  component: Container,
                  meta: {title: '测试3', icon: 'el-icon-setting'},
                  children: [
                    {
                      path: '/test4',
                      name: 'test4',
                      component: Sort,
                      meta: {title: '测试4', icon: 'el-icon-setting'}
                    }
                  ]
                }
              ]
            },
            {
              path: '/quillEditor',
              name: 'quillEditor',
              component: QuillEditor,
              meta: {title: 'Quill编辑器', icon: 'el-icon-setting'}
            },
              {
                  path: '/dragDrop',
                  name: 'dragDrop',
                  component: DragDrop,
                  meta: {title: '拖拽', icon: 'el-icon-location'}
              }
          ]
        },
        {
          path: 'https://www.baidu.com/',
          name: 'quillEditor',
          component: null,
          meta: {title: '百度', icon: 'el-icon-location', iframe: true}
        },
        {
          path: 'https://fanyi.baidu.com/#en/zh/',
          name: 'quillEditor',
          component: null,
          meta: {title: '百度翻译', icon: 'el-icon-location', iframe: true}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {title: '登录页', icon: 'el-icon-setting'}
    }
  ]
})
/*
Router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
})
*/
