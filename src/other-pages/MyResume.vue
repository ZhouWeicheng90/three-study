<template>
  <Resume01 />

  <div class="page">
    <TestButton />
    <Panel class="svg" :bladeTexts="texts" @activeChange="afterChange" />
    <div>技术：js，css，html，vue……</div>
    <div>能力：擅长设计，让复杂系统更易维护；有多次重构的经验。</div>
  </div>
</template>

<script>
import Panel from "./PanelFan";
import Resume01 from "./Resume01";
import "./background3d";
export default {
  components: { Resume01, Panel },
  data() {
    return {
      texts: ["标题一", "标题二", "标题三"]
    };
  },
  methods: {
    afterChange(activeInd) {
      console.log(`你点击了：` + this.texts[activeInd]);
    }
  }
};
</script>
<style scoped>
.svg {
  width: 200px;
  height: 200px;
}
</style>