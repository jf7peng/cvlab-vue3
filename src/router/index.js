import { createRouter, createWebHistory } from 'vue-router'
import view_flask from '../views/view_flask.vue'
import test_bootstrap from '../views/test_bootstrap.vue'
import cv_origin from '../views/cv_origin.vue'
import index from '../views/index.vue'
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/view_flask',
    name: 'view_flask',
    component: view_flask
  },
  {
    path: '/test_bootstrap',
    name: 'test_bootstrap',
    component: test_bootstrap
  },
  {
    path: '/cv_origin',
    name: 'cv_origin',
    component: cv_origin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
