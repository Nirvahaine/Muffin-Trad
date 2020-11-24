import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
