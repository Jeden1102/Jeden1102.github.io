<template>
    <div @click="focusInput" class=" w-3/4 sm:w-1/2 h-full break-words bg-gray-100 absolute right-0 top-0 overflow-y-scroll">
        <div @click="hideConsole" class="w-full bg-gray-200 flex items-end justify-end p-1 cursor-pointer">
            <img src="/src/assets/img/icons/close.png" class="h-4" alt="">
        </div>
        <div class="w-full  p-1 flex">
            <p class="ml-4 text-left">Skills loading...</p>
        </div>  
        <div class="w-full bg-yellow-100 border-x borde-yellow-200 p-1 flex">
            <img src="/src/assets/img/icons/warning.png" class="h-4" alt="">
            <p class="ml-4 text-left break-words">[Vue warn] This programmer is extremely good. Consider of paying him a high sallary.</p>
        </div>
        <div class="w-full  p-1 flex">
            <p class="ml-4 text-left">Skills connecting...</p>
        </div>  
        <div class="w-full bg-red-200 border-x borde-red-300 p-1 flex">
            <img src="/src/assets/img/icons/cancel.png" class="h-4" alt="">
            <p class="ml-4 text-left break-words">[Vue error] Skills list almost here, wait second. "I've never seen that good portofolio" - Dominik Raducki.</p>
        </div>
        <div class="w-full  p-1 flex">
            <p class="ml-4 text-left">Skills loaded...</p>
        </div>
        <div class="w-full bg-yellow-100 border-x borde-yellow-200 p-1 flex ">
            <img src="/src/assets/img/icons/warning.png" class="h-4" alt="">
            <div>
                <p class="ml-4 text-left break-all">[Vue warn] Use commands below to look for skills your are interested in:</p>
                <p class="ml-4 text-left break-all">"front","back","others","projects","help","clear"</p>
            </div>
        </div>
        <div v-for="result in searchedResults">
            <div class="w-full  p-1 flex items-center" >
                <img src="/src/assets/img/icons/right-arrow.png" class="h-3 opacity-75" alt="">
                <p class="ml-4 text-left">{{ result.question }}</p>
            </div>
            <div class="w-full  p-1 flex items-center" v-if="typeof result.answer === 'string'" >
                <img src="/src/assets/img/icons/left-arrow.png" class="h-3 opacity-75" alt="">
                <p class="ml-4 text-left">{{ result.answer }}</p>
            </div>
            <div v-else>
                <div  v-for="answer in result.answer">
                    <div class="w-full  p-1 flex items-center" v-if="typeof answer === 'object'">
                        <img src="/src/assets/img/icons/left-arrow.png" class="h-3 opacity-75" alt="">
                        <p class="ml-4 text-left">{{ answer }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div  class="w-full bg-gray-100 p-1 flex items-center">
            <img src="/src/assets/img/icons/double-chevron.png" class="h-3" alt="">
            <input @keyup.up="previousCommands('plus')" @keyup.down="previousCommands('minus')"  ref="consoleInput" v-model="txt" @keyup.enter="searchResult" type="text" class="w-full text-left px-2 bg-gray-100 focus:bg-gray-100 focus:border-0 focus:outline-none focus:">
        </div>
    </div>
</template>

<script>
import skills from '/src/skills.json'
    export default {
        data() {
            return {
                txt:'',
                searchedResults:[],
                searchedCommands:[],
                skillsList:skills,
                currentCommandIndex:0,
            }
        },
        methods: {
            previousCommands(operation){
                if(operation == 'plus'){
                    if(this.currentCommandIndex == this.previousCommandsLength){
                        this.currentCommandIndex=0;
                    }else{
                        this.currentCommandIndex++;
                    }
                }else{
                    if(this.currentCommandIndex == 0){
                        this.currentCommandIndex=this.previousCommandsLength
                    }else{
                        this.currentCommandIndex--;
                    }
                }
                this.txt = this.searchedCommands[this.currentCommandIndex];
            },
            focusInput(){
                this.$refs.consoleInput.focus();
            },
            hideConsole(){
                this.$emit('show-console')
            },
            searchResult(){
                this.searchedCommands.push(this.txt);
                let foundResult = this.getAnswer(this.txt);
                if(foundResult == 'clear'){
                    this.searchedResults = [];
                    this.txt = '';
                    return;
                }
                let res = skills[foundResult];
                if(res == undefined){
                    res = 'undefined';
                }
                let toPush = {question:this.txt,answer:res};
                this.searchedResults.push(toPush);
                console.log(this.searchedCommands)
                console.log(this.previousCommandsLength)
                this.txt = '';
                this.currentCommandIndex = this.previousCommandsLength;
            },
            getAnswer(answer){
                let query = answer.toUpperCase();
                if(query.includes("FRONT"))
                    return "frontEnd";
                else if(query.includes("BACK"))
                    return "backEnd";
                else if(query.includes("PRO"))
                    return "projects";
                else if(query.includes("OTH"))
                    return "others";
                else if(query.includes("HEL"))
                    return "help";
                else if(query.includes("CLEAR"))
                    return "clear";                    
                else
                    return "null";
            }
        },
        computed:{
            previousCommandsLength(){
                return this.searchedCommands.length;
            }
        }
    }
</script>

<style  scoped>
*:focus {
    outline: none;
    box-shadow: none;
}
</style>