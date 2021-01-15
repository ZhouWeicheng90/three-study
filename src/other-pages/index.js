import store from './components/store.js'
import './components/common.css'

export default {
    /**
     * 
     * @param {import('vue').App} app 
     * @param {{routes:[]}} param1 
     */
    install(app, { routes }) {
        if (!Array.isArray(routes)) {
            throw new Error(`You must provide a routes array when install !`)
        }
        if(process.env.NODE_ENV =='development') {
            console.warn("=====[note:] this plugin must install before use router=====")
        }
        app.use(store)
        routes.push({
            path: '/test',
            component: () => import('./MyResume.vue')
        })
    }
}