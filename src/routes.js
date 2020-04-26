import Vue from 'vue'
import Router from 'vue-router'
import { createRoute } from 'vue-book'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    createRoute({
      requireContext: require.context('./components/', true, /(.*).demo.vue$/),
      path: '/demo',
      hideFileExtensions: true, // optional, hides file extensions in list.
      hideNavigation: true, // optional, hides navigation panel. Intended to be used with visual recognition library.
    }),
  ]
})


export {
  router
}
