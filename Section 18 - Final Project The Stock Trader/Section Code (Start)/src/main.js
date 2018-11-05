import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import * as firebase from 'firebase';
import {store} from './store/store.js';
import { config } from './store/firebase-config'


firebase.initializeApp(config);
Vue.prototype.$firebase = firebase;

Vue.use(VueResource);


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
