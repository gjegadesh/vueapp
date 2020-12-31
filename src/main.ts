import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

fetch(`${process.env.BASE_URL}config.json`)
// fetch(process.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
    Vue.prototype.$config = config;
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  });
