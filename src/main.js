import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueCookies from 'vue-cookies'
createApp(App).use(router,VueCookies).mount('#app')
