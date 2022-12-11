<script>
    export default{
        props: {
            task: Object,
        },

        emits:['delete-task', 'toggle-reminder'],
    }
</script>

<template>
    <div :class="[task.reminder ? 'reminder' : '', 'single_task']"
        @dblclick="$emit('toggle-reminder', task.id)">
        <h4>{{task.text}}
            <i class="fa-solid fa-xmark"
                @click="$emit('delete-task', task.id)">
            </i>
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

        &.reminder{
            border-left: 5px solid green;
        }

        h4{
            @include flex_between;

            i{
                color: red;
                cursor: pointer;
            }
        }
    }


</style>