<template>
  <div class="DetailsPage">
    <div class="row">
      <div class="col-6">
        <h1>Bug Details</h1>
        <div v-if="!bug._id" class="spinner-border text-primary" role="status">
          <h3>
            <span class="sr-only">Loading...</span>
          </h3>
        </div>

        <div v-else class="bugFound">
          <div class="jumbotron">
            <div class="container">
              <h1 class="display-4">Title: {{bug.title}}</h1>
              <p class="lead">Created on:
                {{new Date(bug.createdAt).toLocaleDateString('en-US', {weekday:'long', year: 'numeric', day: 'numeric', month:'long'})}}
              </p>
              <p class="lead">Description: {{bug.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h1>
          Comments
        </h1>
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
        </ul>
      </div>

      <div class="commentForm">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="submitComment(comment, bug, bug._id)" class="submitComment">
              <h3>Submit New Comment</h3>
              User<input type="text" name="name" v-model="comment.creator">
              Comment<input type="text" name="comment" v-model="comment.content">
              <button type="submit" class="btn btn-primary">Submit Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailsPage",
    mounted() {
      this.$store.dispatch("getBugbyID", this.$route.params.id);
      setTimeout(() => {
        if (!this.bug._id) {
          this.$router.push({ name: "home" });
        }
      }, 3000);
    },
    props: [],

    data() {
      return {
        comment: {
          content: "",
          bug: this.bug._id,
          creator: "",
          user: ""
        }
      };
    },
    computed: {
      bug() {
        return this.$store.state.bug;
      }
    },
    methods: {
      submitComment(comment, bug) {
        console.log(comment)
        console.log(bug)
      }
    },
    components: {}
  };
</script>

<style scoped>
  .jumbotron {
    margin-top: 5vh;
    margin-left: 2vw;
    background-color: rgba(0, 0, 0, 0.493);
    width: 45vw;
  }

  .list-group-item {
    margin-top: 5vh;
    background-color: rgba(0, 0, 0, 0.493);
  }

  .fa-plus-circle:before {
    color: green;
    font-size: 24px;
  }

  .commentForm {
    margin-left: 4vw;
  }
</style>