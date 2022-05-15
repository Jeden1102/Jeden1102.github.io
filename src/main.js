import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueCookies from 'vue-cookies'
import v3ImgPreview from 'v3-img-preview'
createApp(App).use(router,VueCookies,v3ImgPreview).mount('#app')
