import Vue from 'vue'
import Router from 'vue-router'
import Config from './config.json'

Vue.use(Router)

const { theme } = Config
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`./theme-${theme}/App.vue`)
  }
]
const router = new Router({
  routes
})

// Dynamic import customize routes
const { default: route } = require(`./theme-${theme}/route.ts`)
route && router.addRoutes(route)

export default router
