<script>
    export default{
        props: {
            task: Object,
        }
    }
</script>

<template>
    <div :class="[task.reminder ? 'reminder' : '', 'single_task']">
        <h4>{{task.text}}
            <i class="fa-solid fa-xmark"></i>
        </h4>
        <p>{{task.day}}</p>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/utilities' as *;
    @use '../styles/partials/variables' as *;

    .single_task{
        background-color: $color_primary;
        margin: 5px;
        padding: calc($standard_spacer / 2) $standard_spacer;
        cursor: pointer;

        &.reminder{
            border-left: 5px solid green;
        }

        h4{
            @include flex_between;

            i{
                color: red;
            }
        }
    }


</style>