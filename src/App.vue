<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import TheNav from './components/TheNav.vue'
import TheMobileNav from './components/TheMobileNav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<TheNav />
  <router-view class="min-h-screen bg-primary-gray w-full text-white font-bold lg:px-20 py-4 mx-auto pb-40 sm:pb-4"/>
  <TheMobileNav class="sm:hidden"/>
  <Footer/>
</template>

<style >
@font-face {
  font-family: 'Adam normal';
  font-style: normal;
  font-weight: normal;
  src: local("Adam normal"), url("Adam.woff") format("woff");
}
#app {
   font-family: 'Adam normal';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
