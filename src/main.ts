import { createApp } from "vue";
import App from "./App.vue";
import dragScroll from "./directive/drag-scroll";

const app = createApp(App);

app.directive("drag-scroll", dragScroll);
app.mount("#app");
