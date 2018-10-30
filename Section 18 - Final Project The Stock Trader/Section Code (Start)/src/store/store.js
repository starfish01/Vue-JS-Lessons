import Vue from 'vue';
import Vuex from 'vuex';

import wallet from './modules/wallet' ;

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
        stocks: [
            {id:1, name:"BMW", currentPrice:0},
            {id:2, name:"COKE", currentPrice:0},
            {id:3, name:"GOOGLE", currentPrice:0},
            {id:4, name:"TESLA", currentPrice:0}
        ],
        stocksBought:[
            {id:1, time:1, purchasePrice:10, purchaseOrder: 50 },
            {id:2, time:2, purchasePrice:13, purchaseOrder: 23 }
        ]
    },
    getters:{
        getStocks: state =>{
            return state.stocks;
        },
        getStockBought: state =>{
            return state.stocksBought
        }

    },
    mutations: {
        updateStockPrice: (state, payload) => {
            state.wallet += payload;
        },
        updatePricing:(state, payload,) =>{

            for(var stock in state.stocks){
               var random = Math.floor((Math.random() * 100) + 1);
               state.stocks[stock].currentPrice = random;
            }

        },
        
    },
    actions:{
        nextDayPriceChange: ({commit},payload) => {

            commit('updatePricing')
        },
        
    },
    modules: {
        wallet
    },
    
})