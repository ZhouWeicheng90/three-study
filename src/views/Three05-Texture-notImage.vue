<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { init } from "../assets/service.js";
const textureCube = new THREE.CubeTextureLoader()
  .setPath("/person/")
  .load([
    "posx.jpg",
    "negx.jpg",
    "posy.jpg",
    "negy.jpg",
    "posz.jpg",
    "negz.jpg"
  ]);
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
    addPerson(scene) {
      let gltfLoader = new GLTFLoader();
      let textureLoader = new THREE.TextureLoader();

      let bumpMap = textureLoader.load("/person/bumpMap.jpg");
      bumpMap.encoding = THREE.sRGBEncoding;
      let normalMap = textureLoader.load("/person/normalMap.jpg");
      normalMap.encoding = THREE.sRGBEncoding;
      let specularMap = textureLoader.load("/person/specularMap.jpg");
      specularMap.encoding = THREE.sRGBEncoding;
      let map = textureLoader.load("/person/map.jpg");
      map.encoding = THREE.sRGBEncoding;

      let material = new THREE.MeshPhongMaterial({
        // bumpMap,
        // bumpScale: 12,
        normalScale: new THREE.Vector2(0.8, 0.8),
        normalMap,
        map,
        color: 0x888888,
        specularMap,
        specular: 0x222222,
        shininess: 25,
        envMap: textureCube
      });
      gltfLoader.load("/person/person.glb", res => {
        let geometry = res.scene.children[0].geometry;
        let mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        let scale = 70;
        mesh.scale.set(scale, scale, scale);
        mesh.rotateX(-Math.PI / 6);
        mesh.rotateZ(Math.PI / 6);
        this.rafFns.push(() => {
          mesh.rotateY(0.005);
        });
        scene.add(mesh);
      });
    }
  },
  mounted() {
    const { scene, render, renderFn } = init(this.$refs.cvs, null, false, true);
    render.shadowMap.enabled = true;
    render.outputEncoding = THREE.sRGBEncoding;

    /* -------------------------------------------------------------------------------------------------------------- */
    scene.add(new THREE.HemisphereLight(0x443333, 0x111122));

    const light = new THREE.SpotLight(0xffffbb, 2);
    light.position.set(0.5, 0, 1);
    light.position.multiplyScalar(700);
    scene.add(light);
    // light.target.position.set(0, -200, 0); // 没有用！！！
    // scene.add(light.target); // 必须这样！
    // light.angle = Math.PI;

    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 200;
    light.shadow.camera.far = 1500;
    light.shadow.camera.fov = 40;

    this.addPerson(scene);

    /* -------------------------------------------------------------------------------------------------------------- */
    console.log(textureCube, "===");

    let fn = () => {
      if (!this.componentActive) {
        return;
      }
      scene.background = textureCube;
      renderFn();
      this.rafFns.forEach(fn => {
        fn();
      });
      requestAnimationFrame(fn);
    };
    fn();
  }
};
</script>
