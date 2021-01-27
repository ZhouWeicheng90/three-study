<template>
  <Resume01 v-show="false" />

  <div class="page">
    <div v-show="false">
      <TestButton />
    </div>
    <TestOthers v-show="false" />

    <Carousel ref="carosel">
      <div class="infoCard">这是标题一的内容</div>
      <div class="infoCard">标题二的内容</div>
      <div class="infoCard">标题三：内容</div>
    </Carousel>
    <Panel class="svg" :bladeTexts="texts" @activeChange="afterChange" />

    <!-- <div>技术：js，css，html，vue……</div>
    <div>能力：擅长设计，让复杂系统更易维护；有多次重构的经验。</div>-->
  </div>
</template>

<script>
/**
 * 3、主题定制化（需要去掉less的lighten等编译函数）全面采用css变量，新增两种主题的切换功能
 * 6、slider文案 + 自评文案，项目开头文案，结束文案
 * 7、小屏幕样式 + 打印样式
 * 8、vite + vue3 构建项目
 */
import Panel from "./components/PanelFan";
import Resume01 from "./Resume01";
import "./components/background3d";
export default {
  components: { Resume01, Panel },
  data() {
    return {
      texts: ["标题一", "标题二", "标题三"]
    };
  },
  methods: {
    afterChange(activeInd, direc) {
      if (direc === -1) {
        // 向左滑动调用next
        this.$refs.carosel.next();
      }
      if (1 === direc) {
        // 向右滑：调用previous
        this.$refs.carosel.previous();
      }
      console.log(`你点击了：` + this.texts[activeInd], direc);
    }
  }
};
</script>
<style scoped>
.svg {
  display: block;
  width: 200px;
  height: 200px;
  margin: auto;
}
.infoCard {
  height: 100px;
  box-shadow: 0 0 18px -7px rgb(124, 87, 87) inset;
  text-align: center;
  line-height: 100px;
}
</style>