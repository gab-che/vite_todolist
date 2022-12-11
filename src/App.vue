<script>
  import TheHeader from './components/TheHeader.vue';
  import TaskList from './components/TaskList.vue';

  export default{
    components: { TheHeader, TaskList },

    data(){
      return{}
    }
  }
</script>

<template>
  <div class="container main_container my-4">
    <TheHeader title="Task Tracker"></TheHeader>
    <TaskList></TaskList>
  </div>
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables' as *;

  .main_container{
    border: 1px solid $color_primary;
    padding: 2rem;
  }
</style>
