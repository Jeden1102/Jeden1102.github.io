<template>
    <div class="flex items-center justify-center">
        <div class="flex space-x-20">
            <div class="flex  flex-col items-center justify-center space-y-4 w-2/3 ">
                <h2 class="text-4xl font-bold border-b-2 border-primary-red w-1/4 text-center">Dominik Raducki</h2>
                <p>I'm 20 years old student from Poland,Opole. Since I've first saw the HTML code i knew it's something what I'm interested about and what I'm going to know better. I started to create some small web-pages while discovering new technologies and programming languages. During my school education I've learned technologies such as HTML,CSS,JS and PHP, but I knew it's not enough and started to study by myself. I've took many of courses such as VueMastery, VueSchool or FrontEndMasters which gave me a lot of knowledge about Web programming. In the future I would like to exapand my skills and learn technologies such as React and React Native.</p>
                <router-link :to="{name:'Skills'}">
                <MyButton variant="red">Skills list & Projects</MyButton>
                </router-link>
                <MyButton @click="downloadCV" variant="white">Download CV</MyButton>
                <h3>Soft skills:</h3>
                <ul >
                    <li>Creative</li>
                    <li>Cooperative</li>
                    <li>Composure</li>
                    <li>Mannerly</li>
                </ul>
            </div>
            <div class="w-1/3">
                <img src="/src/assets/img/about_img.svg" alt="">
            </div>
        </div>

    </div>
</template>

<script>
import MyButton from '/src/components/MyButton.vue';
import {saveAs} from 'file-saver';
import axios from 'axios';
    export default {
        components:{
            MyButton,
        },
        methods: {
            downloadCV(){
                axios.get('/src/ticket.pdf',{
                responseType: 'blob'
                }).then(res=>{
                    saveAs(res.data,'Dominik-Raducki-CV.pdf')
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>