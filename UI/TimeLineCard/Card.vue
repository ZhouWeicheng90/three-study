<template>
  <div>
    <dt :class="`${axuiPrefix}card-header`">
      <div :class="`${axuiPrefix}card-title-tag`">
        {{title}}
        <Icon
          :class="[`${axuiPrefix}card-title-icon`]"
          :style="{transform: `rotate(${isFolded?-90:0}deg)`}"
          type="down"
          @click="changeFold"
        />
      </div>
    </dt>
    <div
      ref="content"
      :class="[`${axuiPrefix}card-content`]"
      :style="{height:isFolded?0:contentHeight+'px'}"
    >
      <dd :class="`${axuiPrefix}card-inner`">
        <slot></slot>
      </dd>
    </div>
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
      isFolded: false,
      contentHeight: ""
    };
  },
  methods: {
    changeFold() {
      this.contentHeight = this.$refs.content.scrollHeight;
      setTimeout(() => {
        this.isFolded = !this.isFolded;
      }, 30);
    }
  }
};
</script>

<style scoped lang="less">
@import "../theme.less";

.@{ui-prefix}card-title-icon,
.@{ui-prefix}card-content {
  transition: all @transition-time;
}

.@{ui-prefix}card-title-icon {
  display: inline-flex;
  vertical-align: middle;
  font-size: 0.75em;
  margin-left: 0.125em;
  margin-bottom: 1px;
  cursor: pointer;
}

.@{ui-prefix}card-content {
  overflow: hidden;
}

.@{ui-prefix}card-inner{
   padding-top: .75em;
   padding-left: 2.5em;
}
// ---------------------------------------
.@{ui-prefix}card-header {
  display: flex;
}

.@{ui-prefix}card-header::after {
  content: "";
  flex: 1;

  margin-top: calc(0.5em);
  height: 0px;
  border-top: 0.1em solid @mute-color;
}

.@{ui-prefix}card-title-tag {
  display: inline-block;
  color: white;
  padding: 0.35em 1em;
  border-radius: 0.125em;
  position: relative;
  z-index: 5;
}

.@{ui-prefix}card-title-tag::before,
.@{ui-prefix}card-title-tag::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: inherit;
}

.@{ui-prefix}card-title-tag::after {
  z-index: -1;
  background: @primary-color;
}
.@{ui-prefix}card-title-tag::before {
  z-index: -2;
  background: @mute-color;

  transform: skew(-30deg);
  transform-origin: bottom right;
  top: 25%;
}
</style>