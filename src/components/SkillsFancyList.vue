<template>
    <div class="flex p-8 flex-col sm:flex-row w-full items-start justify-center sm:justify-start ">
        <router-link class="mx-auto sm:mx-0 " :to="{name:'fancy'}">
            <img class="small-logo mx-auto " src="/src/assets/img/google_logo.png" alt="">
        </router-link>
        <input @keyup.enter="goToPage" v-model="searchInput" type="text" class="search-input mt-8 px-4 mx-auto sm:mx-0" >
    </div>
    <div  class="flex items-start w-full p-4">
    <p v-if="skillsList[searchedOption]">About {{ Object.keys( skillsList[searchedOption] ).length}} results  (0.33s) </p>
    </div>
    <div v-for="skill in skillsList[searchedOption]" class="flex w-full flex-col items-start p-4">
        <p class="font-light text-left break-all">https://dominikraducki.works/fancyList/{{skill.name}}</p>
        <h3 v-if="!skill.url || skill.url == 'restricted'" class="text-blue-600 font-bold text-2xl hover:underline cursor-pointer">{{ skill.name }}</h3>
        <a :href="skill.url" target="_blank" v-else class="text-blue-600 font-bold text-2xl hover:underline cursor-pointer">{{ skill.name }}</a>
        <p class="w-2/3 text-left">{{ skill.desc }}</p>
        <div v-if="skill.rating" class="flex space-x-1 ">
            <img v-for="num in skill.rating" class="h-3 mt-1" src="/src/assets/img/icons/star.png" alt="">
            <p>Skill rating {{ skill.rating }}.0</p>
        </div>
        <div v-if="skill.technologies" class="">
            Used technologies:
            <div class="flex flex-wrap">
                <div v-for="technology in skill.technologies" class="bg-blue-500 text-white m-1 p-1 rounded-lg">
                    {{ technology }}
                </div>
            </div>
        </div>
        <div class="bg-green-500 border border-green-700 p-1 text-white" v-if="skill.commercial">
            Commercial project
        </div>
    </div>
    <div class="flex w-full flex-col items-start  text-left p-8" v-if="!skillsList[searchedOption] && searchedOption != 'help'">
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
    <div v-if="searchedOption == 'help'" class="flex w-full flex-col items-start  text-left p-8" >
        <p class="w-2/3">Wow ! Is there really a need to help ? Pperation of this application is similar to way google works, the application is intuitive as all of my appliactions are :)) so I dont see any reasons to help...anyway:</p>
        <p>To look what interest you about my person just type one of these words in search bar above</p>
        <p >"front-end" : for my skills connected with Front-End development </p>
        <p>"back-end" : for my skills connected with Front-End development </p>
        <p>"others" : for my others skills </p>
        <p>"projects" : for my projects list </p>
        <p>Search engine is intuitive, you can even type "front" and it will still show some results. Try it out !</p>
        <img src="/src/assets/img/help.svg" class="h-72 my-8" alt="">
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
                    return "projects";
                else if(par.includes("OTH"))
                    return "others";
                else if(par.includes("HEL"))
                    return "help";               
                else
                    return "error";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>