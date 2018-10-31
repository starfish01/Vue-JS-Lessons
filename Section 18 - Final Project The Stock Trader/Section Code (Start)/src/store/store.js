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
        stocksBought:[]
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
        addNewPurchaseOrder:(state,payload)=>{
            state.stocksBought.push(payload)
        },
        buyStockUpdateWallet:(state,payload)=>{
            state.wallet.wallet -= payload;
        },
        placeASellOrder:(state,payload)=>{
            //credit wallet
            state.wallet.wallet += payload.purchaseOrder * state.stocks[payload.id-1].currentPrice
            //console.log(payload.purchaseOrder);
            //console.log(state.stocks[payload.id-1].currentPrice)
            //someArray.splice(x, 1);
            //remove stock option from array
           // console.log(state.stocksBought.find(x => x.time === payload.time))
            state.stocksBought.splice(state.stocksBought.find(x => x.time === payload.time),1);
        }   
    },
    actions:{
        nextDayPriceChange: ({commit},payload) => {
            commit('updatePricing')
        },
        sellOrdera:({commit},payload) => {
            commit('placeASellOrder',payload);
        },
        newPurchaseOrder:({commit},payload)=>{
            commit('addNewPurchaseOrder',payload)
        },
        buyStockUpdateWallet:({commit},payload)=>{
            commit('buyStockUpdateWallet',payload)
        }
        
    },
    modules: {
        wallet
    },
    
})