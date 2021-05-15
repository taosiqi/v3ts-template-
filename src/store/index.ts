import { createStore } from 'vuex'
import user from './modules/user/index'
import app from './modules/app/index'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    app
  }
})
