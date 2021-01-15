import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './other-pages/store'

import UI from "../UI";

const app = createApp(App).use(store).use(router)
app.use(UI)
app.mount('#app')