import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import storedemo from './modules/storedemo'
import count from './modules/count'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    storedemo,
    count,
    app
  },
  getters
})

export default store
