import Vue from 'vue'
import Vuex from 'vuex'
import Config from '@/config.json'
import { getArticles, getUserState } from '@/api/'
import Hook from './Hook'

const { theme } = Config

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    articles: []
  },
  getters: {

  },
  mutations: {
    SET_ARTICLES (state, articles) {
      state.articles = Hook.apply('SET_ARTICLES', articles)
    },
    SET_USER (state, user) {
      state = user
    }
  },
  actions: {
    INIT ({ commit }) {
      const user = getUserState()
        .then((user: any) => commit('SET_USER', user))
        .catch((err: any) => {
          commit('SET_USER', null)
          throw err
        })

      return Promise.all([user])
    },
    GET_ARTICLES ({ commit }, { offset = 0, limit = 10 } = {}) {
      return getArticles({ offset, limit })
        .then((data: any) => {
          console.log(data)
          commit('SET_ARTICLES', data.articles)
        })
    }
  }
})

// Dynamic import&register customize store
const { default: module } = require(`@/theme-${theme}/store.ts`)
module && store.registerModule('self', module)

export default store
