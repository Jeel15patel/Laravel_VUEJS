import App from "../js/components/App.vue";
import Welcome from "../js/components/ExampleComponent.vue";
import Weather from "../js/components/Weather.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: App,
    },
    {
        name: "Weather",
        path: "/weather",
        component: Weather,
    },
];

export default routes;
