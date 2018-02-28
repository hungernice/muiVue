import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes.js'
import axios from 'axios'  
Vue.prototype.$http=axios
import App from './App.vue'
const router =new VueRouter(routes)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
