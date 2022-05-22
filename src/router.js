import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import SkillsFancy from './components/SkillsFancy.vue'
import SkillsFancyList from './components/SkillsFancyList.vue'
import SkillsList from './components/SkillsList.vue'
import listSkills from './components/listSkills.vue'
const router =   createRouter({
  mode: "hash",
  history:createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0,behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      component: Home,
      name:"Home",
      meta:{
        title:"Home | Dominik Raducki Portfolio",
      }
    },
    {
      path: '/Contact',
      component: Contact,
      name:"Contact",
      meta:{
        title:"Contact | Dominik Raducki Portfolio",
      }
    },
    {
      path: '/About',
      component: About,
      name:"About",
      meta:{
        title:"About | Dominik Raducki Portfolio",
      }
    },
    {
      path: '/Skills',
      component: Projects,
      name:"Skills",
      meta:{
        title:"Skills | Dominik Raducki Portfolio",
      },
      children:[
        {
          path:"/list",
          component:SkillsList,
          name:"list",
          children:[
            {
              path:"/normalList",component:listSkills,name:"normalList",
            }
          ]
        },
        {
          path:"/fancy",
          component:SkillsFancy,
          name:"fancy",
          children:[
            {path:"/fancyList",component:SkillsFancyList,name:"fancyList"},
          ]
        },
      ]
    },

  ]
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  return next();
})
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
export default router;
