const storedemo = {
  state: {
    storedemo: {
      input: 'jingchenxu'
    }
  },
  mutations: {
    CHANGE_INPUT: state => {
      state.storedemo.input = '123456'
    }
  },
  actions: {
    StoreDemo ({ commit }) {
      commit('CHANGE_INPUT')
    }
  }
}

export default storedemo
