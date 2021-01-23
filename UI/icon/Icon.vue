<template>
  <i>
    <svg class="svg">
      <use href="./man.svg#root" v-if="type==='man'" />
    </svg>
  </i>
</template>

<script>
export default {
  props: {
    type: {}
  }
};
</script>

<style scoped>
.svg {
  width: 1em;
  height: 1em;
  line-height: 1em;
  vertical-align: middle;
  stroke: currentColor;
  fill: currentColor;
}
</style>