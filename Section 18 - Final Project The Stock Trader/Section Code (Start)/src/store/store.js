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
    }
})