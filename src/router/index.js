import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/partial/Footer'
import NavBar from '@/views/partial/NavBar'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import SoundBoard from '@/views/SoundBoard'
import LessonBoard from '@/views/LessonBoard'
import Boards from '@/views/Boards'
import Login from '@/views/Login'
// import { fb } from '@/js/firebaseConfig'
// import Firebase from 'firebase'
// import db from '../js/firebase-db'
// var database = db.database()
Vue.use(Router)

// var sounds = '' // db.child('sounds')
// var about = '' // db.child('about').orderByChild('sort')
export default new Router({
  mode: 'history',
  abstract: true,
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0, 0)
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        navbar: NavBar,
        default: Home,
        footer: Footer
      }// ,
      // props: {
      //   sounds,
      //   about
      // }
    },
    {
      path: '/Boards',
      name: 'Boards',
      components: { navbar: NavBar, default: Boards, footer: Footer }
      // props: { user: fb.auth().currentUser }
    },
    {
      path: '/Lesson-Board',
      name: 'LessonBoard',
      components: { navbar: NavBar, default: LessonBoard, footer: Footer }// ,
      // props: { db: database }
    },
    {
      path: '/Login',
      name: 'Login',
      components: { navbar: NavBar, default: Login, footer: Footer }// ,
      // props: { db: database }
    },
    {
      path: '/Sound-Board',
      name: 'SoundBoard',
      components: { navbar: NavBar, default: SoundBoard, footer: Footer }// ,
      // props: { db: database }
    }, //, meta:{requiresAuth:true} },
    {
      path: '*',
      components: { navbar: NavBar, default: NotFound, footer: Footer }
    }
  ]
})
