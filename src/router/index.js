import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/views/partial/Footer'
import NavBar from '@/components/views/partial/NavBar'
import Home from '@/components/views/Home'
import NotFound from '@/components/views/NotFound'
import SoundBoard from '@/components/views/SoundBoard'
import LessonBoard from '@/components/views/LessonBoard'
// import Firebase from 'firebase'
import db from '../js/firebase-db'

Vue.use(Router)

var sounds = '' // db.child('sounds')
var about = '' // db.child('about').orderByChild('sort')
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
      },
      props: {
        sounds,
        about
      }
    },
    {
      path: '/Sound-Board',
      name: 'SoundBoard',
      components: { navbar: NavBar, default: SoundBoard, footer: Footer },
      props: { db } }, //, meta:{requiresAuth:true} },
    {
      path: '/Lesson-Board',
      name: 'LessonBoard',
      components: { navbar: NavBar, default: LessonBoard, footer: Footer },
      props: { db } },
    {
      path: '*',
      components: { navbar: NavBar, default: NotFound, footer: Footer }
    }
  ]
})
