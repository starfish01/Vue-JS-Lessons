const state = {
    wallet: 10000,
};

const getters ={
    walletValue: state =>{
        return state.wallet;
    },
};

const mutations = {
    increaseWalletValue: (state, payload) => {
        state.wallet += payload;
    },
    decreaseWalletValue: (state, payload) => {
        state.wallet -= payload;
    },
    resetWallet:(state)=>{
        state.wallet = 10000
    }
};

const actions = {
    purchaseOrder: ({commit}, payload) => {
        commit('decreaseWalletValue', payload)
    },
    sellOrder:({commit}, payload)=>{
        commit('increaseWalletValue', payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}