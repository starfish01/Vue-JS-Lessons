import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'



const vuexPersist = new VuexPersist({
    key: 'myApp',
    storage: window.localStorage
  })


import wallet from './modules/wallet' ;
import shareFunctionality from './modules/shareFunctionality'
import firebaseFunctionality from './modules/firebaseFunctionality'

Vue.use(Vuex);



export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],

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
        shareFunctionality,
        firebaseFunctionality
    },
   
    
})


