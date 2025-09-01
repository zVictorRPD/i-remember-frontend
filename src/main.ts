import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import router from './routes';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
