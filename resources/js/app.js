// import { createApp } from "vue";
// import App from "./components/App.vue";
// import routes from "./routes";
// import { createRouter, createWebHistory } from "vue-router";

// const app = createApp(App);

// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes,
// });

// app.use(router);
// app.mount("#app");

require("./bootstrap");
import vue from "vue";
window.Vue = require("vue").default;

import App from "./components/App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

const app = new Vue({
    el: "#app",
    router: router,
    render: (h) => h(App),
});
