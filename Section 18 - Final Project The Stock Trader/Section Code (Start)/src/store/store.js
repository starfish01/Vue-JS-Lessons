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
        clearLocalDataMutation:(state,payload)=>{
            //trying to clear local data
            //window.localStorage.clear('my-app');
            // const initial = state;
            // Object.keys(initial).forEach(key => { state[key] = initial[key] })
            console.log(window.localStorage.clear('myApp'));

            window.localStorage.clear('myApp');
            //window.localStorage.clear()

        }
           
    },
    actions:{
        clearLocalData: ({commit}, payload) => {
            
                
            //window.localStorage.clear(myApp)

            commit('clearLocalDataMutation', payload)
        },
    },
    modules: {
        wallet,
        shareFunctionality
    },
    
})