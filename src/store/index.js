import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import storedemo from './modules/storedemo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    storedemo
  },
  getters
})

export default store
