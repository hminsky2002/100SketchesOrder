import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SketchEntryView from "./views/SketchEntryView.vue";

const routes = [
  {
    path: "/:currentSketchNumber?",
    name: "Home",
    component: HomeView,
    props: true, // Pass route params as props
  },
  {
    path: "/fullList",
    name: "SketchEntries",
    component: SketchEntryView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
