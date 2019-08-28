
import Vue from 'vue'
import App from './App'
import router from './router'


import '../src/assets/scss/style.scss'
import '../src/assets/iconfont/iconfont.css'







//轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//列表模板
import Card from './components/Card'
Vue.component('m-card', Card)

//列表内容模板
import listCard from './components/listCard'
Vue.component('m-list-card', listCard)


import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
