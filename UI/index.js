import Button from './button/Button.vue'
import Icon from './icon/Icon.vue'
import TestButton from './tests/TestButton.vue'
import Card from './TimeLineCard/Card.vue'
import TimeLineItem from './TimeLineCard/TimeLineItem.vue'
import TestOthers from './tests/TestOthers.vue'
import Carousel from './carousel/Carousel.vue'

export default {
    /**
     * @param {import('vue').App} app 
     */
    install(app) {
        const prefix = 'ax-'
        app.mixin({
            data() {
                return {
                    axuiPrefix: prefix
                }
            }
        })
        app.component('Button', Button)
        app.component('Icon', Icon)
        app.component('Card', Card)
        app.component('TimeLineItem', TimeLineItem)
        app.component('Carousel', Carousel)

        app.component('TestButton', TestButton)
        app.component('TestOthers', TestOthers)
    }
}
