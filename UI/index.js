import Button from './button/Button.vue'
import Icon from './icon/Icon.vue'
import TestButton from './tests/TestButton.vue'
import Card from './TimeLineCard/Card.vue'
import TimeLineItem from './TimeLineCard/TimeLineItem.vue'
import TestOthers from './tests/TestOthers.vue'

// import { normalizePath, translatePath } from './svg-uitils'

export default {
    /**
     * 
     * @param {import('vue').App} app 
     */
    install(app) {
        app.mixin({
            data(){
                return {
                    axuiPrefix:'ax-'
                }
            }
        })
        app.component('Button', Button)
        app.component('Icon', Icon)
        app.component('Card', Card)
        app.component('TimeLineItem', TimeLineItem)
        app.component('TestButton', TestButton)
        app.component('TestOthers', TestOthers)
    }
}

// console.log(normalizePath(
//     translatePath(`
//     M0.9855769230769231 0.23076923076923078H0.8954326923076923 C0.8893028846153845 0.23076923076923078 0.8835336538461539 0.23377403846153846 0.8799278846153846 0.23870192307692312L0.5384615384615384 0.7093750000000001L0.1969951923076923 0.23870192307692312C0.19338942307692308 0.23377403846153846 0.1876201923076923 0.23076923076923078 0.1814903846153846 0.23076923076923078H0.09134615384615384 C0.08353365384615384 0.23076923076923078 0.07896634615384614 0.23966346153846152 0.08353365384615384 0.24603365384615383L0.5073317307692308 0.8302884615384615C0.5227163461538462 0.8514423076923077 0.5542067307692308 0.8514423076923077 0.5694711538461539 0.8302884615384615L0.9932692307692309 0.24603365384615378C0.9979567307692309 0.23966346153846144 0.9933894230769232 0.2307692307692307 0.9855769230769232 0.2307692307692307Z
//     `, true)
//     , 1/256, 1/256, 0, 0
// ))
// 64 64  896
// 