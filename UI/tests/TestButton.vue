<template>
  <div class="options">
    <div style="outline:1px solid red;height:2px;" class="bbb"></div>
    <template v-for="clr in colors" :key="clr">
      <Button class="bbb"
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
    <Button class="bbb"
      v-for="st in buttonStyles"
      :key="st"
      @click="buttonStyle=st"
      :color="buttonStyle===st?'primary':'default'"
    >{{st}}</Button>
  </div>
  <div class="options">
    <Button class="bbb" @click="disabled=!disabled">
      <span :class="{active:disabled}">disabled</span>/
      <span :class="{active:!disabled}">active</span>
    </Button>
    <Button class="bbb" @click="isLong=!isLong">
      <span :class="{active:isLong}">long</span>/
      <span :class="{active:!isLong}">normal</span>
    </Button>
    <Button class="bbb" @click="shape=(shape?'':'circle')">
      <span :class="{active:shape==='circle'}">circle</span>/
      <span :class="{active:shape!=='circle'}">normal</span>
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["default", "info", "primary", "success", "warning", "error"],
      buttonStyles: ["heavy", "light", "dashed", "link"],
      buttonStyle: "heavy",

      disabled: false,
      isLong: false,
      shape: ""
    };
  }
};
</script>

<style scoped>
.options {
  padding: 0.5em 1em;
}
.bbb {
  margin: 0.25em;
}

.active {
  color: blue;
}
.ico {
  font-size: 32px;
  color: blue;
}
</style>