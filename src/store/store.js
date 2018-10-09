import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isCollapse: false,
    onRoutes: '/',
    token: '',
    currentRouter: '' // this.$route
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    setCurrentRouter (state, payload) {
      state.currentRouter = payload.router
    }
  }
})

export default store
