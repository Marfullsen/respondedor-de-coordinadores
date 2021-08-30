import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$coordinadorActivo = 'Coordinator';
app.use(router).mount('#app');
