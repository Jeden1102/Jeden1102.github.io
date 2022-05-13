<template>
    <div class="w-full h-16 bg-white flex items-center justify-around fixed left-0 bottom-0">
        <router-link class="hidden x-sm:flex"  :to="{name:'Home'}">
            <h2 class="flex text-3xl font-bold">D<span class="text-primary-red">R</span>  <img class="h-8 w-8" src="/src/assets/img/icons/ai2.png" alt=""> </h2>
        </router-link>
        <div class=" space-x-4 flex">
            <router-link class="font-bold link flex items-center justify-center flex-col" :to="{name:'Home'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/house.png" alt="">
                <p>Home</p>
            </router-link>
            <router-link class="font-bold link flex items-center justify-center flex-col" :to="{name:'About'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/programmer.png" alt="">
                About me
            </router-link>
            <router-link class="font-bold link flex items-center justify-center flex-col" :to="{name:'Skills'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/coding-language.png" alt="">
                Skills&Projects
            </router-link>
            <router-link class="font-bold link flex items-center justify-center flex-col"  :to="{name:'Contact'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/contact.png" alt="">
                Contact
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>