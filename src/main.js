import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import routes from './routes.js'
const router =new VueRouter(routes)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
