import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
import * as firebase from 'firebase'

import Firebase from 'firebase'






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
        saveStockOnline:(state,payload) => {
            
            var ref = firebase.database()

            //clears db
            firebase.database().ref('/').set({
                stocksBought:{},
                wallet:{},
                stocks:{}
            });
            //grabs data
            var stocksBought = state.shareFunctionality.stocksBought
            var wallet = state.wallet.wallet
            var stocks = state.shareFunctionality.stocks
            //saves to db
            firebase.database().ref('/').set({
                stocksBought,
                wallet,
                stocks
            });
        },
        loadStocksFromFirebase:(state)=>{
            var ref = firebase.database()

            return firebase.database().ref('/').once('value').then(function(snapshot) {
                state.wallet.wallet = snapshot.val().wallet;
                state.shareFunctionality.stocks = snapshot.val().stocks;
                state.shareFunctionality.stocksBought = snapshot.val().stocks;
            });


            console.log(ref.once())

        }
  
           
    },
    actions:{
        clearLocalData: ({commit}, payload) => {
            commit('resetWallet')
            commit('resetShares')
        },
        saveOnline:({commit},payload)=>{
            commit('saveStockOnline', payload)
        },
        loadOnlineData:({commit},payload)=>{
            commit('loadStocksFromFirebase')
        },
        addBook:({commit},payload)=>{
            console.log('click')
            commit('vueFireSaveOnline')
        }
    },
    modules: {
        wallet,
        shareFunctionality
    },
   
    
})


