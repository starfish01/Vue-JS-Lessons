import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {store} from './store/store.js';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-project-ac836.firebaseio.com/'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
