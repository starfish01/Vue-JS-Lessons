import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-example-9b848.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'hdfhfdi'
axios.defaults.headers.get['Accepts']= 'application/json'

axios.interceptors.request.use(config =>{
  console.log('request')
  console.log(config)
  return config
})
axios.interceptors.response.use(res => {
    console.log('request')
    console.log( res)
    return res
})

//axios.interceptors.request.eject();


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
