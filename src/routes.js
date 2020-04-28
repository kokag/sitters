import Vue from 'vue'
import Router from 'vue-router'
import { createRoute, VueBookComponents } from 'vue-book'

Vue.use(Router)
Vue.use(VueBookComponents)
const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    createRoute({
      requireContext: require.context('./components/', true, /(.*).demo.vue$/),
      path: '/demo',
      hideFileExtensions: true, // optional, hides file extensions in list.
    })
  ]
})

export {
  router
}
