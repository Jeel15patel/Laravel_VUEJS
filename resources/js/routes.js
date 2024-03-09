import { omit } from "lodash";
import App from "./components/App.vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import Welcome from "./components/ExampleComponent.vue";
import Weather from "./components/Weather.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: App,
    },
    {
        name: "weather",
        path: "/weather",
        component: Weather,
    },
    {
        name: "example",
        path: "/example",
        component: ExampleComponent,
    },
];
// export const routes2 = [
//     {
//         name: "home",
//         path: "/",
//         component: App,
//     },
//     {
//         name: "Weather",
//         path: "/weather",
//         component: Weather,
//     },
// ];
