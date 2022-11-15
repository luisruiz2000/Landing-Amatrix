const registerTypeState = {
  state: {
    type: 'virtual'
  },

  getters: {
    registerType: ({ type }) => type
  },

  mutations: {
    mutationSetType(state, payload) {
      state.type = payload
    }
  },

  actions: {
    actionsSetType({ commit }, payload) {
      commit('mutationSetType', payload)
    }
  }
}

export default registerTypeState