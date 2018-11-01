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
    placeASellOrder:(state,payload)=>{  
        console.log(state.stocksBought.find(x => x.time === payload.time).time)
        console.log()
        //this splicing is not working as it should
        
        state.stocksBought.splice(state.stocksBought.find(x => x.time === payload.time),1);
    }
};

const actions = {
    nextDayPriceChange: ({commit},payload) => {
        commit('updatePricing')
    },
    sellOrdera:({commit},payload) => {
        commit('increaseWalletValue', payload.purchaseOrder * state.stocks[payload.id-1].currentPrice)
        commit('placeASellOrder',payload);
    },
    newPurchaseOrder:({commit, rootState},payload)=>{
        commit('addNewPurchaseOrder',payload)
    },
    buyStockUpdateWallet:({commit},payload)=>{
        commit('decreaseWalletValue',payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}