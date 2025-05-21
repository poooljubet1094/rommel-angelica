import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/Home.vue'
import VenuePage from './pages/Venue.vue'
import EntouragePage from './pages/Entourage.vue'
import ProgrammePage from './pages/Programme.vue'
import PhotosPage from './pages/Photos.vue'
import RsvpPage from './pages/Rsvp.vue'
import RsvpListPage from './pages/RsvpListPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/venue', component: VenuePage },
  { path: '/entourage', component: EntouragePage },
  { path: '/programme', component: ProgrammePage },
  { path: '/photos', component: PhotosPage },
  { path: '/rsvp', component: RsvpPage },
  { path: '/rsvp-list', component: RsvpListPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})