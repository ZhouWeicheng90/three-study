<template>
  <div class="page">
    <ResumeBaseInfo style="margin-bottom:1.5em" />

    <Card title="教育背景" class="m-b-lg">
      <div class="company-header">武汉轻工业大学（2008.09-2012.06） 本科 软件工程专业</div>
      <TimeLineItem class="company-body">
        在校期间参加数学建模培训等活动，并参加
        <strong>“国信蓝点杯”</strong>——软件专业人才设计与开发大赛，湖北预选赛成绩优异，全国总决赛三等奖。
      </TimeLineItem>
      <TimeLineItem finished class="company-body">英语四级，且工作中经常看英文文档。</TimeLineItem>
    </Card>
    <Card title="工作经历" class="m-b-lg">
      <div class="company">
        <div class="company-line">2015年6月-2015年1月 同方鼎欣</div>
        <div class="company-header">前端旧时代的技术，Struts框架，jQuery为主。祖传项目+初入职场，能胜任工作，也算可以吧，额~。</div>
      </div>

      <div class="company">
        <div class="company-line">2016年4月-2018年6月 华业跨域</div>
        <div class="company-header">非常不错的公司，大牛很多。DDD理念架构，敏捷开发……</div>
        <TimeLineItem class="company-body">
          <div>angularjs（1.x）-> angular2 -> angular4；部分项目使用对应版本的ionic打包成安卓app和ios app。</div>
          <div>angular从1到2+时，是框架技术升级的主要推动者之一。</div>
        </TimeLineItem>
        <TimeLineItem class="company-body">
          <div>公司中css3的尝鲜派，全面的学习并实践es6，css3，并进行了css3部分样式和布局的使用的内部分享。</div>
          <div>代表项目：人人通项目，网页版的聊天功能。</div>
        </TimeLineItem>
        <TimeLineItem class="company-body">
          <div>开始学习设计模式和设计原则，并在开发中运用和领悟。</div>
          <div>代表项目：面包屑的公共模块，被多个项目使用。</div>
        </TimeLineItem>
        <TimeLineItem class="company-body">
          <div>部分后端及运维工作， 涉及技术有：spring boot，rabbit mq, mongodb ，dubbo，Linux等。</div>
          <div>代表经历：错题系统优化 —— 需要深入学习mogodb和系统的架构。</div>
          <div>这段经历让我对网站系统有一个更全面的认识，深入mogodb则为我快速掌握indexDB打下基础。</div>
        </TimeLineItem>
        <TimeLineItem finished class="company-body">
          <div>敏捷就是快节奏？这绝对是误解！</div>
          <div>敏捷是深度参与，是创造。快，不过是做好了敏捷自然带来的结果……</div>
        </TimeLineItem>
      </div>

      <div class="company">
        <div class="company-line">2018年7月-2019年8月 科大讯飞</div>
        <div class="company-header">开始接触vue及其全家桶，并不断深入学习直到现在，极少涉及react；开始学习webpack，nodejs等。</div>
        <TimeLineItem class="company-body">
          <div>所在部门的项目代码普遍很糟，作为一个小兵，竭尽所能改变现状。</div>
          <div>
            代表1：移动办案app的
            <b>深度重构</b>，解决了因代码混乱引起的诸多交互bug，和性能问题。
          </div>
          <div>代表2：进行了“如何写出优雅代码”的分享，很多同事反馈“收获很多！”；此后两次拿出自己的模块代码进行分享，讲解设计原则。</div>
        </TimeLineItem>
        <TimeLineItem finished class="company-body">
          <div>移动办案app，语音示证模块。这是一个数据量大的cpu密集型的功能。</div>
          <div>关键技术：Audio context+typedArray，indexDB，ric。</div>
        </TimeLineItem>
      </div>

      <div class="company">
        <div class="company-line">2019年10日至今 蓝色冰川</div>
        <div class="company-header">进一步学习vue，vue3，更深入的探索前端技术，如vite，webGL，three.js，svg，css等。</div>
        <TimeLineItem class="company-body">
          <div>作为前端技术带领者，协助其他人是职责之一，所以几乎所有项目都涉及到了。</div>
          <div>
            为公司搭建了前端公共库，已在众多项目中使用，提供的“上传服务”有效的规避了后端的
            <b>业务入侵</b>。
          </div>
        </TimeLineItem>
        <TimeLineItem finished class="company-body">内容管理系统，这是我主要负责的项目，也是一个很考验能力的项目。详情参看项目介绍。</TimeLineItem>
      </div>
    </Card>
    <Card title="自我评价" class="m-b-lg">可含，兴趣爱好，技能特长</Card>
  </div>
</template>

<script>
import ResumeBaseInfo from "./components/ResumeBaseInfo";

export default {
  components: {
    ResumeBaseInfo
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../UI/theme.less";
.m-b-lg {
  margin-bottom: 1.5em;
}


.company {
  border-radius: 0.5em;
  margin-bottom: 2em;
}
.company:nth-child(2n) {
  // background-color: lemonchiffon;
}
.company-line {
  padding: .25em .5em;
  background-color: rgba(@mute-color, .35);
}
.company-header {
  
  margin-bottom: .5em;
 
}
.company-body {
  font-size: 0.875em;
}
</style>