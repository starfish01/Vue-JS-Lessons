import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'myApp',
    storage: window.localStorage
  })


import wallet from './modules/wallet' ;
import shareFunctionality from './modules/shareFunctionality'

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
        clearLocalData: ({commit}, payload) => {
            commit('resetWallet')
            commit('resetShares')
        },
        saveOnline:({commit},payload)=>{
            commit('submitDataOnline', payload)
        },
        loadOnlineData:({commit},payload)=>{

        }
    },
    modules: {
        wallet,
        shareFunctionality
    },
    created(){
        const customAction = {
            saveAlt: {method: 'POST'},
            getData: {method: 'GET'}
        };
        this.resource = this.$resource('{node}.json', {}, customAction);
    }
    
})