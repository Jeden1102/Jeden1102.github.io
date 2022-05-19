<template>
    <div class="w-3/4 h-3/4 p-4 text-lg absolute left-50 top-50 tootlip flex items-center justify-center bg-gray-100 text-black border border-black rounded-lg flex-col">
        <h1 class="text-4xl">Hi!</h1>
        <p>In this section you can search for my skills and projects by typing in "Google" phrases showed below : </p>
        <p >"front-end" : for my skills connected with Front-End development </p>
        <p>"back-end" : for my skills connected with Front-End development </p>
        <p>"others" : for my others skills </p>
        <p>"projects" : for my projects list </p>
        <p>"help" : for help I guess </p>
        <p>If you are a nerd you can also check my skills by using right click (or on mobile phones : holding finger - the same way as you would try to copy something) and searching in console for facts about me. </p>
        <MyButton @click="hide" variant="red">Got It!</MyButton>
    </div>
</template>

<script>
import MyButton from '/src/components/MyButton.vue';

    export default {
        components:{
            MyButton
        },
        methods: {
            hide(){
                this.$emit('hide')
            }
        },
    }
</script>

<style  scoped>
.tootlip{
}
</style>