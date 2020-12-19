<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { init } from "../assets/service.js";
export default {
  data() {
    return {
      componentActive: true,
      rafFns: []
    };
  },
  beforeUnmount() {
    this.componentActive = false;
  },
  methods: {
    animation() {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(100, 100, 100),
        new THREE.MeshLambertMaterial({
          color: 0x456733,
          transparent: true,
          opacity: 0.5
        })
      );
      mesh.name = "box";

      var times = [0, 20];
      var values = [0, 0, 0, 150, 0, 0];
      var posKF = new THREE.KeyframeTrack("box.position", times, values);
      var colorKF = new THREE.KeyframeTrack(
        "box.material.color",
        [10, 20],
        [1, 0, 0, 0, 0, 1]
      );
      var scaleKF = new THREE.KeyframeTrack(
        "box.scale",
        [0, 20],
        [1, 1, 1, 0.8, 0.8, 0.8]
      );
      var duration = 20;
      var clip = new THREE.AnimationClip("animationClip01", duration, [
        posKF,
        colorKF,
        scaleKF
      ]);

      const group = new THREE.Group();
      group.add(mesh);
      var mixer = new THREE.AnimationMixer(group);
      var AnimationAction = mixer.clipAction(clip).play();
      AnimationAction.timeScale = 8;
      AnimationAction.loop = THREE.LoopPingPong;

      var clock = new THREE.Clock();
      this.rafFns.push(() => {
        mixer.update(clock.getDelta());
      });

      return group;
    }
  },
  mounted() {
    const { scene, renderFn } = init({
      canvas: this.$refs.cvs,
      clearColor: 0xb9d3ff,
      addAxesHelper: true
    });
    scene.rotateY(Math.PI / 4);
    scene.rotateX(-Math.PI / 4);
    /* -------------------------------------------------------------------------------------------------------------- */
    scene.add(this.animation());

    // var geometry = new THREE.CylinderBufferGeometry(5, 10, 120, 50, 300);
    var geometry = new THREE.CylinderGeometry(5, 10, 120, 50, 300);
    geometry.translate(0, 60, 0); //平移后，y分量范围[0,120]

    // geometry.attributes.position.forEach(({ y }) => {
    geometry.vertices.forEach(({ y }) => {
      let skinIndice, skinWeight;
      if (y <= 60) {
        skinIndice = new THREE.Vector4(0, 0, 0, 0);
        skinWeight = new THREE.Vector4(1 - y / 60, 0, 0, 0);
      } else if (y > 60 && y <= 100) {
        skinIndice = new THREE.Vector4(1, 0, 0, 0);
        skinWeight = new THREE.Vector4(1 - (y - 60) / 40, 0, 0, 0);
      } else if (y > 100 && y <= 120) {
        skinIndice = new THREE.Vector4(2, 0, 0, 0);
        skinWeight = new THREE.Vector4(1 - (y - 100) / 20, 0, 0, 0);
      }
      geometry.skinIndices.push(skinIndice);
      geometry.skinWeights.push(skinWeight);
    });

    var material = new THREE.MeshPhongMaterial({
      skinning: true //允许蒙皮动画
      // wireframe:true,
    });
    // 创建骨骼网格模型
    var SkinnedMesh = new THREE.SkinnedMesh(geometry, material);
    SkinnedMesh.position.set(50, 120, 50); //设置网格模型位置
    SkinnedMesh.rotateX(Math.PI); //旋转网格模型
    scene.add(SkinnedMesh); //网格模型添加到场景中

    var Bone1 = new THREE.Bone(); //关节1，用来作为根关节
    var Bone2 = new THREE.Bone(); //关节2
    var Bone3 = new THREE.Bone(); //关节3
    // 设置关节父子关系   多个骨头关节构成一个树结构
    Bone1.add(Bone2);
    Bone2.add(Bone3);
    // 设置关节之间的相对位置
    //根关节Bone1默认位置是(0,0,0)
    Bone2.position.y = 60; //Bone2相对父对象Bone1位置
    Bone3.position.y = 40; //Bone3相对父对象Bone2位置

    // 所有Bone对象插入到Skeleton中，全部设置为.bones属性的元素
    var skeleton = new THREE.Skeleton([Bone1, Bone2, Bone3]); //创建骨骼系统
    // console.log(skeleton.bones);
    // 返回所有关节的世界坐标
    // skeleton.bones.forEach(elem => {
    //   console.log(elem.getWorldPosition(new THREE.Vector3()));
    // });
    //骨骼关联网格模型
    SkinnedMesh.add(Bone1); //根骨头关节添加到网格模型
    SkinnedMesh.bind(skeleton); //网格模型绑定到骨骼系统

    // 转动关节带动骨骼网格模型出现弯曲效果  好像腿弯曲一样
    skeleton.bones[1].rotation.x = 0.5;
    skeleton.bones[2].rotation.x = 0.5;

    /* -------------------------------------------------------------------------------------------------------------- */
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(230, 350, 110);
    scene.add(light);
    let fn = () => {
      if (!this.componentActive) {
        return;
      }
      this.rafFns.forEach(f => {
        f();
      });
      renderFn();
      requestAnimationFrame(fn);
    };
    fn();
  }
};
</script>
