import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import planillasJson from '@/assets/json/planillas.json';
import coordinadoresJson from '@/assets/json/coordinadores.json';
import agentesJson from '@/assets/json/agentes.json';

const app = createApp(App);

app.config.globalProperties.$coordinadorActivo = 'Coordinador';
app.config.globalProperties.$planillasJson = planillasJson;
app.config.globalProperties.$coordinadores = coordinadoresJson;
app.config.globalProperties.$agentes = agentesJson;

app.use(router).mount('#app');
