import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingSelectFacilities from '@/views/BookingSelectFacilities.vue'
import BookingSelectTime from '@/views/BookingSelectTime.vue'
import BookingDetails from '@/views/BookingDetails.vue'
import AboutUs from '@/views/AboutUs.vue'
import BookingDetailsConfirm from '@/views/BookingDetailsConfirm.vue'
import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bsf',
      name: 'bsf',
      component: BookingSelectFacilities,
    },
    {
      path: '/bst',
      name: 'bst',
      component: BookingSelectTime,
    },
    {
      path: '/bd',
      name: 'bd',
      component: BookingDetails,
    },
    {
      path: '/bdc',
      name: 'bdc',
      component: BookingDetailsConfirm,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },
  ],
})

export default router
