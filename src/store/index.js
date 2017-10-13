import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import permission from './modules/permission'
import app from './modules/app'
import storedemo from './modules/storedemo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    permission,
    app,
    storedemo
  },
  getters
})

export default store
