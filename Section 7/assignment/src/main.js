import Vue from 'vue'
import App from './App.vue'
import Server from './components/Server.vue'



Vue.component('app-server', Server);

new Vue({
  el: '#app',
  render: h => h(App),
  data:{
    index:0
  }

})
