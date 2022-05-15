<template>
    <div class="w-full h-16 md:h-24 bg-white flex items-center justify-around">
        <router-link  :to="{name:'Home'}">
            <h2 class="flex text-3xl font-bold">Dominik <span class="text-primary-red">Raducki</span>  <img class="h-8 w-8" src="/src/assets/img/icons/ai2.png" alt=""> </h2>
        </router-link>
        <div class=" space-x-4 hidden sm:flex">
        <router-link class="font-bold link" :to="{name:'Home'}">Home</router-link>
        <router-link class="font-bold link" :to="{name:'About'}">About me</router-link>
        <router-link class="font-bold link" :to="{name:'Skills'}">Skills&Projects</router-link>
        <router-link class="font-bold link"  :to="{name:'Contact'}">Contact</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.link:hover::after{
    width:100%;
}
.link{
    position: relative;
    transition: .3s;
}
.link::after{
    width:0%;
    height:1px;
    position: absolute;
    left:0;
    bottom:0;
    background:red;
    content: '';
    transition: .3s;

}

.router-link-active::after{
    width:100%;
    height:1px;
    position: absolute;
    left:0;
    bottom:0;
    background:rgb(241, 163, 163);
    content: '';
    transition: .3s;
}
</style>