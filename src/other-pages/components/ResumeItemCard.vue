<template>
  <div>
    <dt class="item-title">
      <div class="custom-tag">{{title}}</div>
    </dt>
    <dd class="item-content">
      <slot></slot>
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped lang="less">
@shadow-color: #aaa;
.item-title {
  display: flex;
}

.item-title::after {
  content: "";
  flex: 1;

  margin-top: calc(0.5em);
  height: 0px;
  border-top: 0.1em solid @shadow-color;
}

.custom-tag {
  display: inline-block;
  color: white;
  padding: 0.35em 1em;
  border-radius: 0.125em;
  position: relative;
  z-index: 5;
}

.custom-tag::before,
.custom-tag::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: inherit;
}

.custom-tag::after {
  z-index: -1;
  background: rgba(45, 140, 240, 1);
}
.custom-tag::before {
  z-index: -2;
  background: @shadow-color;

  transform: skew(-30deg);
  transform-origin: bottom right;
  top: 25%;
}

.item-content {
  padding: 1em 0 2em 2.5em;
}
</style>