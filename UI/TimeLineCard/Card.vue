<template>
  <div>
    <dt class="item-title">
      <div class="custom-tag">
        {{title}}
        <Icon type="down" class="cardicon" :class="isFolded?'fold':''" @click="isFolded=!isFolded" />
      </div>
    </dt>

    <dd class="item-content" :class="isFolded?'hidecontent':''">
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
  },
  data() {
    return {
      isFolded: false
    };
  }
};
</script>

<style scoped lang="less">
@import "../theme.less";
.cardicon,
.item-content {
  transition: all @transition-time;
}

.cardicon {
  display: inline-flex;
  vertical-align: middle;
  font-size: 0.75em;
  margin-left: 0.125em;
  cursor: pointer;
}
.cardicon.fold {
  transform: rotate(-90deg);
}

.item-content {
  padding: 1em 0 2em 2.5em;
  overflow: hidden;
}
.item-content.hidecontent {
  height: 0;

  padding: 0 0 0 2.5em;
}

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
  background: @primary-color;
}
.custom-tag::before {
  z-index: -2;
  background: @shadow-color;

  transform: skew(-30deg);
  transform-origin: bottom right;
  top: 25%;
}
</style>