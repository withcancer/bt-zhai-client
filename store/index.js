import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      data: {}
    },
    mutations: {
      set(state, data) {
        state.data = {}
        Object.assign(state.data, data)
      }
    }
  })
}

export default createStore