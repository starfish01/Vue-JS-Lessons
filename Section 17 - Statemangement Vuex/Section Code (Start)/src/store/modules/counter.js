const state = {
    counter:0,
    stocks:[
        {id:1, name:"BMW", currentPrice=0},
        {id:2, name:"COKE", currentPrice=0},
        {id:3, name:"GOOGLE", currentPrice=0},
        {id:4, name:"TESLA", currentPrice=0}
    ]
};

const getters ={
    doubleCounter: state =>{
        return state.counter * 2;
    },
    stringCount: state =>{
        return state.counter + ' clicks';
    },
    getStocks: state =>{
        return state.stocks;
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    }
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({commit}) => {
        commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration)
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(()=>{
            commit('decrement', payload.by);
        }, payload.duration)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}