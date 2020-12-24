<template>
  <div class="page">
    <canvas ref="cvs"></canvas>
    <div class="vol-wrapper">
      <div class="vol-item" v-for="(vol,i) in volumes" :key="i" :style="{height:vol/4+'px',backgroundColor:`rgb(${vol},${vol},${vol})`}"></div>
    </div>
    <div class="opts">
      <div class="anim">
        <label>
          <input type="radio" name="action1" value="Walking" v-model="action1" />Walking
        </label>
        <label>
          <input type="radio" name="action1" value="Running" v-model="action1" />Running
        </label>
        <label>
          <input type="radio" name="action1" value="WalkJump" v-model="action1" />WalkJump
        </label>
        <label>
          <input type="radio" name="action1" value="Jump" v-model="action1" />Jump
        </label>
      </div>
      <div class="anim">
        <label>
          <input type="radio" name="action1" value="Standing" v-model="action1" />Standing
        </label>
        <label>
          <input type="radio" name="action1" value="Sitting" v-model="action1" />Sitting
        </label>
        <label>
          <input type="radio" name="action1" value="ThumbsUp" v-model="action1" />ThumbsUp
        </label>
        <label>
          <input type="radio" name="action1" value="Yes" v-model="action1" />Yes
        </label>
        <label>
          <input type="radio" name="action1" value="No" v-model="action1" />No
        </label>
        <label>
          <input type="radio" name="action1" value="Death" v-model="action1" />Death
        </label>
        <label>
          <input type="radio" name="action1" value="Idle" v-model="action1" />Idle
        </label>
        <label>
          <input type="radio" name="action1" value="Wave" v-model="action1" />Wave
        </label>
        <label>
          <input type="radio" name="action1" value="Dance" v-model="action1" />Dance
        </label>
        <label>
          <input type="radio" name="action1" value="Punch" v-model="action1" />Punch
        </label>
      </div>
      <div class="mtl">
        <label>
          <input type="radio" name="roadCover" value="grass" v-model="roadCover" />grass
        </label>
        <label>
          <input type="radio" name="roadCover" value="dirt" v-model="roadCover" />dirt
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-check
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const audioUrl = "/robot/333.mp3";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 1, 100000);

/**
 * @type {Array<()=>void>}
 */
const rafFns = [];
/**
 * @type {THREE.Object3D}
 */
let robotMesh;
const roadRadius = 500;

/**
 * @returns {Promise<{mesh:THREE.Object3D, animations:{[key:string]:THREE.AnimationClip}, faces:THREE.Object3D[]}>}
 */
function loadRobot() {
  const loader = new GLTFLoader();
  return new Promise(resolve => {
    loader.load("/robot/robot.glb", gltf => {
      let mesh = gltf.scene;
      let faces = [];
      mesh.traverse(node => {
        //  @ts-ignore
        if (node.isMesh) {
          if (node.name.startsWith("Head") || node.name.startsWith("head")) {
            faces.push(node);
          }
          //  @ts-ignore
          node.geometry.computeVertexNormals();
          node.castShadow = true;
        }
      });
      let animationObj = {};
      gltf.animations.forEach(animation => {
        animationObj[animation.name] = animation;
      });
      mesh.name = "robot";
      // @ts-ignore
      resolve({ mesh, animations: animationObj, faces });
    });
  });
}

/**
 * @param {THREE.Object3D} meshObj
 */
async function load3DAudio(meshObj) {
  var listener = new THREE.AudioListener();
  camera.add(listener);
  let audio = new THREE.PositionalAudio(listener);
  meshObj.add(audio);

  let audioBuffer = await new Promise(resolve => {
    new THREE.AudioLoader().load(audioUrl, function(buffer) {
      resolve(buffer);
    });
  });
  audio.duration = audioBuffer.duration;
  audio.setBuffer(audioBuffer);
  audio.setVolume(0.5);
  audio.setRefDistance(70); //参数值越大,声音越大

  rafFns.push(() => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    let isTouch = false;
    for (let i = 0; i < intersects.length && !isTouch; i++) {
      meshObj.traverse(node => {
        if (!isTouch && node === intersects[i].object) {
          isTouch = true;
        }
      });
    }
    if (isTouch && !audio.isPlaying) {
      //   console.log("准备设置播放");
      audio.play();
      meshObj.scale.x *= 1.2;
      meshObj.scale.y *= 1.2;
      meshObj.scale.z *= 1.2;
      setTimeout(() => {
        // console.log("===播放结束,还原==");
        mouse.set(-1, 1);
        meshObj.scale.x /= 1.2;
        meshObj.scale.y /= 1.2;
        meshObj.scale.z /= 1.2;
        audio.stop();
      }, audio.duration * 1000);

      audio.onEnded = () => {};
    }
  });

  return audio;
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-1, 1);
export default {
  data() {
    return {
      componentActive: true,
      volumes: [],
      action1: "Walking", // Walking,Standing,Running,Sitting,Jump,WalkJump,
      roadCover: "grass" // 'grass' dirt
    };
  },
  beforeUnmount() {
    this.componentActive = false;
  },
  methods: {
    init() {
      /**@type {HTMLCanvasElement} */
      // @ts-ignore
      const canvas = this.$refs.cvs;

      // ========= renderer + camera : =========
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const render = new THREE.WebGLRenderer({ canvas: canvas });
      render.setSize(W, H);
      render.shadowMap.enabled = true;

      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      camera.position.set(0, 1200, 900);
      camera.lookAt(scene.position);

      // ========= orbit-controller : =========
      const controller = new OrbitControls(camera, canvas);
      controller.minAzimuthAngle = -Math.PI / 2;
      controller.maxAzimuthAngle = Math.PI / 2;
      controller.maxPolarAngle = Math.PI / 3.5;
      controller.minPolarAngle = 0;

      // ========= mouse: =========
      canvas.onclick = e => {
        mouse.x = (e.offsetX * 2) / W - 1;
        mouse.y = 1 - (e.offsetY * 2) / H;
      };

      // ========= raf: =========
      let _myRenderFn = () => {
        if (!this.componentActive) {
          return;
        }
        rafFns.forEach(fn => {
          fn();
        });
        render.render(scene, camera);
        requestAnimationFrame(_myRenderFn);
      };
      _myRenderFn();
    },
    addEnvironment() {
      scene.position.y = -300;
      // ========= ground : =========
      const groundGroup = new THREE.Group();
      const size = 20000;
      groundGroup.add(new THREE.GridHelper(size, size / 200));
      let ground = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshLambertMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide
        })
      );
      ground.receiveShadow = true;
      ground.rotateX(Math.PI / 2);
      groundGroup.add(ground);
      scene.add(groundGroup);

      // ========= sky + light : =========
      let skyColor = new THREE.Color(0x9998aa);
      scene.fog = new THREE.Fog(skyColor, 2400, 3300);
      scene.add(new THREE.HemisphereLight(skyColor, 0x457365));

      let light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(900, 900, 900);
      light.castShadow = true;
      let shadowSize = 2500;
      light.shadow.camera.left = -shadowSize;
      light.shadow.camera.right = shadowSize;
      light.shadow.camera.top = shadowSize;
      light.shadow.camera.bottom = -shadowSize;
      light.shadow.camera.near = -shadowSize;
      light.shadow.camera.far = shadowSize;
      light.shadow.mapSize.set(2548, 2548);
      scene.add(light);
    },
    addRoad(rodaWidth) {
      const inR = Math.max(roadRadius - rodaWidth / 2, 10);
      const geo = new THREE.RingGeometry(inR, inR + rodaWidth, 20);
      const mtl = new THREE.MeshLambertMaterial({
        color: 0xffffff
        //   wireframe:true
      });
      const mesh = new THREE.Mesh(geo, mtl);
      let loader = new THREE.TextureLoader();
      let textureGrass = loader.load("/robot/grass.png");
      let textureDirt = loader.load("/robot/dirt.png");
      textureGrass.wrapS = textureGrass.wrapT = textureDirt.wrapT = textureDirt.wrapS =
        THREE.RepeatWrapping;
      let x = 30;
      let y = 30;
      textureGrass.repeat.set(x, y);
      textureDirt.repeat.set(x, y);
      this.$watch(
        "roadCover",
        () => {
          if ("dirt" === this.roadCover) {
            mtl.map = textureDirt;
          } else {
            mtl.map = textureGrass;
          }
        },
        { immediate: true }
      );

      mesh.position.y = 1;
      mesh.rotateX(-Math.PI / 2);
      mesh.receiveShadow = true;
      scene.add(mesh);
    },

    async addRobotSpeaker(size) {
      let { mesh, animations, faces } = await loadRobot();
      let audio = await load3DAudio(mesh);

      robotMesh = mesh;
      mesh.scale.set(size, size, size);
      scene.add(mesh);
      mesh.position.x = roadRadius;
      mesh.position.y = 5;

      //   音频可视化：
      let N = 128; //控制音频分析器返回频率数据数量
      let analyser = new THREE.AudioAnalyser(audio, N * 2);

      rafFns.push(() => {          
        this.volumes = Array.from(analyser.getFrequencyData().slice(0, N / 4));        
      });
      //
      this.setAnimations(animations);
      this.setEmotions(faces);
    },
    setEmotions(faces) {
      console.log(faces);
    },

    setAnimations(animations) {
      let clock = new THREE.Clock();
      let mixer = new THREE.AnimationMixer(robotMesh);
      const map = new Map();

      [
        ...["Walking", "Running", "Jump", "WalkJump"],
        "Dance",
        "Idle",
        "Punch"
      ].forEach(key => {
        const action = mixer.clipAction(animations[key]);
        map.set(key, action);
      });

      ["Standing", "Sitting", "ThumbsUp", "Wave", "Death", "Yes", "No"].forEach(
        key => {
          const action = mixer.clipAction(animations[key]);
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          map.set(key, action);
        }
      );

      let speed;
      this.$watch(
        "action1",
        () => {
          for (let action of map.values()) {
            action.stop();
          }
          map.get(this.action1)?.play();
          // ----- Z
          speed =
            {
              Walking: 3.3,
              Running: 6,
              Jump: 0.5,
              WalkJump: 0.5
            }[this.action1] || 0;
        },
        { immediate: true }
      );

      const yAxis = new THREE.Vector3(0, 1, 0);
      rafFns.push(() => {
        let delta = clock.getDelta();
        mixer.update(delta);
        if (speed > 0) {
          robotMesh.translateZ(speed);
          robotMesh.rotateOnAxis(yAxis, -speed / roadRadius);
        }
      });
    }
  },
  mounted() {
    this.init();
    if (!robotMesh) {
      // 说明是首次加载
      this.addEnvironment();
      this.addRoad(300);
      this.addRobotSpeaker(40);
    }
  }
};
</script>
<style scoped>
.page {
  position: relative;
  width: min-content;
  margin: auto;
}
.vol-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  height: 54px;
  width: 200px;
  background: #76549888;
}
.vol-item {
  width: 4px;
  /* background: #765498; */
  margin-right: 2px;
  min-height: 1px;
}
.opts {
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
}
.anim,
.mtl {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.mtl{
    margin-top: 30px;
}
</style>