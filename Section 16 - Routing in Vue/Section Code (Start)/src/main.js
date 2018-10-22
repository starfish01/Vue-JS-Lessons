import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //history mode requies that the server return the index page in
    // all cases to work
    mode:'history',
    scrollBehavior(to, from, savedPosition){

      if(savedPosition){
        return savedPosition;
      }

      if(to.hash){
        return { selector: to.hash };
      }

      return {x: 0, y:0}

    }
});

router.beforeEach((to,from,next)=>{
  console.log('global for each')
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
