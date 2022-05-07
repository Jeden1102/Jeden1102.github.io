<template>
    <div class="flex items-center justify-center">
        <div class="flex flex-col md:flex-row space-y-4 md:space-x-20">
            <div class="flex items-center justify-center flex-col space-y-2">
                <h1 class="text-5xl font-bold">Hello! I'm Dominik</h1>
                <h3 class="text-2xl text-primary-red">Main skills:</h3>
                <h4>Vue/Laravel/Angular/SQL/PHP/JS</h4>
                <div class="flex">
                <router-link :to="{name:'Skills'}"><MyButton variant="red">All skills</MyButton></router-link>
                <router-link :to="{name:'Contact'}"><MyButton variant="white">Contact</MyButton></router-link>
                </div>

                
            </div>
            <div class="flex items-center justify-center">
                <img src="/src/assets/img/graphics_Design.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '/src/components/MyButton.vue';
    export default {
        components:{
            MyButton
        }
    }
</script>

<style lang="scss" scoped>

</style>