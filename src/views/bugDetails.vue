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
              <p
                class="lead"
              >Created on: {{new Date(bug.createdAt).toLocaleDateString('en-US', {weekday:'long', year: 'numeric', day: 'numeric', month:'long'})}}</p>
              <p class="lead">Description: {{bug.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h1>
          Comments
          <i @click="submitComment(bug)" class="fas fa-plus-circle"></i>
        </h1>

        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
  mounted() {
    debugger;
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
      comments: {
        content: "",
        bug: this.bug_id,
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
  methods: {},
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
</style>