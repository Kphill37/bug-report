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
      <li class="list-group-item">Cras justo odio</li>
    </ul>
  </div>
</template>






<script>
  export default {
    name: "buglist",
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
        debugger
        this.$store.dispatch('submitBug', bug)
      }
    }
  }




</script>









<style>
  /* .bugSubmitForm {
    min-height: 10em;
    display: table-cell;
    vertical-align: middle;
  } */
</style>