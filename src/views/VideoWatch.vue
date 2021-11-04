<template>
  <div>
    <img :src="video.thumbnail" />
    <h1>{{ video.name }}</h1>
    <div v-html="video.description"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("loadVideos"); //using dispatch to call our action
  },
  computed: {
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.name == this.$route.params.id || {}
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
