<template>
  <div class="bug-list">
    <div class="row">
      <div class="col-4 author">
        Author
      </div>
      <div class="col-4">
        Title
      </div>
      <!-- <div class="col-3">
        Description
      </div> -->
      <div class="col-4">
        Status
      </div>
    </div>


    <ul class="list-group">
      <li class="list-group-item list-group-flush" v-for="bug in bugs" :key="bug._id">

        <div class="row">
          <div class="col-4">
            {{bug.creator}}
          </div>
          <div class="col-4">
            <router-link :to="{name: 'bugDetails', params: {id: bug._id}}">
              {{bug.title}}
            </router-link>
          </div>
          <!-- <div class="col-3">
              {{bug.description}}
            </div> -->
          <div class="col-4 bugClosed" v-if="bug.closed == true">
            <i class="fas fa-circle">Bug Squashed</i>
          </div>
          <div class="col-4 bugOpen" v-else="bug.closed == false">
            <i class="fas fa-circle">Pending Fix . . .</i>
          </div>
        </div>


      </li>
    </ul>
    <div class="bugSubmitForm">

      <form @submit.prevent="submitBug(bug)" class="submitBug">
        User<input type="text" name="name" v-model="bug.creator">
        Title of Bug<input type="text" name="name" v-model="bug.title">
        Description<input type="text" name="Description" v-model="bug.description">
        <button @click="submitBug(bug)" type="submit" class="btn btn-success">Submit Bug</button>
      </form>
    </div>
  </div>
</template>

<!--------------------------------------------------------------------------------------------------->
<script>
  export default {
    name: "buglist",
    mounted() {
      this.$store.dispatch('clearBug')
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


<style scoped>
  .bugSubmitForm {
    margin-bottom: 5%;
  }

  .bugOpen {
    color: green;
  }

  .bugClosed {
    color: red;
  }

  .fa-circle:before {
    margin-right: 20px;
  }

  i {
    margin-left: 40px;
  }

  a {
    text-decoration: none;
  }

  .list-group-item {
    background-color: inherit;
  }

  .submitBug {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>