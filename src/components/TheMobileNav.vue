<template>
    <div class="mobile-nav w-full h-16 bg-white flex items-center justify-around fixed left-0 bottom-0">

        <div class="  flex w-full">
            <router-link class="font-bold w-1/4 link flex items-center justify-center flex-col" :to="{name:'Home'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/house.png" alt="">
                <p>Home</p>
            </router-link>
            <router-link class="font-bold w-1/4  link flex items-center justify-center flex-col" :to="{name:'About'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/programmer.png" alt="">
                About me
            </router-link>
            <router-link class="font-bold w-1/4  link flex items-center justify-center flex-col" :to="{name:'Skills'}">
                <img class="h-8 w-8" src="/src/assets/img/mobile-nav/coding-language.png" alt="">
                Skills
            </router-link>
            <router-link class="font-bold w-1/4  link flex items-center justify-center flex-col"  :to="{name:'Contact'}">
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

<style scoped>
.router-link-active{
    position: relative;
    background-color: rgb(252, 173, 173);
}
.router-link-active::after{
    width:100%;
    height:8px;
    position: absolute;
    left:0;
    top:-8px;
    background:rgb(255, 56, 56);
    content: '';
    transition: .3s;
    border-radius: 20% 20% 0 0;
}
</style>