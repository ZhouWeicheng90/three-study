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
      rafFns: [],
      mesh: null,
      /**@type {THREE.Scene} */
      scene: null,
      /**@type {THREE.PerspectiveCamera} */
      camera: null
    };
  },
  beforeUnmount() {
    this.componentActive = false;
  },
  methods: {
    async loadRobot(size = 40) {
      let { mesh, animations, faces } = await new Promise(resolve => {
        loader.load("/robot/robot.glb", gltf => {
          let mesh = gltf.scene;
          let faces = [];
          mesh.traverse(node => {
            if (node.isMesh) {
              if (["Head_2", "Head_3", "Head_4"].includes(node.name)) {
                faces.push(node);
              }
              node.geometry.computeVertexNormals();
              node.castShadow = true;
            }
          });
          resolve({ mesh, animations: gltf.animations, faces });
        });
      });
      let animationObj = {};
      animations.forEach(animation => {
        animationObj[animation.name] = animation;
      });
      console.log(faces, animationObj);

      let clock = new THREE.Clock();
      let mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(animationObj["Running"]).play();
      this.rafFns.push(() => {
        let delta = clock.getDelta();
        mixer.update(delta);
      });
      // -------------------------------------------
      var listener = new THREE.AudioListener();
      let audioBuffer = await new Promise(resolve => {
        new THREE.AudioLoader().load("/robot/333.mp3", function(buffer) {
          resolve(buffer);
        });
      });
      //   console.log(audioBuffer);

      let getAudio = use3d => {
        if (use3d) {
          this.camera.add(listener);
          let a = new THREE.PositionalAudio(listener);
          mesh.add(a);
          return a;
        }
        return new THREE.Audio(listener);
      };
      var audio = getAudio(true);

      audio.setBuffer(audioBuffer);
      audio.setVolume(0.5);
      audio.setLoop(true);
      audio.setRefDistance(100); //参数值越大,声音越大
      audio.play();
      // -------------------------------------------
      let audioView = () => {
        let N = 128; //控制音频分析器返回频率数据数量
        let analyser = new THREE.AudioAnalyser(audio, 2 * N);
        var group = new THREE.Group();
        for (let i = 0; i < N / 2; i++) {
          var box = new THREE.BoxGeometry(10, 100, 10);
          var material = new THREE.MeshPhongMaterial({
            color: 0x0000ff
          });
          var mesh = new THREE.Mesh(box, material);

          mesh.position.set(20 * i - (N / 2) * 10, 0, 0);
          group.add(mesh);
        }
        group.scale.set(0.3, 0.3, 0.3);
        group.position.y = 200;
        this.scene.add(group);

        this.rafFns.push(() => {
          var arr = analyser.getFrequencyData();
          // console.log(arr);
          // 遍历组对象，每个网格子对象设置一个对应的频率数据
          group.children.forEach((elem, index) => {
            elem.scale.y = arr[index] / 80;
            elem.material.color.r = arr[index] / 200;
          });
        });
      };
      audioView();

      // --------------------
      mesh.position.x = 400;
      mesh.scale.set(size, size, size);
      this.scene.add(mesh);
    }
  },
  mounted() {
    const { scene, renderFn, render, camera } = init({
      canvas: this.$refs.cvs
      //   clearColor: 0xb9d3ff,
      //   addAxesHelper: true
    });
    scene.fog = new THREE.Fog(0x87899a, 1000, 1500);
    this.scene = scene;
    this.camera = camera;
    scene.add(new THREE.GridHelper(5000, 60));
    let ground = new THREE.Mesh(
      new THREE.PlaneGeometry(5000, 5000),
      new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
      })
    );
    ground.rotateX(Math.PI / 2);
    render.shadowMap.enabled = true;
    ground.receiveShadow = true;
    scene.add(ground);
    /* -------------------------------------------------------------------------------------------------------------- */
   
    this.loadRobot();

    /* -------------------------------------------------------------------------------------------------------------- */
    let light = new THREE.DirectionalLight(0xffffff, 1.4);
    light.position.set(100, 100, -100);
    light.castShadow = true;

    let shadowSize = 450;
    light.shadow.camera.left = -shadowSize;
    light.shadow.camera.right = shadowSize;
    light.shadow.camera.top = shadowSize;
    light.shadow.camera.bottom = -shadowSize;
    light.shadow.camera.near = -shadowSize;
    light.shadow.camera.far = shadowSize;
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xababab));
    let _myRenderFn = () => {
      if (!this.componentActive) {
        return;
      }
      this.rafFns.forEach(fn => {
        fn();
      });
      renderFn();
      requestAnimationFrame(_myRenderFn);
    };
    _myRenderFn();
  }
};
</script>
