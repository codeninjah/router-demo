import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Staff from '../views/StaffList.vue'
import StaffId from '../components/StaffId.vue'
import Details from '../components/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff,
  },
  {
    path: '/staff/:id',
    name: 'StaffId',
    component: StaffId
  },
  {
    path: '/staff/:id/edit',
    name: 'Edit',
    component: Details
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
