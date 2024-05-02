import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/project",
      name: "project",
      component: ProjectView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView
    },
  ]
})

export default router
