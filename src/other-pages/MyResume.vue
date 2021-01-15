<template>
  <!-- <Resume01 /> -->
  <div class="page">
    <div class="options">
      <div style="outline:1px solid red;height:2px;" class="bbb"></div>
      <template v-for="clr in colors" :key="clr">
        <Button
          :color="clr"
          :buttonStyle="buttonStyle"
          :disabled="disabled"
          :shape="shape"
          :long="isLong"
        >{{clr}}</Button>
      </template>
    </div>

    <div class="options">
      buttonStyles:
      <Button
        v-for="st in buttonStyles"
        :key="st"
        @click="buttonStyle=st"
        :color="buttonStyle===st?'primary':'default'"
      >{{st}}</Button>
    </div>
    <div class="options">
      <Button @click="disabled=!disabled">
        <span :class="{active:disabled}">disabled</span>/
        <span :class="{active:!disabled}">active</span>
      </Button>
      <Button @click="isLong=!isLong">
        <span :class="{active:isLong}">long</span>/
        <span :class="{active:!isLong}">normal</span>
      </Button>
      <Button @click="shape=(shape?'':'circle')">
        <span :class="{active:shape==='circle'}">circle</span>/
        <span :class="{active:shape!=='circle'}">normal</span>
      </Button>
    </div>

    <Icon></Icon>
  </div>
  <div class="page">
    技术：js，css，html，vue……
    能力：擅长设计，让复杂系统更易维护；有多次重构的经验。
  </div>
</template>

<script>
// import Resume01 from "./Resume01";
export default {
  data() {
    return {
      colors: ["default", "info", "primary", "success", "warning", "error"],
      buttonStyles: ["heavy", "light", "dashed", "link"],
      buttonStyle: "heavy",

      disabled: false,
      isLong:false,
      shape: ""
    };
  }
  // components: { Resume01 }
};
</script>

<style scoped>
.options {
  padding: 0.5em 1em;
}
.options > .btn,.bbb {
  margin: 0.25em;
}

.active {
  color: blue;
}
</style>