<template>
  <i>
    <svg :class="`${axuiPrefix}svg`" :viewBox="view">
      <path :d="path" />
    </svg>
  </i>
</template>

<script>
import * as Icons from "./iconsPath";
export default {
  props: {
    type: {}
  },
  data() {
    return {
      path: ``,
      view: ``
    };
  },
  watch: {
    type: {
      immediate: true,
      handler() {
        let obj = Icons[this.type] || { path: "", view: "" };
        this.path = obj.path;
        this.view = obj.view;
      }
    }
  }
};
</script>

<style scoped lang='less'>
@import '../theme.less';
.@{ui-prefix}svg {
  width: 1em;
  height: 1em;
  line-height: 1em;
  vertical-align: middle;
  stroke: currentColor;
  fill: currentColor;
}
</style>