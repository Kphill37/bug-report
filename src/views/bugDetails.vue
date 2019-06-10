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
              <h1 style="color: purple;" class="display-4">
                Title:
                <span style="color: white;">{{bug.title}}</span>
              </h1>
              <h2 style="color: purple;">
                Created By:
                <span style="color: white;">{{bug.creator}}</span>
              </h2>
              <p style="color: lightblue;" class="lead">
                Created on:
                {{new Date(bug.createdAt).toLocaleDateString('en-US', {weekday:'long', year: 'numeric', day: 'numeric', month:'long'})}}
              </p>
              <p class="lead">Description: {{bug.description}}</p>
              <p class="text-muted" v-if="bug.closed == true">Bug Closed</p>
              <button
                class="btn btn-primary"
                @click="bugStatus(bug)"
                v-if="!bug.closed"
              >Mark as Complete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="commentForm">
          <h3 class="text-muted" v-if="bug.closed == true">Bug Closed; commenting disabled</h3>
          <form @submit.prevent="submitComment(comment, bug)" v-else class="submitComment">
            <h3>Submit New Comment</h3>User
            <span>
              <input type="text" name="name" v-model="comment.creator">
            </span>
            Comment
            <span>
              <input type="text" name="comment" v-model="comment.content">
            </span>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <div class="commentSection">
          <h1 class="commentsHeader">Comments</h1>
          <hr class="commentDivider">
          <ul v-for="bugComment in bugComments" class="list-group" :key="bugComment._id">
            <li class="list-group-item">
              User: {{bugComment.creator}}
              <br>
              Description: {{bugComment.content}}
              <br>
              <button
                @click="deleteNote(bugComment, bug)"
                type="button"
                class="btn btn-danger btn-sm"
              >Delete Note</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>















<script>
export default {
  name: "DetailsPage",
  mounted() {
    this.$store.dispatch("getComments", this.$route.params.id);
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
        bug: this.$route.params.id,
        creator: "",
        user: "",
        flagged: "pending"
      }
    };
  },
  computed: {
    bug() {
      return this.$store.state.bug;
    },
    comments() {
      return this.$store.state.comments;
    },
    bugComments() {
      return this.$store.state.bugComments;
    }
  },
  methods: {
    submitComment(comment, bug) {
      this.$store.dispatch("submitComment", comment);
      this.$store.dispatch("getComments", this.$route.params.id);
    },
    deleteNote(bugComment, bug) {
      this.$store.dispatch("deleteCommentByID", bugComment, bug);
      this.$store.dispatch("getComments", this.$route.params.id);
    },
    bugStatus(bug) {
      this.$store.dispatch("bugCompleted", bug);
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
  display: inline-block;
}
.commentSection {
  margin-top: 2vh;
}
.list-group-item {
  margin-top: 5vh;
  background-color: rgba(0, 0, 0, 0.493);
  width: 45vw;
  text-align: start;
}

.fa-plus-circle:before {
  color: green;
  font-size: 24px;
}

.commentForm {
  margin-left: 4vw;
}
.commentsHeader {
  text-align: start;
}
.commentDivider {
  border-top: 1px solid black;
}
hr {
  width: 45vw;
}
.h1 {
  display: inline;
}
</style>