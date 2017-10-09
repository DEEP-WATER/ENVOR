import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import permission from './modules/permission'
import storedemo from './modules/storedemo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    permission
    storedemo
  },
  getters
})

export default store
