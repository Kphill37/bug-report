<template>
  <div class="DetailsPage">
    <h3>Bug Details</h3>
    <h1>{{bug.description}}</h1>
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
    return {};
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