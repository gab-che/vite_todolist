<script>
    import { store } from '../store';
    import SingleTask from './SingleTask.vue';

    export default{
    components: { SingleTask },

    data() {
        return {
            store,
            tasks: []
        };
    },
    created() {
        this.tasks = this.store.taskList;
    },
}
</script>

<template>
    <div v-for="task in tasks" :key="task.id">
        <SingleTask :task="task"></SingleTask>
    </div>
</template>

<style lang="scss">
  @use '../styles/partials/utilities' as *;
  @use '../styles/partials/variables' as *;
</style>