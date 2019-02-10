import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Learn from './views/learn.vue'
import Student from './views/student.vue'
import Community from './views/community.vue'
import Academic from "@/components/community/Academic.vue"
import Download from "@/components/community/Download.vue"
import Personal from "@/components/community/Personal.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
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
      component: Community,
      children:[
        {
          path: '/community/personal',
          name: 'personal',
          component: Personal
        },
        {
          path: '/community/academic',
          name: 'academic',
          component: Academic
        },
        {
          path: '/community/download',
          name: 'download',
          component: Download
        },
        
      ]
    },

  ]
})
