import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setupMirage from "@/mirage/setup-server";

setupMirage();

createApp(App).use(store).use(router).mount("#app");
