// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
// import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
Vue.config.productionTip = false
import VueDND from 'awe-dnd'

Vue.use(VueDND)
// Vue.use(vueRouter)
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(VueQuillEditor)
// Vue.use(UEditor)
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
