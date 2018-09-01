import Vue from 'vue'
import Vuex from 'vuex'
import Config from './config.json'

const { theme } = Config

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})

// Dynamic import&register customize store
const { default: module } = require(`./theme-${theme}/store.ts`)
module && store.registerModule('self', module)

export default store
