<template>
    <div>   
        <router-link v-for="skill in skills" class="w-full h-full"  :to="{name:'normalList',params:{details:skill.search}}">
            <MyButton variant="red" class="mx-2" >
                <div class="w-full h-full flex items-center justify-center">
                    <img class="h-8" :src="`src/assets/img/icons/${skill.img}`" alt="">
                    <p class="btn-title">{{ skill.title }}</p>
                </div>
            </MyButton>
        </router-link>
        <router-view>
        </router-view>

    </div>
</template>

<script>
import skills from '/src/skills.json'
import MyButton from '/src/components/MyButton.vue'
    export default {
        data() {
            return {
                skills:skills
            }
        },
        components:{
            MyButton,
        }
    }
</script>

<style  scoped>
.router-link-active button{
    background: white;
}
.router-link-active .btn-title{
    color:black !important;
}
</style>