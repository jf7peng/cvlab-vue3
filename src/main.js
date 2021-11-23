import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router'
import newApp from './newApp.vue';
import "bootstrap"

const app = createApp(newApp)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
