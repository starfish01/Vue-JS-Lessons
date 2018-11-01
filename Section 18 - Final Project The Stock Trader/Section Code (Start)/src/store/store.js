import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: localStorage
  })


import wallet from './modules/wallet' ;
import shareFunctionality from './modules/shareFunctionality'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // plugins: [vuexPersist.plugin],
	state:{
       
    },
    getters:{
       

    },
    mutations: {
           
    },
    actions:{
        
        
    },
    modules: {
        wallet,
        shareFunctionality
    },
    
})