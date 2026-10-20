import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import vuetify from './plugins/vuetify.js'

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')