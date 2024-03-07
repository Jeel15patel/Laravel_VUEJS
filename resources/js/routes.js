import App from "../js/components/App.vue";
import Welcome from "../js/components/ExampleComponent.vue";
import Weather from "../js/components/Weather.vue";

const routes = [
    {
        path: "/",
        component: App,
        children: [
            {
                path: "/welcome",
                component: Welcome,
            },
            {
                path: "/weather",
                component: Weather,
            },
        ],
    },
];

export default routes;
