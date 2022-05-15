<template>
    <div class="flex items-center bg-white justify-center flex-col w-full min-h-screen relative">
        <button @click="showTooltipMethod" class="fixed w-16 h-16 flex items-center justify-center lg:absolute bottom-28 lg:top-8 right-8 bg-gray-200 border border-gray-400 text-white p-4 rounded-lg">
            <img src="/src/assets/img/icons/question.png" class="h-8" alt="">
        </button>
        <MyTooltip v-on:hide="showTooltipMethod" v-if="showTooltip"/>
            <div v-if="!this.$route.params.details" class="flex items-center justify-center flex-col w-full min-h-screen">
                <img src="/src/assets/img/google_logo.png" alt="">
                <input @keyup.enter="goToPage" v-model="searchInput" type="text" class="search-input mt-8 px-4" >
                <div class="flex">
                    <button @click="goToPage"  class="search-btn">Google search</button>
                    <button @click="randomPage" class="search-btn">I'm Feeling Lucky</button>
                </div>
            </div>
            <div v-else class="flex items-center justify-start flex-col w-full min-h-screen">
                <router-view ></router-view>
            </div>
    </div>
</template>

<script>
import MyTooltip from '/src/components/MyTooltip.vue';
    export default {
        components:{
            MyTooltip,
        },
        data() {
            return {
                searchInput:'',
                showTooltip:false,
            }
        },
        mounted() {
            if(!$cookies.get('show_tooltip')){
                this.showTooltip = true;
                $cookies.set("show_tooltip",false)
            }
        },
        methods: {
            goToPage(){
                //w lucky traf dać easter egga -> TO TEN EASTER EGG, WIĘCEJ NIE MA :) OBIECUJĘ
                this.$router.push({name:'fancyList',params:{details:this.searchInput}});
                this.searchInput = '';
            },
            showTooltipMethod(){
                this.showTooltip = !this.showTooltip;
            },
            randomPage(){
                let pages = ["front","back","projects","others"];
                let rand = Math.floor(Math.random()*pages.length);
                this.$router.push({name:'fancyList',params:{details:pages[rand]}});
            }
        },
    }
</script>

<style  >

.small-logo{
    transform: scale(.7);
}
.search-input{
        display: flex;
    height: 44px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    width: 438px !important;
    width: auto;
    max-width: 584px;
}
@media(max-width:500px){
    .search-input{
        width:300px !important;
    }
}
.search-input:hover,:focus{
        background-color: #fff;
    box-shadow: 0 1px 6px rgba(32,33,36,.28);
    border-color: rgba(223,225,229,0);
}
.search-btn{
        background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}
.search-btn:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
}
</style>