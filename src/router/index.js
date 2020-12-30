import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const List = () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
Create = () => import(/* webpackChunkName: "create" */ '../views/Create.vue');

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
