import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import UI from "../UI";
import ThreeExamples from './three-examples'
import Resume from './other-pages'

const app = createApp(App)
const routes = []

app.use(UI)
app.use(ThreeExamples, { routes, setDefault: true })
app.use(Resume, { routes })

app.use(createRouter({
    history: createWebHashHistory(),
    routes
})).mount('#app')