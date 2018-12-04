import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonsObject: []
  },
  getters: {
    getButtons: state => {
      return state.buttonsObject
    }

  },
  mutations: {
    updateSection: (state, payload) => {
      state.buttonsObject.forEach(element => {

      })

      state.buttonsObject = payload
    }

  },
  actions: {
    saveSection: ({ commit }, payload) => {
      commit('updateSection', payload)
    }
  }
})
