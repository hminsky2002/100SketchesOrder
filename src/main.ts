import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import "@fontsource/luckiest-guy/400.css";

createApp(App).use(router).mount("#app");
