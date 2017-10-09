const storedemo = {
  state: {
    storedemo: {
      input: 'jingchenxu'
    }
  },
  mutations: {
    CHANGE_INPUT: (state, input) => {
      state.storedemo.input = input
    }
  },
  actions: {
    StoreDemo ({ commit }, input) {
      commit('CHANGE_INPUT', input)
    }
  }
}

export default storedemo
