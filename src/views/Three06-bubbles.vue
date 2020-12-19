<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { init } from "../assets/service.js";
const cubeTexture = new THREE.CubeTextureLoader()
  .setPath("/envs/")
  .load([
    "posx.jpg",
    "negx.jpg",
    "posy.jpg",
    "negy.jpg",
    "posz.jpg",
    "negz.jpg"
  ]);
cubeTexture;

const textureArr = [
  new THREE.TextureLoader().load("/envs/snowflake4.png"),
  new THREE.TextureLoader().load("/envs/snowflake5.png"),
  new THREE.TextureLoader().load("/envs/snowflake1.png"),
  new THREE.TextureLoader().load("/envs/snowflake2.png"),
  new THREE.TextureLoader().load("/envs/snowflake3.png")
];
const scales = [1, 1, 1.5, 2, 2];

function getSprite(W = 300, H = 300, D = 300) {
  let i = Math.floor(5 * Math.random());
  let material = new THREE.SpriteMaterial({
    blending: THREE.AdditiveBlending,
    transparent: true,
    map: textureArr[i]
  });
  let sprite = new THREE.Sprite(material);
  sprite.scale.set(scales[i], scales[i]); // 设置精灵大小用scale

  let k1 = Math.random() - 0.5;
  let k2 = Math.random() - 0.5;
  let k3 = Math.random() - 0.5;
  sprite.position.set(W * k1, H * k2, D * k3);
  return sprite;
}

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
    /**
     * @param {THREE.PerspectiveCamera} camera
     */
    addSprite(scene, camera, num = 2000) {
      let W = 400;
      let H = 200;
      let D = 400;

      let group = new THREE.Group();
      for (let i = 0; i < num; i++) {
        group.add(getSprite(W, H, D));
      }
      scene.add(group);
      group.translateY(0.2 * H);
      group.rotateZ(Math.PI / 3);
      group.rotateX(-Math.PI / 6);

      let maxtDisToSee = 200; // 和精灵范围无关，这应该是一个独立的参数
      this.rafFns.push(() => {
        let { x: cx, y: cy, z: cz } = camera.position;
        group.children.forEach((
          /** @type { import('three').Sprite}*/ sprite
        ) => {
          sprite.translateY(-0.1 * (Math.random() - 0.5) - 0.2);
          if (sprite.position.y <= -H * 0.5) {
            sprite.position.setY(H * 0.5);
          }
          let { x, y, z } = sprite.position;
          let dis = Math.sqrt(
            Math.pow(x - cx, 2) + Math.pow(y - cy, 2) + Math.pow(z - cz, 2)
          );
          sprite.material.opacity = 1 - dis / maxtDisToSee;
        });
      });
    },
    addSphere01() {
      let mesh = new THREE.Mesh(
        new THREE.SphereGeometry(10, 30, 30),
        new THREE.MeshBasicMaterial({
          transparent: true,
          color: 0xffffff,
          envMap: cubeTexture
        })
      );
      mesh.name = "sphere";

      let group = new THREE.Group();
      group.add(mesh);

      let kf = new THREE.KeyframeTrack(
        "sphere.position",
        [0, 10],
        [0, 30, -50, 0, 5, -50]
      );
      let clip = new THREE.AnimationClip("animation01", 10, [kf]);

      let mix = new THREE.AnimationMixer(group);
      let action = mix.clipAction(clip).play();
      action.loop = THREE.LoopPingPong;

      let clock = new THREE.Clock();
      this.rafFns.push(() => {
        mix.update(clock.getDelta());
      });

      return group;
    }
  },
  mounted() {
    const { scene, camera, renderFn } = init({
      canvas: this.$refs.cvs,
      // addAxesHelper: true,
      isOrthographicCamera: false
    });
    scene.background = cubeTexture;
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    // /* -------------------------------------------------------------------------------------------------------------- */

    this.addSprite(scene, camera);

    scene.add(this.addSphere01());

    /* -------------------------------------------------------------------------------------------------------------- */
    let _myRenderFn = () => {
      if (!this.componentActive) {
        return;
      }
      this.rafFns.forEach(fn => {
        fn();
      });
      // scene.rotateY(0.005);
      renderFn();
      requestAnimationFrame(_myRenderFn);
    };
    _myRenderFn();
  }
};
</script>
