<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index">
        <router-link :to="{ name: 'video-watch', params: { id: video.name } }">
          <div class="video-box">
            <img :src="video.thumbnail" />
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Api from "@/service/api";

export default {
  name: "Home",
  components: {},
  mounted() {
    this.loadVideos()
  },
  
  methods:{
    async loadVideos(){
      const response = await Api().get("videos");
      this.videos = response.data.data.map(v => v.attributes);
    }

  },
  data() {
    return {
      videos: [],
      //videos: this.$store.state.videos,
    };
  },
};
</script>

<style scoped lang="scss">
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>
