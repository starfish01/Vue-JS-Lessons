import * as firebase from 'firebase'

import Firebase from 'firebase'


const state = {
    
    
};




const getters = {
    
};

const mutations = {
    saveStockOnline:({rootState,state },payload) => {
            
        var ref = firebase.database()

        //clears db
        firebase.database().ref('/').set({
            stocksBought:{},
            wallet:{},
            stocks:{}
        });
        //grabs data
        var stocksBought = payload.stocksBought
        var wallet = payload.wallet
        var stocks = payload.stocks
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
            state.shareFunctionality.stocksBought = snapshot.val().stocksBought;
        });
    }   
};

const actions = {
    clearLocalData: ({commit}, payload) => {
        commit('resetWallet')
        commit('resetShares')
    },
    saveOnline:({commit,rootState},payload)=>{

        var stocksBought = rootState.shareFunctionality.stocksBought
        var wallet = rootState.wallet.wallet
        var stocks = rootState.shareFunctionality.stocks

        var payload = {
            stocksBought,
            wallet,
            stocks
        }

        commit('saveStockOnline', payload)
    },
    loadOnlineData:({commit},payload)=>{


        var ref = firebase.database()

        return firebase.database().ref('/').once('value').then(function(snapshot) {

            commit('loadWalletState', snapshot.val().wallet);

            var payload ={
                stocks: snapshot.val().stocks,
                stocksBought: snapshot.val().stocksBought
            }

            commit('loadStocksAndBoughtStocks', payload);

        });



        commit('loadStocksFromFirebase')
    },
    addBook:({commit},payload)=>{
        console.log('click')
        commit('vueFireSaveOnline')
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}