const state = {
    counter:0
};

const getters ={
    doubleCounter: state =>{
        return state.counter * 2;
    },
    stringCount: state =>{
        return state.counter + ' clicks';
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