<template>
  <div class="resume-wrapper">
    <img class="avatar" src="../assets/avatar.jpg" />
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
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "@/../UI/theme.less";
.resume-wrapper {
  display: flex;
 
}
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
</style>