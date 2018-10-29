import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
        wallet: 10000,
        stocks: [
            {id:1, name:"BMW", currentPrice:0},
            {id:2, name:"COKE", currentPrice:0},
            {id:3, name:"GOOGLE", currentPrice:0},
            {id:4, name:"TESLA", currentPrice:0}
        ],
        getStocks: state =>{
            return state.stocks;
        }
    },
    getters:{
        walletValue: state =>{
            return state.wallet;
        },
        getStocks: state =>{
            return state.stocks;
        }
    },
    mutations: {
        increaseWalletValue: (state, payload) => {
            state.wallet += payload;
        },
        decreaseWalletValue: (state, payload) => {
            state.wallet -= payload;
        },
    },
    actions:{
        purchaseOrder: ({commit}, payload) => {
            commit('decreaseWalletValue', payload)
        },
        sellOrder:({commit}, payload)=>{
            commit('increaseWalletValue', payload)
        }
    }
})