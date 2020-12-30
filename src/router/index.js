import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const List = () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
Create = () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
Read = () => import(/* webpackChunkName: "read" */ '../views/Read.vue');

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
  },
  {
    path: '/read/:id',
    name: 'read',
    component: Read
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
