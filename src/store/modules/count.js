const count = {
  state: {
    storeDemo: {
      count: 0
    }
  },
  actions: {
    storeDemo ({commit}) {
      commit('CHANGE_COUNT')
    }
  },
  mutations: {
    CHANGE_COUNT: state => {
      state.storeDemo.count++
    }
  }
}

export default count
