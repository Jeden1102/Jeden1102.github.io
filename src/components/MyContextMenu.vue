<template>
    <div  tabindex="0" class="context-menu bg-red-200 p-2" :style="style" v-if="displayMenu">
        <p @click="showConsole" class="hover:bg-gray-200 w-full">Show console</p>
    </div>
</template>

<script>
    export default {
        props:{
            top:{
                type:Number,
                required:true,
            },
            left:{
                type:Number,
                required:true,
            },
            displayMenu:{
                type:Boolean,
            }
        },
        computed:{
        style() {
            return {
                top: this.top + 'px',
                left: this.left + 'px',
            };
        },
        },
        methods: {
            showConsole(){
                console.log("ok");
                this.$emit('show-console');
            }
        },
    }
</script>

<style  scoped>
.context-menu {
    position: fixed;
    background: white;
    z-index: 999;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
}
</style>