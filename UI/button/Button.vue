<template>
  <button
    class="btn"
    :class="[`btn-${buttonStyle}-${color}`,`${shape?'btn-'+shape:''}`,long?'long':'']"
  >
    <slot></slot>
  </button>
</template>

<script>
const styles = ["heavy", "light", "dashed", "link"];
const colors = ["default", "info", "primary", "success", "warning", "error"];
const shapes = ["circle", ""]; // ant:round
export default {
  props: {
    buttonStyle: {
      default: "light",
      required: true,
      validator(value) {
        if (styles.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's buttonStyle must be one of [${styles.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    color: {
      default: "default",
      required: true,
      validator(value) {
        if (colors.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's color must be one of [${colors.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    shape: {
      default: "",
      required: false,
      validator(value) {
        if (shapes.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's shape must be one of [${shapes.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    long: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="less">
@import "./button.less";

.btn.long {
  width: 100%;
}
</style>