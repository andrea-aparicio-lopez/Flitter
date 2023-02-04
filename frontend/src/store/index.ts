import { createStore } from 'vuex'
import postsModule from './posts'
import userModule from './user'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts: postsModule,
    user: userModule
  }
})
