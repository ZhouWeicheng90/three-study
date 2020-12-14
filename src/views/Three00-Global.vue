<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
// 注意鼠标操作 OrbitControls 这样引入了，注意 jsm ！：
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  methods: {
    /**
     * -x 轴添加一个八面体
     ** 材质（material，包含颜色，贴图，透明度等信息）是一种着色器，材质也包含光照算法
     ** 和形状（geometry，形状和尺寸等信息）
     ** 定义任何模型（mesh）都是先定义材质和形状，然后 new THREE.Mesh(geometry, material)，融合二者产生mesh。
     ** 最后将mesh加入到scene中！
     */
    addOcta(scene) {
      const material = new THREE.MeshLambertMaterial({
        color: 0x862f0a,
        transparent: true,
        opacity: 0.7
      });
      const geometry = new THREE.OctahedronGeometry(50);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      mesh.position.set(-200, 0, 0);
      return mesh;
    },
    /**
     * -z 轴添加一个十二面体
     */
    addDodeca(scene) {
      const material = new THREE.MeshLambertMaterial({
        color: 0x862f0a,
        transparent: true,
        opacity: 0.7
      });
      const geometry = new THREE.DodecahedronGeometry(50);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      mesh.position.set(0, 0, -200);
      return mesh;
    },
    /**
     * 中心处添加一个二十面体
     */
    addIcosa(scene) {

      const material = new THREE.MeshPhysicalMaterial();      
      const geometry = new THREE.IcosahedronGeometry(50);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return mesh;
    },

    /**
     * +x 轴上添加一个半透明的盒子
     ** 材质属性：transparent:true 时，opacity才有效，opacity默认是1，所以即使设置了transparent为true也不是透明的，还需要同时设置opacity！
     */
    addBox(scene) {
      const geometry = new THREE.BoxGeometry(100, 50, 60);
      const material = new THREE.MeshLambertMaterial({
        color: 0x862f0a,
        transparent: true,
        opacity: 0.7
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(150, 0, 0);
      scene.add(mesh);
      return mesh;
    },
    /**
     * +z 轴上添加一个高亮的球。注意，这里构建材质的方式变了。
     ** MeshBasicMaterial 与光照无反应，基础网格材质。
     ** MeshLambertMaterial 与光照有反应，实现漫反射进行渲染。
     ** MeshPhongMaterial 既有漫反射，又有镜面反射，这里模拟镜面反射实现高光【定义高亮（所有光反射可概括为：漫反射，镜面反射。高亮就是镜面反射的主要体现）】
     ** PBR物理材质，如 MeshStandardMaterial 相比较高光Phong材质可以更好的模拟金属、玻璃等效果。。
     ** 高光关键参数：specular 高光颜色,会与光照颜色分量相乘，shininess 定义高光的强度的系数
     */
    addSphere(scene) {
      const geometry = new THREE.SphereGeometry(60, 40, 50);
      const material = new THREE.MeshPhongMaterial({
        color: 0x443289,
        specular: 0x4488ee,
        shininess: 16
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      mesh.position.set(0, 0, 200);
      return mesh;
    },
    /**
     * -x -z 区域添加一个 网格线绘制的 圆柱体
     ** 圆柱体前三个参数很好理解，后面的参数和geo绘制有关，先不详细说明！
     ** 材质属性： wireframe设为true	将几何图形渲染为线框 wire:电线
     */
    addCylinder(scene) {
      const geometry = new THREE.CylinderGeometry(60, 40, 100, 25);
      const material = new THREE.MeshLambertMaterial({
        color: 0xa09711,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-100, 0, -130);
      mesh.rotateY(0.7);
      scene.add(mesh);
      return mesh;
    },
    /**
     * 添加光源（定义光源很简单：定义环境光，然后加入scene即可）
     ** 光照模型算法都进行了封装，不需要你了解计算机图形学。如果没有光源（不调用该方法），所有网格模型都是“黑乎乎”。
     ** SpotLight	 聚光源
     ** DirectionalLight  平行光，如太阳光
     ** PointLight: 点光源不能放在实体里面，否则没有任何效果（被包裹着的点光源，自然无法照到外面）。定义点光源需要定义点的位置
     ** AmbientLight: 仅仅使用环境光的，你会发现整个立方体没有任何棱角感。
     ** 环境光只是设置整个空间的明暗效果，如果需要立方体渲染要想有立体效果，需要使用具有方向性的点光源、平行光源 或聚光源。
     */
    addLight(scene) {
      const point = new THREE.PointLight(0xffffff);
      point.position.set(0, 200, 0);
      scene.add(point);

      const ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);
    },
    /**
     * 创建场景 并返回。
     ** 一个场景（scene）包含了很多mesh（由材质和形状构成）和光照
     ** 三个顶层对象：场景，相机，渲染器
     ** camera 位置，视线方向，投影方式（perspective投影，orthographic投影）
     ** 渲染器 canvasDom + scene + camera 渲染出结果
     */
    initScene() {
      const scene = new THREE.Scene();
      this.addLight(scene);
      this.addBox(scene);
      this.addSphere(scene);
      this.addCylinder(scene);
      this.addOcta(scene);
      this.addDodeca(scene);
      this.addIcosa(scene);
      return scene;
    }
  },
  mounted() {
    const scene = this.initScene();
    /* -------------------------------------------定义相机 和 render：------------------------------------------------------------------------ */
    const canvasW = this.$refs.cvs.clientWidth;
    const canvasH = this.$refs.cvs.clientHeight;
    // console.log(canvasW,canvasH)

    const camera = new THREE.OrthographicCamera(
      -canvasW / 2,
      canvasW / 2,
      canvasH / 2,
      -canvasH / 2,
      1,
      1000
    ); // 正射投影 的摄像机！
    camera.position.set(200, 300, 200);
    camera.lookAt(scene.position);

    // 使用页面的canvas：
    const render = new THREE.WebGLRenderer({ canvas: this.$refs.cvs });
    render.setSize(canvasW, canvasH); // 这个很重要，保证render的size就是canvas的size，让渲染不变形，分辨率不降低。
    render.setClearColor(0xb9d3ff, 1);

    // //  或者，动态创建canvas 然后放到html中：
    // const render = new THREE.WebGLRenderer();
    // render.setSize(1000, 1000);  //
    // render.setClearColor(0xb9d3ff, 1);
    // document.body.appendChild(render.domElement);

    /* --------------------------------------------定义绘制实现动画：----------------------------------------------------------------------- */

    // // 一次绘制：
    // render.render(scene, camera); // 前面创建好了场景，摆放好了相机，这里就是一声‘咔’，拍摄出了一张照片。

    // 将上面的一次绘制改造成匀速旋转的绘制：
    let t0 = Date.now();
    function customRender() {
      const t1 = Date.now();
      const t = t1 - t0;
      t0 = t1;
      render.render(scene, camera);
      // 这里旋转场景，（相机可以旋转，mesh也可以旋转，mesh的选择是围绕mesh的中心）
      scene.rotateY(0.0001 * t);
      // 这里借助了时间来实现匀速旋转，因为两次raf时间间隔不一定相同！（还有离开页面raf暂停的）
      window.requestAnimationFrame(customRender);
    }
    customRender();

    /* -------------------------------------添加鼠标动作：-------------------------------------------------------------- */
    const controls = new OrbitControls(camera, this.$refs.cvs); // 自动检测鼠标键盘的变化，并根据变化更新传入的相机对象的参数，
    // OrbitControls 支持鼠标左中右键操作和键盘方向键操作
    // 拖动鼠标左键，浏览器会检测到鼠标事件，把鼠标平移的距离按照一定算法转化为相机的的旋转角度
    // 拖动右键：平移
    // 中间滚动：缩放
    console.log(controls);
    // controls.addEventListener("change", customRender);  // 一旦change，就重新渲染
    // 注意，上面一句要去掉，不要同时使用 change 和 requestAnimationFrame，没有这个必要。（相机参数改了，下个raf自动渲染，没有必要监听change）      
    
  }
};
</script>
<style scoped>

</style>
