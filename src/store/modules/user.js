export default {
  namespaced: true,
  state () {
    return {
      name: 'test'
    }
  },
  mutations: {
    SET_NAME (state, data) {
      state.name = data
    }
  },
  actions: {}
}