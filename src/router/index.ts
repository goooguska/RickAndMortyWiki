import CharacterView from '@/views/CharacterView.vue'
import LocationView from '@/views/LocationView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/character/:id',
      name: 'character',
      props: true,
      component: CharacterView
    }
  ]
})

export default router
