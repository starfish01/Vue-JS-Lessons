import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-d12c3.firebaseio.com/'

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
  }
  next((respone => {
    respone.json = () => { return { messages: respone.body }}
  }));
  //the difference between put and post in firebase
  //is that post creates a new entry and post updates
  //existing.. i think thats normal
});

new Vue({
  el: '#app',
  render: h => h(App)
})
