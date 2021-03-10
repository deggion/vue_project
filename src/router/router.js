import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import('../components/pages/Equipment/Equipment.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../components/pages/Solutions/Solutions.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../components/pages/Services/Services.vue')
  },
  {
    path: '/software',
    name: 'Software',
    component: () => import('../components/pages/Software/Software.vue')
  },
  {
    path: '/cost',
    name: 'Cost',
    component: () => import('../components/pages/Cost/Cost.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../components/pages/News/News.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../components/pages/Contacts/Contacts.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../components/pages/Articles/Articles.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router