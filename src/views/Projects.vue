<template>
    <div class="flex items-center justify-center flex-col">
        <div class="flex">
        <router-link  :to="{name:'list'}"><MyButton variant="red">Displayed in list</MyButton></router-link>
        <router-link :to="{name:'fancy'}"><MyButton variant="white">Displayed in fancy style</MyButton></router-link>
        </div>
        <div class="w-full min-h-screen  text-black rounded-lg">
        <router-view @hide-nav="hideMobileNav"></router-view>
        </div>

        
    </div>
</template>

<script>
import MyButton from '/src/components/MyButton.vue';
    export default {
        data() {
            return {
            }
        },
        components:{
            MyButton
        },
        methods: {
            hideMobileNav(){
                let mobileNav = document.querySelector('.mobile-nav');
                mobileNav.classList.toggle('hidden')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>