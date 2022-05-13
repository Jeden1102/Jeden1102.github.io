<template>
    <div class="flex items-center justify-center flex-col">
        <div class="flex">
        <router-link  :to="{name:'list'}"><MyButton variant="red">Displayed in list</MyButton></router-link>
        <router-link :to="{name:'fancy'}"><MyButton variant="white">Displayed in fancy style</MyButton></router-link>
        </div>
        <div class="w-full min-h-screen bg-white text-black rounded-lg">
        <router-view></router-view>
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