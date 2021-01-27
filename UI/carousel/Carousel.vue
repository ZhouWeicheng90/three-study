<template>
  <div :class="`${axuiPrefix}carousel-box`" :style="{height:height+'px'}">
    <div
      :class="[`${axuiPrefix}carousel-inner`,stopAnimation?`${axuiPrefix}carousel-stop-animation`:'']"
      :style="{width:totalWidth+'px',left:-currentIndex*oneWidth+'px'}"
      ref="containner"
    >
      <slot></slot>
    </div>
    <div
      :class="[`${axuiPrefix}carousel-inner`,stopAnimation?`${axuiPrefix}carousel-stop-animation`:'']"
      :style="{width:totalWidth+'px',left:(len-currentIndex)*oneWidth+'px'}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oneWidth: null,
      height: 0,
      totalWidth: null,
      len: 0,
      currentIndex: 0,

      stopAnimation: false,
      inAnimation: false
    };
  },
  methods: {
    transfer(dest) {
      return new Promise(resolve => {
        if (this.inAnimation) {
          requestAnimationFrame(() => {
            resolve(this.transfer(dest));
          });
          return;
        }
        if (!this.stopAnimation) {
          this.stopAnimation = true;
          requestAnimationFrame(() => {
            resolve(this.transfer(dest));
          });
          return;
        }
        if (this.currentIndex !== dest) {
          this.currentIndex = dest;
          // 从上个条件过来，到这里currentIndex虽然改变了，但由于只是在raf中，没有进入vue的tick，所以vdom及dom没有变
          // 而stopAnimation在上个raf中改变，并在上个tick中影响了dom
          requestAnimationFrame(() => {
            resolve(this.transfer(dest));
          });
          return;
        }
        this.stopAnimation = false;
        requestAnimationFrame(resolve);
      });
    },
    next() {
      if (this.currentIndex === this.len) {
        this.transfer(0).then(() => {
          this.currentIndex++;
        });
      } else {
        this.currentIndex++;
      }
    },
    previous() {
      if (this.currentIndex === 0) {
        this.transfer(this.len).then(() => {
          this.currentIndex--;
        });
      } else {
        this.currentIndex--;
      }
    }
  },
  mounted() {
    this.oneWidth = this.$el.clientWidth;

    /**@type {HTMLDivElement} */
    let div = this.$refs.containner;
    this.len = div.children.length;
    this.height = div.offsetHeight;

    this.totalWidth = this.len * this.oneWidth;

    div.addEventListener("transitionrun", () => {
      this.inAnimation = true;
    });
    div.addEventListener("transitionend", () => {
      this.inAnimation = false;
    });
  }
};
</script>

<style lang="less">
@import "../theme.less";
.@{ui-prefix}carousel-box {
  position: relative;
  overflow: hidden;
}

.@{ui-prefix}carousel-inner {
  position: absolute;
  top: 0;
  transition: left @transition-time;

  display: flex;
}
.@{ui-prefix}carousel-stop-animation {
  transition: none;
}
.@{ui-prefix}carousel-inner > * {
  flex: 1;
}
</style>