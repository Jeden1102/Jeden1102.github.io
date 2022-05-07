<template>
        <button class=" font-bold rounded-lg p-2 m-2 border " :class="{ 'bg-primary-red border-red-700': variant=='red','bg-white border-gray-100 text-black': variant=='white', }">
            <slot></slot>
        </button>
</template>

<script>
    export default {
        name:"MyButton",
        props:{
            variant:{
                type:String,
                required:true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>