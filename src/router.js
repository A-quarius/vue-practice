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
import Question from "@/components/Question.vue"
import err from "@/components/err.vue"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        'academic': Academic
      }
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
      meta: {
        login: false
      },
      redirect:'/community/academic',
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
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/err.html',
      name: 'err',
      component: err
    },
    {
      path: '*',
      redirect(to) {
        console.log(to);
        if (to.path == '/') {
          return '/home'
        } else {
          return {name: "err"}
        }
      }
    }

  ]
})

// router.beforeEach( (to, from, next) => {
//   /* to 到哪去
//     from 从哪来
//     next 让不让进
//   */
  
//   if (to.path === '/community/academic') {
//     const answer = confirm("你还没登录，要登录吗")
  
//     if (answer) {
//       next({name: 'personal'})
//     } else {
//       next(false)
//     }
//   } else {
//     next()
//   }
// })


export default router;