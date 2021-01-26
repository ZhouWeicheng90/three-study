<template>
  <div :style="styleObj" class="item" :class="finished?'last':''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    finished: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleObj: {
        "--item-left": "1.5em",
        "--point-width": "0.25em",
        "--pot-top": " 0.5em"
      }
    };
  }
};
</script>

<style scoped lang="less">
@import "../theme.less";
.item {
  padding-left: var(--item-left);

  padding-bottom: 1em;
  position: relative;
}
.item::before {
  content: "";
  display: inline-block;
  width: var(--point-width);
  height: var(--point-width);
  border: calc(var(--point-width) / 2) solid transparent;
  border-radius: 50%;

  margin-left: calc(0px - var(--item-left));
  margin-right: calc(var(--item-left) - var(--point-width) * 2);
  background: @primary-color;
  background-clip: content-box;
  vertical-align: top;
  margin-top: var(--pot-top);
  box-shadow: 0 0 0 calc(var(--point-width) / 5)
    lighten(@primary-color, @hover-lighten);
}
.item:not(.last)::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: var(--point-width);
  top: calc(var(--point-width) * 2 + var(--pot-top));
  bottom: calc(0px - var(--pot-top));
  width: 1px;
  box-shadow: 1px 0 0 0 inset @primary-color;
}
</style>