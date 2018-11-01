const state = {
    stocks: [
        {id:1, name:"BMW", currentPrice:0},
        {id:2, name:"COKE", currentPrice:0},
        {id:3, name:"GOOGLE", currentPrice:0},
        {id:4, name:"TESLA", currentPrice:0}
    ],
    stocksBought:[]
    
};

const getters ={
    getStocks: state =>{
        return state.stocks;
    },
    getStockBought: state =>{
        return state.stocksBought
    }
};

const mutations = {
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
        //this needs fixing
        state.wallet -= payload;
    },
    placeASellOrder:(state,payload)=>{
        //this needs fixing
        state.wallet += payload.purchaseOrder * state.stocks[payload.id-1].currentPrice
        
        state.stocksBought.splice(state.stocksBought.find(x => x.time === payload.time),1);
    }
};

const actions = {
    nextDayPriceChange: ({commit},payload) => {
        commit('updatePricing')
    },
    sellOrdera:({commit},payload) => {
        commit('placeASellOrder',payload);
    },
    newPurchaseOrder:({commit, rootState},payload)=>{
        commit('addNewPurchaseOrder',payload)
    },
    buyStockUpdateWallet:({commit},payload)=>{
        commit('buyStockUpdateWallet',payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}