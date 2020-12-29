import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const List = () => import(/* webpackChunkName: "list" */ '../views/List.vue');

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
