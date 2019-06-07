<template>
  <div class="bug-list">
    <div class="bugSubmitForm">

      <form @submit.prevent="handleSubmit" class="submitBug">
        User<input type="text" name="name" v-model="bug.creator">
        Title of Bug<input type="text" name="name" v-model="bug.title">
        Description<input type="text" name="Description" v-model="bug.description">
        <button @click="submitBug(bug)" type="button" class="btn btn-success">Submit Bug</button>
      </form>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="bug in bugs" :key="bug._id">Author: {{bug.creator}} - Title: {{bug.title}} -
        Description:
        {{bug.description}}</li>
    </ul>
  </div>
</template>

<!--------------------------------------------------------------------------------------------------->
<script>
  export default {
    name: "buglist",
    mounted() {
      this.$store.dispatch('getBugs')
    },
    data() {
      return {
        results: [],
        bug: {
          closed: false,
          description: '',
          title: '',
          creator: '',
          closedDate: '',
        },
      }
    },
    methods: {
      submitBug(bug) {
        console.log(bug)
        this.$store.dispatch('submitBug', bug)
        this.$store.dispatch('getBugs')
      }
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    }
  }




</script>

<!--------------------------------------------------------------------------------------------------->


<style>
  /* .bugSubmitForm {
    min-height: 10em;
    display: table-cell;
    vertical-align: middle;
  } */
</style>