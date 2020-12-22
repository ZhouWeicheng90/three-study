<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { init } from "../assets/service.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();
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
    addGround(scene, yPosition, size) {
      scene.fog = new THREE.Fog(0xa0a0a0, 1000, 1100);
      const ground = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(size, size),
        new THREE.MeshPhongMaterial({
          color: 0x999999,
          depthWrite: false
        })
      );
      ground.position.set(0, yPosition, 0);
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);

      const grid = new THREE.GridHelper(size, 100, 0x000000, 0x000000);
      grid.position.y = yPosition;
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      scene.add(grid);
    },
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
      let clock = new THREE.Clock();
      this.rafFns.push(() => {
        mixer.update(clock.getDelta());
      });
      group.position.y = 50;
      return group;
    },
    simpleSkeleton() {
      return new Promise((resolve, reject) => {
        loader.load(
          "/skeleton/simple.gltf",
          gltf => {
            gltf.scene.scale.set(20, 20, 20);
            gltf.scene.position.y = -90;
            gltf.scene.traverse(function(child) {
              if (child.isSkinnedMesh) {
                child.castShadow = true;
              }
              // if (child.type === "Bone") {
              //   console.log("bone", child.getWorldPosition(new THREE.Vector3()));
              // }
            });
            let mixer = new THREE.AnimationMixer(gltf.scene);
            let action = mixer.clipAction(gltf.animations[0]);
            action.play();
            // action.time = 0.1;
            // action.paused = true;
            let clock = new THREE.Clock();
            this.rafFns.push(() => {
              mixer.update(clock.getDelta());
            });
            resolve(gltf.scene);
          },
          null,
          err => {
            reject(err);
          }
        );
      });
    },
    /**
     * 骨骼动画测试：失败，文档教程过期
     */
    test01(scene) {
      var geometry = new THREE.CylinderBufferGeometry(5, 10, 120, 20, 100);

      let skinIndices = [];
      let skinWeights = [];
      for (let i = 0; i < geometry.index.array.length; i += 3) {
        let skinIndice = [];
        let skinWeight = [];
        let y = geometry.attributes.position.array[geometry.index.array[i + 1]];
        if (y <= 0) {
          skinIndice = 1;
          skinWeight = -y / 60;
        } else if (y > 0 && y <= 40) {
          skinIndice = 2;
          skinWeight = 1 - y / 40;
        } else if (y > 40 && y <= 60) {
          skinIndice = 3;
          skinWeight = 1 - (y - 40) / 20;
        } else {
          console.log(y);
        }
        skinIndices.push(skinIndice, 0, 0, 0);
        skinWeights.push(skinWeight, 0, 0, 0);
        // if (skinWeight > 1 || skinWeight < 0) {
        // console.log(y);
        // }
      }
      geometry.attributes.skinIndices = new THREE.BufferAttribute(
        new Int8Array(skinIndices),
        4
      );
      geometry.attributes.skinWeights = new THREE.BufferAttribute(
        new Float32Array(skinWeights),
        4
      );
      console.log(
        geometry.index.array,
        geometry.attributes.skinIndices,
        geometry.attributes.skinWeights
      );

      var material = new THREE.MeshPhongMaterial({
        wireframe: true,
        morphTargets: true,
        skinning: true // 允许蒙皮动画
      });

      // 创建骨骼网格模型
      var SkinnedMesh = new THREE.SkinnedMesh(geometry, material);

      // SkinnedMesh.position.set(50, 120, 50); // 设置网格模型位置
      SkinnedMesh.rotateX(Math.PI); // 旋转网格模型

      var Bone1 = new THREE.Bone(); //关节1，用来作为根关节
      var Bone2 = new THREE.Bone(); //关节2
      var Bone3 = new THREE.Bone(); //关节3
      // 设置关节父子关系   多个骨头关节构成一个树结构
      Bone1.add(Bone2);
      Bone2.add(Bone3);
      // 设置关节之间的相对位置
      // 根关节Bone1默认位置是(0,0,0)
      Bone1.position.y = -60;
      Bone2.position.y = 60; //Bone2相对父对象Bone1位置
      Bone3.position.y = 40; //Bone3相对父对象Bone2位置

      // 所有Bone对象插入到Skeleton中，全部设置为.bones属性的元素
      var skeleton = new THREE.Skeleton([Bone1, Bone1, Bone2, Bone3]); //创建骨骼系统
      //骨骼关联网格模型
      SkinnedMesh.add(Bone1); //根骨头关节添加到网格模型

      SkinnedMesh.bind(skeleton); //网格模型绑定到骨骼系统

      // 转动关节带动骨骼网格模型出现弯曲效果  好像腿弯曲一样
      // skeleton.bones[1].rotation.x = 0.5;
      // skeleton.bones[2].rotation.x = 0.5;

      // -------------------------------------------------------------------------------------------
      var n = 0;
      var T = 20;
      var step = 0.01;
      this.rafFns.push(() => {
        n += 1;
        if (n < T) {
          // 改变骨关节角度
          skeleton.bones[1].rotation.x -= step;
          skeleton.bones[2].rotation.x += step;
          skeleton.bones[3].rotation.x += 2 * step;
        }
        if (n < 2 * T && n > T) {
          skeleton.bones[1].rotation.x += step;
          skeleton.bones[2].rotation.x -= -step;
          skeleton.bones[3].rotation.x -= -2 * step;
        }
        if (n === 2 * T) {
          n = 0;
        }
      });
      SkinnedMesh.scale.set(2, 2, 2);
      var skeletonHelper = new THREE.SkeletonHelper(SkinnedMesh);
      scene.add(skeletonHelper);
      console.log(SkinnedMesh);
      scene.add(SkinnedMesh); //网格模型添加到场景中
    },
    /**
     * 变形测试：失败，已不支持Geometry，文档教程过期
     */
    test02(scene) {
      var geometry = new THREE.BoxGeometry(50, 50, 50); //立方体几何对象

      // 为geometry提供变形目标的数据
      var box1 = new THREE.BoxBufferGeometry(100, 5, 100); //为变形目标1提供数据
      var box2 = new THREE.BoxBufferGeometry(5, 200, 5); //为变形目标2提供数据
      // 设置变形目标的数据

      geometry.morphTargets[0] = { name: "target1", vertices: box1.vertices };
      geometry.morphTargets[1] = { name: "target2", vertices: box2.vertices };
      var material = new THREE.MeshLambertMaterial({
        morphTargets: true, //允许变形
        color: 0x0000ff
      }); //材质对象
      var mesh = new THREE.Mesh(geometry, material); //网格模型对象
      scene.add(mesh); //网格模型添加到场景中
      console.log(mesh);
      mesh.morphTargetInfluences = [];
      mesh.morphTargetInfluences[0] = 0.5;
      mesh.morphTargetInfluences[1] = 1;
      var Track1 = new THREE.KeyframeTrack(
        ".morphTargetInfluences[0]",
        [0, 10, 20],
        [0, 1, 0]
      );
      // 设置变形目标2对应权重随着时间的变化
      var Track2 = new THREE.KeyframeTrack(
        ".morphTargetInfluences[1]",
        [20, 30, 40],
        [0, 1, 0]
      );
      // 创建一个剪辑clip对象，命名"default"，持续时间40
      var clip = new THREE.AnimationClip("default", 40, [Track1, Track2]);
      var mixer = new THREE.AnimationMixer(mesh); //创建混合器
      var AnimationAction = mixer.clipAction(clip).play(); //返回动画操作对象
      AnimationAction.timeScale = 5; //默认1，可以调节播放速度
      var clock = new THREE.Clock();
      this.rafFns.push(() => {
        mixer.update(clock.getDelta());
      });
    },
    testMorph() {
      return new Promise(resolve => {
        loader.load("/skeleton/morphSphere.gltf", gltf => {
          gltf.scene.traverse(node => {
            if (node.isMesh) {
              node.scale.set(9000, 9000, 9000);
              node.position.x = -150;
              node.castShadow = true;
              resolve(node);

              let clock = new THREE.Clock();
              let sign = 1;

              this.rafFns.push(() => {
                const step = clock.getDelta() * 0.5;
                node.rotation.y += step;

                node.morphTargetInfluences[1] += step * sign;
                if (node.morphTargetInfluences[1] < 0) {
                  node.morphTargetInfluences[1] = 0;
                }
                if (node.morphTargetInfluences[1] > 1) {
                  node.morphTargetInfluences[1] = 1;
                }
                if (
                  node.morphTargetInfluences[1] <= 0 ||
                  node.morphTargetInfluences[1] >= 1
                ) {
                  sign *= -1;
                }
              });
            }
          });
        });
      });
    },
    async addHorse() {
      let { mesh, animation } = await new Promise(resolve => {
        loader.load("/skeleton/horse.glb", gltf => {
          gltf.scene.traverse(obj => {
            if (obj.isMesh) {
              resolve({ mesh: obj, animation: gltf.animations[0] });
            }
          });
        });
      });
      let clock = new THREE.Clock();
      let mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(animation).play();
      this.rafFns.push(() => {
        mixer.update(clock.getDelta());
      });
      mesh.castShadow = true;
      mesh.position.set(0, 0, -100);
      return mesh;
    }
  },
  mounted() {
    const { scene, renderFn, render } = init({
      canvas: this.$refs.cvs,
      addAxesHelper: true
    });
    render.shadowMap.enabled = true;
    /* -------------------------------------------------------------------------------------------------------------- */
    this.addGround(scene, -205, 5000);
    scene.add(this.animation());
    this.simpleSkeleton().then(group => {
      scene.add(group);
    });
    this.testMorph().then(mesh => {
      scene.add(mesh);
    });
    this.addHorse().then(horse => {
      scene.add(horse);
    });
    // this.test01(scene);
    // this.test02(scene)

    /* -------------------------------------------------------------------------------------------------------------- */
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(0, 200, 100);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 300;
    dirLight.shadow.camera.bottom = -300;
    dirLight.shadow.camera.left = -300;
    dirLight.shadow.camera.right = 300;
    dirLight.shadow.camera.near = -600;
    dirLight.shadow.camera.far = 600;
    scene.add(dirLight);

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
