<template>
  <div class="page">
    <ResumeBaseInfo style="margin-bottom: 2em;" />

    <Card title="教育背景">
      <div>武汉轻工业大学（2008.09-2012.06） 本科 软件工程专业</div>
      <TimeLineItem>在校期间参加数学建模培训等活动，并参加“国信蓝点杯”——软件专业人才设计与开发大赛，湖北预选赛成绩优异，全国总决赛三等奖。</TimeLineItem>
      <TimeLineItem finished>英语四级证书（工作中经常看英文文档，应该有提升）</TimeLineItem>
    </Card>
    <Card title="工作经历">
      <div>
        2015年：
        前端旧时代的技术，Strutsc框架，jQuery为主，加上初入职场，能够胜任工作就是优秀吧，额~。
      </div>
      <div>
        2016年3月-2018年6月 华业跨域
        <TimeLineItem>
          angularjs（1.x），angular2，angular4，部分项目会使用对应版本的ionic 打包安卓应用和ios应用。
          angular从1到2+时，是框架技术升级的主要推动者之一。
        </TimeLineItem>
        <TimeLineItem>
          公司中css3的尝鲜派，全面的学习并实践es6，css3，并进行了css3部分样式和布局的使用的内部分享。
          代表项目：人人通项目，网页版的聊天功能。
        </TimeLineItem>
        <TimeLineItem>开始学习设计模式和设计原则，并在开发中运用和领悟。 代表项目：设计出面包屑的公共模块，被多个项目使用。</TimeLineItem>
        <TimeLineItem>
          部分后端及运维工作， 涉及技术有：java, spring boot，spring cache + redis, rabbit mq, mongodb ，dubbo，Linux等。
          代表经历：优化错题系统——需要深入学习mogodb和系统的架构。
          这段经历对我后来的前端工作也很重要， 它让我对整个网络系统有一个更全面的认识，特别是海量并发的系统架构； 对mogodb的深入学习，为我后来快速学习indexDB打下基础。
        </TimeLineItem>
        <TimeLineItem finished>
          <!-- 敏捷开发 -->
          敏捷就是快节奏，这绝对是误解。开发者深入参与到设计中，了解真实的用户需求，能够有话语权，真正起建设作用，这些才是本质，不过做好了这些，
        </TimeLineItem>
      </div>
      <div>
        <div>2018年7月-2019年8月 科大讯飞</div>
        开始接触vue，并不断深入学习直到现在；开始学习webpack，nodejs等。
        <TimeLineItem>
          所在部门的项目代码普遍很糟，作为一个小兵，竭尽所能改变现状。
          代表1：移动办案app的深度重构，解决了因代码混乱引起的诸多交互bug，和性能问题。
          代表2：进行了“如何写出优雅代码”的分享，很多同事反馈“收获很多！”；此后 2次拿出自己的模块代码，进行分享讲解设计原则。
        </TimeLineItem>
        <TimeLineItem finished>
          移动办案app，语音示证模块。这是一个数据量大的，cpu密集型的功能。
          涉及：Audio context，indexDB，vue。
        </TimeLineItem>
      </div>
      <div>
        <div>2019年10日至今 蓝色冰川</div>
        <div></div>
        <TimeLineItem>内容管理系统</TimeLineItem>
        <TimeLineItem finished>公共项目</TimeLineItem>
      </div>
    </Card>
    <Card title="自我评价">可含，兴趣爱好，技能特长</Card>
  </div>
</template>

<script>
import ResumeBaseInfo from "./components/ResumeBaseInfo";

export default {
  components: {

    ResumeBaseInfo,

  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../UI/theme.less";
</style>