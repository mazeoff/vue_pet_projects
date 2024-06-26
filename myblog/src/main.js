import { createApp } from 'vue';
import App from './App';
import componentsUI from '@/components/UI';
import router from '@/router/router';
import directives from '@/directives';
import store from '@/store';


const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(dirictive => {
    app.directive(dirictive.name, dirictive);
});

app
    .use(router)
    .use(store)
    .mount('#app');
