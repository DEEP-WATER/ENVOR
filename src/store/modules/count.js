const count = {
  state: {
    count: 0
  },
  actions: {
    storeCount ({commit}) {
      commit('CHANGE_COUNT')
    }
  },
  mutations: {
    CHANGE_COUNT: state => {
      state.count++
    }
  }
}

export default count
