<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
        shininess: 25
      });
      gltfLoader.load("/person/person.glb", res => {
        let geometry = res.scene.children[0].geometry;
        let mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        let scale = 70;
        mesh.scale.set(scale, scale, scale);
        // mesh.rotateX(-Math.PI / 6);
        // mesh.rotateZ(Math.PI / 6);
        this.rafFns.push(() => {
          mesh.rotateY(0.005);
        });
        scene.add(mesh);
      });
    },
    addLight(scene) {
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
    },
    addTexture(scene) {
      function generate(width = 32, height = 32) {
        const size = width * height; //像素大小
        const data = new Uint8Array(size * 4); //size*4：像素在缓冲区占用空间
        for (let i = 0; i < size * 4; i += 4) {
          // 随机设置RGB分量的值
          data[i] = 255 * Math.random();
          data[i + 1] = 255 * Math.random();
          data[i + 2] = 255 * Math.random();
          // 设置透明度分量A
          data[i + 3] = 255 * 0.5;
        }
        const res = new THREE.DataTexture(
          data,
          width,
          height,
          THREE.RGBAFormat
        );
        res.needsUpdate = true;
        return res;
      }
      let texture = generate();

      var material = new THREE.MeshPhongMaterial({
        map: texture, // 设置纹理贴图
        transparent: true //允许透明设置
      });
      let mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), material);

      mesh.position.set(-200, 200, 200);

      scene.add(mesh);
    }
  },
  mounted() {
    const { scene, camera, render, renderFn } = init({
      canvas: this.$refs.cvs,
      isOrthographicCamera: false
    });
    camera.position.set(500, 500, 500);
    camera.lookAt(scene.position);
    render.shadowMap.enabled = true;
    render.outputEncoding = THREE.sRGBEncoding;

    /* -------------------------------------------------------------------------------------------------------------- */

    this.addPerson(scene);
    this.addLight(scene);
    this.addTexture(scene);

    /* -------------------------------------------------------------------------------------------------------------- */

    let fn = () => {
      if (!this.componentActive) {
        return;
      }
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
