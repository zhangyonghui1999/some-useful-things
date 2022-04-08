import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import remConfig from '../src/utils/remconfig'
import './plugins/element.js'
import Input from '@/components/Input'
// import Blob from './assets/js/Blob'
// import Export2Excel from ''
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/scss/base.scss'
// import '@/assets/scss/rem.scss'
// import 'amfe-flexible'
import { Button, Cell, CellGroup } from 'vant'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.component('Input', Input)
Vue.use(Button).use(Cell).use(CellGroup)

remConfig()
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

// console.log('document.documentElement.style.fontSize =>', document.documentElement.style.fontSize)
// 千分位分隔符过滤器
Vue.filter('', function (value) {
  if (!value) return
  let num = parseInt(value)
  num = num + ''
  let siz = 0
  let result = ''
  for (let i = num.length - 1; i >= 0; i--) {
    siz++
    if (siz % 3 === 0) {
      siz = 0
      result = ',' + num.substr(i, 3) + result
    }
  }
  if (num.length % 3 !== 0) {
    result = num.substr(0, num.length % 3) + result
  } else {
    result = result.substring(1, result.length)
  }
  return result
})
// 科学计数器过滤器
Vue.filter('toNumberStr', function (num) {
  if (!num) return ''
  if (/^(\d+(?:\.\d+)?)(e)([-]?\d+)$/.test(num)) { // eslint-disable-line no-undef
    const temp = /^(\d{1,}(?:,\d{3})*\.(?:0*[1-9]+)?)(0*)?$/.exec(num.toFixed(8))
    if (temp) {
      return temp[1]
    } else {
      return num.toFixed(8)
    }
  } else {
    return '' + num
  }
})

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('config', config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('response', response)
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
