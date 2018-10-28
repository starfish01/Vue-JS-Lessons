import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		wallet: 10000
    },
    getters:{
        walletValue: state =>{
            return state.wallet;
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