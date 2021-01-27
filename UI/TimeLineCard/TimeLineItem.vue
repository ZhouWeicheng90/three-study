<template>
  <div :class="[`${axuiPrefix}time-line${finished?'-last':''}`]">
    <div>
      <slot></slot>
    </div>
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
    return {};
  }
};
</script>

<style scoped lang="less">
@import "../theme.less";

.@{ui-prefix}time-line,
.@{ui-prefix}time-line-last {
  display: flex;  
  position: relative;
}
.@{ui-prefix}time-line{
  padding-bottom: .75em;
}

.@{ui-prefix}time-line::before,
.@{ui-prefix}time-line-last::before {
  content: "";
  width: @time-line-point-width;
  height: @time-line-point-width;
  border-radius: 50%;
  border: calc(@time-line-point-width / 2) solid transparent;
  background: @primary-color;
  background-clip: content-box;
  box-shadow: 0 0 0 calc(@time-line-point-width / 4)
    lighten(@primary-color, @hover-lighten);
  flex: 0 0 auto;

  margin-top: calc(0.75em - @time-line-point-width);
  margin-right: 0.75em;
}
.@{ui-prefix}time-line::after {
  content: "";
  position: absolute;
  left: @time-line-point-width;
  top: calc(@time-line-point-width * 1.25 + 0.75em);
  bottom: calc(@time-line-point-width*.75 - 0.75em);
  width: 1px;
  box-shadow: 1px 0 0 0 inset @primary-color;
}


</style>