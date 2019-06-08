<template>
  <div class="home">
    <h1>Bug Report</h1>
    <buglist />
  </div>
</template>

<script>
  // @ is an alias to /src
  import buglist from '@/components/buglist.vue';


  export default {
    name: 'home',
    components: {
      buglist,
    }
  }
</script>

<style>

</style>