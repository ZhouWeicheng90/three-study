<template>
  <div class="grid">
    <div v-for="i in n" :key="i" :style="styleObj(i)">
      <span>{{i}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 12
    };
  },
  methods: {
    styleObj(i) {
      i;
      return {
        backgroundColor: `rgb(${Math.random() * 255},${Math.random() *
          255},${Math.random() * 255})`,
        gridArea: "n" + i
      };
    }
  }
};
/**
 * grid-template-areas（父） 和 grid-area（子） 配套 :
 *      grid-template-areas:     "n1 n1 n2 n3 n4"    "n5 n6 n7 n7 n8"    "n9 n10 n11 n12 n12"; 
 *      （子元素的分布：相同名称的必须相连并组成矩形，否则样式将混乱）
 *      grid-area: 'n'+i     // 子元素的每个grid-area值都不相同
 *      grid-area: 1 / col4-start / last-line / 6       // 可以理解成矩形的坐上角和右下角（row-start / col-start / row-end / col-end）
 * 
 * 
 * grid-template-columns + grid-template-rows
 * 注意：线的概念（1第一条线，-1最后一条线，线的重命名；即使重命名了数字依然有效，每条线可以有多个命名，不同线可以有相同命名）
 * 可以使用repeat函数!  支持固定单位，30px ,1fr, 30%
 * minmax(500px,800px) 表示最小500px，最大800px
 * fit-content 函数 ？？
 * 
 * 
 * grid-column-start + grid-column-end 合写 grid-column
 * grid-row-start + grid-row-end 合写 grid-row
 *      grid-column-start: col-start 2;   // 表示第二个名称为col-start的线
 *      grid-column-start: 2;
 *      grid-row-start: row1-start;
 *      grid-row-end: span 2;         // 这里的span是关键字，表示跨越2条线（span跨越只用于end）
 *      grid-column: 3 / span 2;
 *      grid-row: third-line / 4;
 * 更简单的写法 grid-area  
 *
 * grid-row-gap grid-column-gap 或 row-gap column-gap  合写grip-gap 或 gap    跨行列的情况 丝毫不影响美观
 *      合写两个值分别是行和列
 * 
 * *****************************************************************************************************************
 * 单元格内部的内容相对于单元格：
 * align-items: start|end|center|stretch  类似于flex，影响每个item的上下位置
 * justify-items:  start|end|center|stretch  影响每个item的左右位置
 * 合写 place-items 先align-items后justify-items
 * 应用于item单个的 则是 align-self,justify-self 合写 place-self
 * 
 * 
 * 所有单元格整体 相对于 容器：
 * justify-content: start|end|center|stretch| space-around|space-evenly|space-between
 *      space-between 左右两端没有空白
 *      space-around 左右两端有一半的空白
 *      space-evenly 左右两端相等空白
 * align-content: start|end|center|stretch| space-around|space-evenly|space-between   一样，不过是上下了
 * 合写 place-content 先align-content后justify-content
 * 
 * ****************************************************************************************************************
 * 自动生成的网格轨道，隐式轨道  grid-auto-rows  grid-auto-columns
 *      grid-auto-columns: 60px;  // 写在父元素中，注意什么叫隐式！
 * 
 * grid-auto-flow: row | column | row dense | column dense    
 *      元素排列顺序，类似于flex中的flex-direction，dense稠密的意思，表示对于较小item尝试填充到较早出现的空白中
 * 
 * grid-template
 * 用于定义 grid-template-rows ，grid-template-columns ，grid-template-areas 简写属性
 *      grid-template:  [row1-start] "header header header" 25px [row1-end]
                        [row2-start] "footer footer footer" 25px [row2-end]
                         / auto 50px auto;            
                         // 定义了2行 3列，行与列中间用/分割。定义行时同时定义了先的名称，注意中间的线有两个名称 row1-end和row2-start，并同时指明了area。

 *
 * grid 
 * 是一个更高合并度的属性，建议分开写吧！
 * 除了上面三个，还合并了 grid-auto-rows, grid-auto-columns, 和 grid-auto-flow
 * 如果 auto-flow 关键字位于斜杠的左侧，则会将grid-auto-flow 设置为 row （可以同时设置dense），同时  /左侧可设置 grid-auto-rows
 * 如果 auto-flow 关键字位于斜杠的右侧，则会将 grid-auto-flow 设置为 column，同时  /右侧可设置 grid-auto-rows
 *      grid: 100px 300px / 3fr 1fr;
 *      grid: auto-flow / 200px 1fr;
 *      grid: auto-flow dense 100px / 1fr 2fr;
 * 
 * ******************************************************************************************************************
 * 技巧示例：
 * grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));   // 均匀分布，自动填充的列，列宽至少150px
 * 
 * grid实现表格线：
 * 设置gap为1，每个格子设置内部1px的阴影（或伪元素1px的边框，刚好紧贴每个格子），然后让格子margin -1px；
 * 最边缘的上下左右的线，可以用容器的border覆盖，或用容器的padding显示；
 * 非相连十字线可以用border-radius技巧
 * 
 * 
 */
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-template-areas: "n1 n1 n2 n3 n4" "n9 n6 n5 n7 n8" "n9 n10 n11 n12 n12";
  /* column-gap: 3px; */
  /* row-gap: 3px; */
  /* grid-column-gap: 3px; */
  /* grid-row-gap: 3px; */
  /* gap: 3px 9px; */
  grid-gap: 3px;

  /* align-items: stretch;
  justify-items: stretch; */
  place-items: stretch stretch;
  /* justify-content: center; */
  /* align-content: stretch; */
  place-content: center center;


  
  margin: auto;
  height: 600px;
}
.grid > div {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>