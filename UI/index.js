import Button from './button/Button.vue'
import Icon from './icon/Icon.vue'

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