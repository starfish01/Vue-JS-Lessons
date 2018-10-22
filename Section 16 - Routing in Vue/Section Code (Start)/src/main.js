import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //history mode requies that the server return the index page in
    // all cases to work
    mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
