import EpisodePage from '@/pages/EpisodePage.vue'
import LocationPage from '@/pages/LocationPage.vue'
import CharacterView from '@/views/CharacterView.vue'
import EpisodeView from '@/views/EpisodeView.vue'
import LocationView from '@/views/LocationView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationPage
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: EpisodePage
    },
    {
      path: '/character/:id',
      name: 'character',
      props: true,
      component: CharacterView
    },
    {
      path: '/locations/:id',
      props: true,
      component: LocationView
    },
    {
      path: '/episodes/:id',
      props: true,
      component: EpisodeView
    }
  ]
})

export default router
