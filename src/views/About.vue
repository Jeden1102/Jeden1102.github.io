<template>
    <div class="flex items-center justify-center ">
        <div class="flex flex-col lg:flex-row lg:space-x-20 space-y-4 ">
            <div class="flex  test flex-col items-center justify-center space-y-4 w-full lg:w-2/3 border border-gray-700  p-4 rounded-lg ">
                <h2 class="text-4xl font-bold border-b-2 border-primary-red w:full lg:w-1/4 text-center">Dominik Raducki</h2>
                <p>I'm 20 years old student from Poland,Opole. Since I've first saw the HTML code i knew it's something what I'm interested in and what I'm going to know better. I started to create some small web-pages while discovering new technologies and programming languages. During my school education I've learned technologies such as HTML,CSS,JS and PHP, but I knew it's not enough and started to study by myself. I've took many of courses such as VueMastery, VueSchool or FrontEndMasters which gave me a lot of knowledge about Web programming. In the future I would like to exapand my skills and learn technologies such as React and React Native.</p>
                <p>
                    I'm currently looking for a job connected with Web Development in general. I feel good with FrontEnd Development as well as with BackEnd but I'd love to focus on Front-End Side and learn technologies connected with MobileApp Dev such as React Native. As you can see in my skills list in my education I focused on Vue, but I'm opened to learn React or expand knowledge in Angular and work by using those technologies.
                </p>
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
            <div class="w-1/2 mx-auto lg:w-1/3">
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
                axios.get('/src/assets/cv.pdf',{
                responseType: 'blob'
                }).then(res=>{
                    saveAs(res.data,'Dominik-Raducki-CV.pdf')
                })
            }
        },
    }
</script>

<style  scoped>
.test{
    background: #292d33;
}
</style>