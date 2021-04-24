import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: () =>
            import ('../views/Reviews.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () =>
            import ('../views/Contacts.vue')
    },
    {
        path: '/sales',
        name: 'Sales',
        component: () =>
            import ('../views/Sales.vue')
    },
    {
        path: '/our-team',
        name: 'OurTeam',
        component: () =>
            import ('../views/OurTeam.vue')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/inner-gallery/:id',
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router