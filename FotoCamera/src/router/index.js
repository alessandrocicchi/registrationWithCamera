import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '../components/Registration.vue'
import Photo from '../components/Photo.vue'
import MyAccount from '../components/MyAccount.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/registration2',
      name: 'photo',
      component: Photo
    },
    {
      path: '/myAccount:City:Sex:Address:Fname:Password:State:Email:Lname:Address2:Zip',
      name: 'account',
      component: MyAccount
    },
  ]
})

export default router
