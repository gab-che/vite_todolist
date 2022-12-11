<template>
    <button :style="{background: color}" class="btn"
        @click="onClick()">{{text}}</button>
</template>

<script>
    export default{
        props: {
            text: String,
            color: String,
        },

        methods: {
            onClick(){
                console.log('click')
            }
        }
    }
</script>