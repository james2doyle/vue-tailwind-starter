import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  name: 'App',
  router,
  render: h => h(App)
}).$mount('#app');
