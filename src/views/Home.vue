<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index">
        <VideoListVideo :video="video"></VideoListVideo>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import VideoListVideo from "../components/VideoListVideo.vue";
export default {
  name: "Home",
  components: { VideoListVideo },
  methods: {},
  computed: {
    ...mapState(["videos", "tags"]),
    // videos() {
    //   return this.$store.state.videos;
    // },
    // tags() {
    //   return this.$store.state.tags;
    // },
  },
};
</script>

<style scoped lang="scss">
.video-container {
  
}
</style>
