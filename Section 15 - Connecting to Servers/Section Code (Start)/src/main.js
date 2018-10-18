import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-d12c3.firebaseio.com/user.json'

new Vue({
  el: '#app',
  render: h => h(App)
})
