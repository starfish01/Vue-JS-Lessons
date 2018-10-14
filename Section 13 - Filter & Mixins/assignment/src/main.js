import Vue from 'vue'
import App from './App.vue'

Vue.filter('count-text-and-append', function(value) {
	return value + " - " +value.length;
});


Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
