import Vue from 'vue'
import NotaBlog from './NotaBlog.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(NotaBlog)
}).$mount('#app')
