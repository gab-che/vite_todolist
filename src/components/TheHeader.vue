<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default{
        props: {
            title: String,
        },
        components: {},
    }
</script>

<style scoped lang="scss">
    @use '../styles/partials/utilities' as *;
    @use '../styles/partials/variables' as *;

    header{
        @include flex_between;
        margin-bottom: $standard_spacer;
    }

</style>