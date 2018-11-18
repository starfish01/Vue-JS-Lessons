import Vue from 'vue'
import Vuex from 'vuex'

import {ozSiteData} from './scrape.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteData:0
  },
  getters:{
    getLocalSiteData: state => {
      return state.siteData
    }
  },
  mutations: {
    updateSiteData(state, payload){
      state.siteData = payload
    }

  },
  actions: {
    getSiteData({ commit }){
      var payload = ozSiteData
      console.log(ozSiteData);
      commit('updateSiteData',payload)
    }

  }
})
