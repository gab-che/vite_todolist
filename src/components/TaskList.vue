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

    methods: {
        deleteTask(id){
            if(confirm('Are you sure?')){
                this.tasks = this.tasks.filter((task)=> task.id !== id)
            }
        },

        toggleReminder(id){
            this.tasks = this.tasks.map((task)=>{
                if(task.id === id){
                    return {...task, reminder: !task.reminder}
                } else{
                    return task
                }
            })
        }
    },

    created() {
        this.tasks = this.store.taskList;
    },
}
</script>

<template>
    <div v-for="task in tasks" :key="task.id">
        <SingleTask :task="task"
            @delete-task="deleteTask(task.id)"
            @toggle-reminder="toggleReminder(task.id)"></SingleTask>
    </div>
</template>

<style lang="scss">
  @use '../styles/partials/utilities' as *;
  @use '../styles/partials/variables' as *;
</style>