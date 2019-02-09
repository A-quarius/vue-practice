import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Learn from './views/learn.vue'
import Student from './views/student.vue'
import Community from './views/community.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },

  ]
})
