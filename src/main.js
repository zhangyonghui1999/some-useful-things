import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Input from '@/components/Input'
// import Blob from './assets/js/Blob'
// import Export2Excel from ''
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/scss/base.scss'
import '@/assets/scss/rem.scss'

Vue.component('Input', Input)
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

console.log('document.documentElement.style.fontSize =>', document.documentElement.style.fontSize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
