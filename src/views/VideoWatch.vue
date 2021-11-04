<template>
  <div>
    <img :src="video.thumbnail" />
    <span v-for="(tag_id, index) in video.tag_ids" :key="index">
      <router-link :to="{ name: 'tag', params: { id: tag_id } }">
        <button class="tag-button">{{ getTag(tag_id).name }}</button>
      </router-link>
    </span>
    <h1>{{ video.name }}</h1>
    <div v-html="video.description"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.name == this.$route.params.id || {}
      );
    },
    ...mapGetters(["getTag"]),
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
  height: 600px;
}
</style>
