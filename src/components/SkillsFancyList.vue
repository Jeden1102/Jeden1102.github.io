<template>
    <div class="flex p-8 w-full items-start">
        <router-link :to="{name:'fancy'}">
            <img class="small-logo" src="/src/assets/img/google_logo.png" alt="">
        </router-link>
        <input @keyup.enter="goToPage" v-model="searchInput" type="text" class="search-input mt-8 px-4" >
    </div>
    <div  class="flex items-start w-full p-4">
    <p v-if="skillsList[searchedOption]">About {{ Object.keys( skillsList[searchedOption] ).length}} results  (0.33s) </p>
    </div>
    <div v-for="skill in skillsList[searchedOption]" class="flex w-full flex-col items-start p-4">
        <p class="font-light">https://dominikraducki.works/fancyList/{{skill.name}}</p>
        <h3 class="text-blue-600 font-bold text-2xl hover:underline cursor-pointer">{{ skill.name }}</h3>
        <p class="w-2/3 text-left">{{ skill.desc }}</p>
        <div class="flex space-x-1 ">
            <img v-for="num in skill.rating" class="h-3 mt-1" src="/src/assets/img/icons/star.png" alt="">
            <p>Skill rating {{ skill.rating }}.0</p>
        </div>
    </div>
    <div class="flex w-full flex-col items-start  text-left p-8" v-if="!skillsList[searchedOption]">
        <p>Your search - <span class="font-bold">{{ this.$route.params.details }} </span> - did not match any documents.</p>
        <p>Suggestions:</p>
        <ul class="list-disc">
            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
            <li>*Hint : type for ("front-end","back-end","projekty" or "inne")</li>
        </ul>
        <img src="/src/assets/img/not_found.svg" class="h-72" alt="">
    </div>    
</template>

<script>
import skills from '/src/skills.json'
    export default {
        data() {
            return {
                skillsList:skills,
            }
        },
        methods: {
            goToPage(){
                this.$router.push({name:'fancyList',params:{details:this.searchInput}});
                this.searchInput = '';
            }
        },
        computed:{
            searchedOption(){
                let par = this.$route.params.details.toUpperCase();
                if(par.includes("FRONT"))
                    return "frontEnd";
                else if(par.includes("BACK"))
                    return "backEnd";
                else if(par.includes("PRO"))
                    return "projekty";
                else if(par.includes("IN"))
                    return "inne";              
                else
                    return "error";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>