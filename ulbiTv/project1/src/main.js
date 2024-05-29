import { createApp } from 'vue';
import App from '@/App';
import componentsUI from '@/components/UI';
import router from '@/router/router';

const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component)
});


app
    .use(router)
    .mount('#app');
