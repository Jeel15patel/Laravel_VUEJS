import { createApp } from "vue";
import App from "./components/App.vue";
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

app.use(router);
app.mount("#app");