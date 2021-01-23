import Button from './button/Button.vue'
import Icon from './icon/Icon.vue'
import TestButton from './tests/TestButton.vue'

export default {
    /**
     * 
     * @param {import('vue').App} app 
     */
    install(app) {
        app.component('Button', Button)
        app.component('Icon', Icon)
        app.component('TestButton',TestButton)
    }
}