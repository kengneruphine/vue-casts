import { createStore } from "vuex";
import Api from "../service/api";

export default createStore({
  state: {
    videos: [],
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
  },
  actions: {
    async loadVideos({ commit }) {   //commit is one of the option available in any action
      const response = await Api().get("videos");
      let result = response.data.data.map((v) => v.attributes);
      commit("SET_VIDEOS", result);
    },
  },
  modules: {},
});
