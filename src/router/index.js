import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: () =>
        import ('../views/About.vue')
  },
  {
    path: '/Reviews',
    name: 'Reviews',
    component: () =>
        import ('../views/Reviews.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () =>
        import ('../views/Contacts.vue')
  },
  {
    path: '/Sales',
    name: 'Sales',
    component: () =>
        import ('../views/Sales.vue')
  },
  {
    path: '/OurTeam',
    name: 'OurTeam',
    component: () =>
        import ('../views/OurTeam.vue')
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: () =>
        import ('../views/Gallery.vue')
  },
  {
    path: '/innerGallery/:id',
    name: 'innerGallery',
    component: () =>
        import ('../views/innerGallery.vue')
  },
  {
    path: '/berries/:id',
    name: 'Berries',
    component: () =>
        import ('../views/Berries.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
