// @ts-check
import "./svg.less";

import Blade from "./Blade.js";
import { ref } from 'vue'
const bladeTypes = ["error", "warning", "success"];// 支持4种： 'success','error','warning','primary'

/**
 * @type { import('vue').Component}
 */
const component = {
    components: { Blade },
    props: {
        bladeTexts: {
            default: ["", "", ""]
        }
    },
    setup(props, { emit }) {
        const step = ref(0)
        let clickedFlag = false;
        function clickBlade(activeType, rotateCount) {
            if (clickedFlag) {
                return;
            }
            clickedFlag = true;
            setTimeout(() => {
                clickedFlag = false;
                // todo 这应该和 trasition time 一致
            }, 300);

            let direc = 0
            if ((rotateCount - 1) % 3 === 0) {
                direc = -1
            } else if ((rotateCount + 1) % 3 === 0) {
                direc = 1
            }
            emit('activeChange', bladeTypes.indexOf(activeType), direc);
            step.value += direc
        }

        return () => (
            <svg
                viewBox="0 0 1 1"
                filter="url(#panel-fan-shadow)"
                width="1"
                height="1"
            >
                <filter id="panel-fan-shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {bladeTypes.map((type, i) => (
                    // @ts-ignore
                    <Blade
                        key={type}
                        type={type}
                        transform={`rotate(${(step.value + i) * 120})`}
                        onclick={() => { clickBlade(type, step.value + i) }}
                        text={props.bladeTexts[i]}
                    />
                ))}
            </svg>
        );
    }
};
export default component;