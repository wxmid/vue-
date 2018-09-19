import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    }
  }
})

export default store
