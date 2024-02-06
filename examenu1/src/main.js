// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  render: h => h(App),
  router,  // Agrega el router aquí
}).$mount('#app');
