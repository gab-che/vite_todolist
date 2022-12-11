<script>
    import TheButton from './TheButton.vue';
    export default{
        props: {
            title: String,
        },
        components: { TheButton },
    }
</script>

<template>
    <header>
        <h1>{{title}}</h1>
        <TheButton text="Add Task" color="green"></TheButton>
    </header>
</template>

<style scoped lang="scss">
    @use '../styles/partials/utilities' as *;
    @use '../styles/partials/variables' as *;

    header{
        @include flex_between;
        margin-bottom: $standard_spacer;
    }

</style>