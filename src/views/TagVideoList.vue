<template>
  <div>
    <h1>Videos with tag " {{ tag.name }} "</h1>
    <div v-for="video in videosOnTag" :key="video">
      <VideoListVideo :video="video"></VideoListVideo>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import VideoListVideo from "../components/VideoListVideo.vue";
export default {
  components: { VideoListVideo },
  computed: {
    ...mapGetters(["getTag"]),
    ...mapState(["videos"]),

    tag() {
      return this.getTag(this.$route.params.id);
    },

    videosOnTag() {
      return this.videos.filter((v) =>
        this.tag.video_ids.includes(v.id).toString()
      );
    },
  },
};
</script>

<style scoped></style>
