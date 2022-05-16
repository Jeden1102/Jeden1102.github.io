<template>
    <div class="h-full flex items-center flex-col w-full relative">
        <h2 class="text-3xl break-all ">{{skillData.name}}</h2>
        <p>{{skillData.desc}}</p>
        <p>Technologies used:</p>
        <div class="flex flex-wrap">
          <div class="p-1 bg-gray-600 text-white rounded-md m-1" v-for="technology in skillData.technologies">
            {{ technology }}
          </div>
        </div>
        <div class="flex" v-if="skillData.showView">
          <a :href="skillData.url" target="_blank"><MyButton class="w-32 flex items-center justify-center bg-gray-700 text-white border border-black" >Preview <img src="/src/assets/img/icons/search.png" class="h-8 mx-2" alt=""></MyButton></a>
          <a :href="skillData.url" target="_blank"><MyButton class="w-32 flex items-center justify-center bg-white text-black border border-gray-400" >Code <img src="/src/assets/img/icons/programming-code-signs.png" class="h-8 mx-2" alt=""></MyButton></a>
        </div>
        <div v-if="!skillData.showView">
          <p>Unfortunately I'cant show you the code and live view, but still here are some photos of this project.</p>
          <button v-for="(image,index) in skillData.images"  class="bg-white border mx-1 border-gray-400 p-1 rounded-md text-black" @click="handleClick(image)">Image {{index+1}}</button>
        </div>
    </div>
</template>

<script>
import { v3ImgPreviewFn } from 'v3-img-preview'
import MyButton from '/src/components/MyButton.vue'
    export default {
      props:["skillData"],
      components:{
        MyButton
      },
        methods: {
            handleClick(imageUrl){
              console.log(imageUrl);
              let url =`'/src/assets/img/${imageUrl}'`; 
              console.log(url)
              v3ImgPreviewFn(
                url
              )
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>