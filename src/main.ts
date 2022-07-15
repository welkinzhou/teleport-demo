import { createApp } from "vue";
import router from "@/router/index.ts";
import "./style/index.css";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(router).mount("#app");
