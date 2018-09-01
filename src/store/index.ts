import Vue from 'vue'
import Vuex from 'vuex'
import Config from '@/config.json'
import { getArticles } from '@/api/'
import { hookApply } from './hooks'

const { theme } = Config

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: []
  },
  getters: {

  },
  mutations: {
    SET_ARTICLES (state, articles) {
      state.articles = hookApply('SET_ARTICLES', articles)
    }
  },
  actions: {
    GET_ARTICLES ({ state, commit }, { offset = 0, limit = 10 } = {}) {
      return getArticles({ offset, limit })
        .then((data: any) => {
          commit('SET_ARTICLES', data.articles)
        })
    }
  }
})

// Dynamic import&register customize store
const { default: module } = require(`@/theme-${theme}/store.ts`)
module && store.registerModule('self', module)

export default store
