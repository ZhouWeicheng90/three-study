// @ts-check
import getSvgInfo from "./getSvgInfo";
import { h } from "vue";
const { fanbladePath, textXStart, textSize, innerTextPath } = getSvgInfo();

const txtPath = h("path", {
  id: "txtPath",
  d: innerTextPath,
  fill: "transparent",
  stroke: "transparent"
});
// jsx和render方法可以混着写！
// 相当于 h("path", { d: fanbladePath }),
const blade = <path d={fanbladePath} />

/**
 * @type { import('vue').Component}
 */
const component = {
  name: 'Blade',
  props: {
    type: {
      validator(v) {
        const types = ["success", "warning", "primary", "error"];
        if (types.includes(v)) {
          return true;
        }
        throw new Error(
          `Fan Blade'prop 'type' must be one of '${types.join(",")}'`
        );
      },
      default: "primary"
    },
    text: { type: String }
  },
  setup(props) {
    return () => h("g",
      {
        class: ["svg-blade", "svg-blade-" + props.type]
      },
      [
        txtPath,
        blade,
        h("text", { class: "svg-text", x: textXStart, "font-size": textSize }, [
          h("textPath", { "xlink:href": "#txtPath" }, props.text)
        ])
      ]
    );
  },
};

export default component;