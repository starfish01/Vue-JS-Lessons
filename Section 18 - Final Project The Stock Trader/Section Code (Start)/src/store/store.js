import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'


import Firebase from 'firebase'



//i think this needs to go to the store
let config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "https://vue-stock-project-ac836.firebaseio.com/",
    storageBucket: "...",
    messagingSenderId: "..."
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()

let booksRef = db.ref('books')


const vuexPersist = new VuexPersist({
    key: 'myApp',
    storage: window.localStorage
  })


import wallet from './modules/wallet' ;
import shareFunctionality from './modules/shareFunctionality'

Vue.use(Vuex);



export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    firebase:{
        books: booksRef
    },
	state:{
       
    },
    getters:{
       

    },
    mutations: {
        vueFireSaveOnline: (state, payload) => {
            
               // booksRef.push(this.newBook);
                
        },
           
    },
    actions:{
        clearLocalData: ({commit}, payload) => {
            commit('resetWallet')
            commit('resetShares')
        },
        saveOnline:({commit},payload)=>{
            commit('submitDataOnline', payload)
        },
        loadOnlineData:({commit},payload)=>{

        },
        addBook:({commit},payload)=>{
            commit('vueFireSaveOnline')
        }
    },
    modules: {
        wallet,
        shareFunctionality
    },
    created(){
        const customAction = {
            saveAlt: {method: 'POST'},
            getData: {method: 'GET'}
        };
        this.resource = this.$resource('{node}.json', {}, customAction);
    }
    
})


