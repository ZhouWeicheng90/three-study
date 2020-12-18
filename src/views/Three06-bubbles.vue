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

const rainMap = new THREE.TextureLoader().load("/envs/rain.png");
function getSprite(W = 300, H = 300, D = 300) {
  let material = new THREE.SpriteMaterial({
    transparent: true,
    map: rainMap
  });
  let sprite = new THREE.Sprite(material);
  sprite.scale.set(2, 2.5); // 设置精灵大小用scale

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
    addSprite(scene, camera, num) {
      let W = 400;
      let H = 200;
      let D = 400;

      let group = new THREE.Group();
      for (let i = 0; i < num; i++) {
        group.add(getSprite(W, H, D));
      }
      scene.add(group);
      // group.translateY(0.4 * H);

      let maxtDisToSee = 200; // 和精灵范围无关，这应该是一个独立的参数
      this.rafFns.push(() => {
        let { x: cx, y: cy, z: cz } = camera.position;
        group.children.forEach((
          /** @type { import('three').Sprite}*/ sprite
        ) => {
          sprite.translateY(-0.4);
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
    }
  },
  mounted() {
    const { scene, camera, renderFn } = init({
      canvas: this.$refs.cvs,
      addAxesHelper: true,
      isOrthographicCamera: false
    });
    scene.background = cubeTexture;
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    // /* -------------------------------------------------------------------------------------------------------------- */
    // const mesh = new THREE.Mesh(
    //   new THREE.BoxGeometry(100, 100, 100),
    //   new THREE.MeshLambertMaterial({
    //     color: 0x456733
    //   })
    // );
    // scene.add(mesh);
    // const light = new THREE.PointLight(0xffffff, 1);
    // light.position.set(230, 350, 110);
    // scene.add(light);
    this.addSprite(scene, camera, 7000);
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
