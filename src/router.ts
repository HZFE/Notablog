import Vue from 'vue'
import Router from 'vue-router'
import Config from './config.json'

Vue.use(Router)

const { theme } = Config
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */`./theme-${theme}/App.vue`)
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */`./theme-${theme}/404.vue`)
  }
]
const router = new Router({
  routes
})

// Dynamic import customize routes
const { default: route } = require(`./theme-${theme}/route.ts`)
route && router.addRoutes(route)

export default router
