import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import Blob from './assets/js/Blob'
// import Export2Excel from ''
import '@fortawesome/fontawesome-free/css/all.min.css'

import '@/assets/scss/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
