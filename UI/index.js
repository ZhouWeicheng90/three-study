import './theme.less'
import Button from './Button.vue'
import Icon from './Icon.vue'

export default {
    /**
     * 
     * @param {import('vue').App} app 
     */
    install(app) {
        app.component('Button', Button)
        app.component('Icon', Icon)
    }
}