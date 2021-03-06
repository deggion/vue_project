import Vue from 'vue'
import '@/assets/sass/main.sass' 
import App from './App.vue'
import router from './router/router.js'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
