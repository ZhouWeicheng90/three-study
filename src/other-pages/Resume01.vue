<template>
  <div class="page">
    <div class="resume-wrapper">
      <img class="avatar" src="./assets/avatar.jpg" />
      <div class="resume">
        <span class="stressed-name">周维成</span>
        <Icon class="man-icon" type="man"></Icon>
        <span>(1990.10.11)</span>

        <div class="grid-baseinfo">
          <span>工作经验：6年经验</span>
          <div>工作意向：深圳 高级前端</div>

          <!-- 二分 -->

          <div>电话：13246687618</div>
          <!-- 加上复制 -->
          <div>邮箱：1073346590@qq.com</div>
        </div>
      </div>
    </div>

    <dl>
      <dt class="item-title">
        <div class="custom-tag">教育背景</div>
      </dt>
      <dd class="item-content">
        武汉轻工业大学（2008.09-2012.06） 本科 软件工程专业
        数学建模
        国信蓝点杯计算机程序设计大赛，英语水平
      </dd>

      <dt class="item-title">
        <div class="custom-tag">工作经历</div>
      </dt>
      <dd class="item-content">
        <div>
          2015年：
          前端旧时代的技术，Strutsc框架，jQuery为主，加上初入职场，能够胜任工作就是优秀吧，额~。
        </div>
        <div>
          2016年3月-2018年6月
          <div>
            angularjs（1.x），angular2，angular4，部分项目会使用对应版本的ionic 打包安卓应用和ios应用。
            angular从1到2+时，是框架技术升级的主要推动者之一。
          </div>
          <div>
            公司中css3的尝鲜派，全面的学习并实践es6，css3，并进行了css3部分样式和布局的使用的内部分享。
            代表项目：人人通项目，网页版的聊天功能。
          </div>
          <div>开始学习设计模式和设计原则，并在开发中运用和领悟。 代表项目：设计出面包屑的公共模块，被多个项目使用。</div>
          <div>
            部分后端及运维工作， 涉及技术有：java, spring boot，spring cache + redis, rabbit mq, mongodb ，dubbo，Linux等。
            代表经历：优化错题系统——需要深入学习mogodb和系统的架构。
            这段经历对我后来的前端工作也很重要， 它让我对整个网络系统有一个更全面的认识，特别是海量并发的系统架构； 对mogodb的深入学习，为我后来快速学习indexDB打下基础。
          </div>
          <div>
            <!-- 敏捷开发 -->
            敏捷就是快节奏，这绝对是误解。开发者深入参与到设计中，了解真实的用户需求，能够有话语权，真正起建设作用，这些才是本质，不过做好了这些，
          </div>
        </div>
        <div>
          2018年7月-2019年8月
          开始接触vue，并不断深入学习直到现在；开始学习webpack，nodejs等。
          <div>
            所在部门的项目代码普遍很糟，作为一个小兵，竭尽所能改变现状。
            代表1：移动办案app的深度重构，解决了因代码混乱引起的诸多交互bug，和性能问题。
            代表2：进行了“如何写出优雅代码”的分享，很多同事反馈“收获很多！”；此后 2次拿出自己的模块代码，进行分享讲解设计原则。
          </div>
          <div>
            移动办案app，语音示证模块。这是一个数据量大的，cpu密集型的功能。
            涉及：Audio context，indexDB，vue。
          </div>
        </div>
        <div>2019年10日</div>
      </dd>

      <dt class="item-title">
        <div class="custom-tag">自我评价</div>
      </dt>
      <dd class="item-content">可含，兴趣爱好，技能特长</dd>
    </dl>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../UI/theme.less";
@shadow-color: #aaa;

.resume-wrapper {
  display: flex;
  margin-bottom: 2em;
}
/* ---------------------------------- */

.item-title {
  display: flex;
}

.item-title::after {
  content: "";
  flex: 1;
  margin-left: 1.35em;
  margin-top: calc(.625em);
  height: 0px;
  border-top: 0.1em solid @shadow-color;
}

.custom-tag {
  display: inline-block;
  color: white;
  padding: 0.35em 1em;

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
}

.custom-tag::after {
  z-index: -1;
  background: rgba(45, 140, 240, 1);
}
.custom-tag::before {
  z-index: -2;

  background: @shadow-color;
  transform: skew(-30deg) translate(1px,0);
  transform-origin: bottom right;
  top: 25%;
  bottom: 1px;
  left: 20%;
}

.item-content {
  padding: 1em 0 2em 2.5em;
}
/* ---------------------------------- */
.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 2em;
}

.resume {
  padding-left: 2em;
  flex: 1;
}
.stressed-name {
  font-size: 30px;
  color: #000;
  display: inline-block;
}
.man-icon {
  display: inline-block;
  font-size: 1.25em;
  margin: 0 1em;
  color: @primary-color;
  font-weight: bold;
}

.grid-baseinfo {
  display: grid;
  grid-auto-flow: column;
  grid-template: 1fr 1fr / repeat(2, 260px);
  justify-content: space-between;
}

/* ---------------------------------- */
</style>