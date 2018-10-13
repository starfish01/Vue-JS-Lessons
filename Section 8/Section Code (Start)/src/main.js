import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    changeAge(userAge) {
      this.$emit('ageWasEdited', userAge);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
