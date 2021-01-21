<template>
  <div class="page">
    <div class="flex">
      <img src="./assets/avatar.jpg" class="ellipse avatar" />
      <div class="resume">
        <div>
          <span class="name">周维成</span>
          <span>近6年经验</span>
        </div>
        <div>工作意向：深圳 高级前端</div>
        <div>联系方式：13246687618 1073346590@qq.com</div>
      </div>
      <Panel class="svg" :bladeTexts="texts" @activeChange="afterChange" />
    </div>
    <div>
      武汉轻工业大学（2008.09-2012.06）软件工程专业
      国信蓝点杯计算机程序设计大赛，英语水平
    </div>
    <div>
      6年经验（擅长技术）
      2015年：jsp，Struts为主的。
      2016年3月-2018年6月
      2018年7月-2019年8月
      2019年10日
    </div>
    <div>
      兴趣爱好
      自我评价
      技能特长
    </div>
  </div>
</template>

<script>
import Panel from "./PanelFan";
export default {
  components: { Panel },
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
.name {
  font-size: 32px;
  color: #000;
  display: inline-block;
  margin-right: 1em;
}
.svg {
  width: 200px;
  height: 200px;
}
</style>