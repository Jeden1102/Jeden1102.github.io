import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name:"Home",
    },
    {
      path: '/Contact',
      component: Contact,
      name:"Contact",
    },
    {
      path: '/About',
      component: About,
      name:"About",
    },
    {
      path: '/Skills',
      component: Projects,
      name:"Skills",
    },
  ]
})