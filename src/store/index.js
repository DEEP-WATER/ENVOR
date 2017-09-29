import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    permission
  },
  getters
})

export default store
