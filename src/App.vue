<script>
  import TheHeader from './components/TheHeader.vue';

  export default{
    components: { TheHeader },
  }
</script>

<template>
  <div class="container main_container my-4">
    <TheHeader title="Task Tracker"></TheHeader>
  </div>
</template>

<style lang="scss">
  @use './styles/general.scss';
  .main_container{
    border: 1px solid gray;
    padding: 2rem;
  }
</style>
