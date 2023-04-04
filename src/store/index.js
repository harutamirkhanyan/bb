import { createStore } from 'vuex'
// import auth from './modules/auth.module'
// import request from './modules/request.module'

export default createStore({
  state: {
    sidebar: false
  },
  mutations: {
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },
  actions: {
  },
  modules: {

  }
})
