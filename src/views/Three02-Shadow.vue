<template>
  <canvas ref="cvs"></canvas>
  <label class="btn" @click="useLightMap=!useLightMap">
    使用阴影纹理
    <input type="radio" v-show="useLightMap" checked disabled class="active" />
    <input type="radio" v-show="!useLightMap" disabled class="deactive" />
  </label>
  <div>阴影是 光源、模型（通常是mesh）、材质（这是较小的影响因素）综合作用产生的！</div>
</template>

<script>
import * as THREE from "three";
import { init } from "../assets/service.js";
var texture = new THREE.TextureLoader().load("/imgs/earth2.jpg");
export default {
  data() {
    return {
      componentActive: true,
      useLightMap: false,
      rafFns: []
    };
  },
  beforeUnmount() {
    this.componentActive = false;
  },
  methods: {
    shadowExample() {
      const group = new THREE.Group();

      const box = new THREE.BoxGeometry(40, 100, 40);
      const boxMaterial = new THREE.MeshLambertMaterial({
        color: 0x3e9cd6
      });
      var mesh = new THREE.Mesh(box, boxMaterial);
      group.add(mesh);

      //创建一个平面几何体作为投影面
      let plane;
      let planeMaterial;
      let planeMesh;
      this.rafFns.push(() => {
        let flag = false;
        if (
          this.useLightMap &&
          (!planeMaterial || planeMaterial.lightMap !== texture)
        ) {
          console.log("start light Map");
          flag = true;
          plane = new THREE.PlaneGeometry(300, 200);
          plane.faceVertexUvs[1] = plane.faceVertexUvs[0];
          texture.needsUpdate = true;
          planeMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            lightMap: texture
          });
        } else if (
          !this.useLightMap &&
          (!planeMaterial || planeMaterial.lightMap === texture)
        ) {
          console.log("close Light ==");
          flag = true;

          plane = new THREE.PlaneGeometry(300, 200);
          planeMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff
          });
        }
        if (flag) {
          group.remove(planeMesh);
          planeMesh = new THREE.Mesh(plane, planeMaterial);
          planeMesh.rotateX(-Math.PI / 2);
          planeMesh.position.y = -50;
          planeMesh.scale.x = 2;
          planeMesh.scale.y = 2;
          planeMesh.receiveShadow = true;
          group.add(planeMesh);
        }
      });

      // 添加光：
      let dLight = new THREE.DirectionalLight(0xffffff, 1);
      dLight.position.set(60, 100, 40); // 方向光只需要设置一个点就好了，应为目标点默认就是原点。
      group.add(dLight);

      mesh.castShadow = true;
      mesh.receiveShadow = true;
      dLight.castShadow = true;

      dLight.shadow.camera.near = -2000;
      dLight.shadow.camera.far = 1300;
      dLight.shadow.camera.left = -400;
      dLight.shadow.camera.right = 400;
      dLight.shadow.camera.top = 375;
      dLight.shadow.camera.bottom = -375;
      dLight.shadow.mapSize.set(1024, 1024);

      group.rotateY(0.5);
      return group;
    },
    copyExample() {
      const group = new THREE.Group();
      const g = new THREE.SphereGeometry(50, 100, 100);

      const m = new THREE.MeshLambertMaterial({
        color: 0x446782
      });

      const mesh = new THREE.Mesh(g, m);
      mesh.translateY(150);
      mesh.castShadow = true;

      const g2 = g.clone();
      const mesh2 = new THREE.Mesh(g2, m.clone());
      mesh2.translateY(150);
      mesh2.castShadow = true;

      g.translate(50, 0, -40);
      g2.translate(-30, 0, 40);
      m.color.set(0x826744);
      group.add(mesh2);
      group.add(mesh);

      return group;
    },
  },
  mounted() {
    const { scene, render, renderFn } = init({
      canvas: this.$refs.cvs,
      clearColor: 0xb9d3ff
    });
    // console.log(camera)
    /* -------------------------------------------------------------------------------------------------------------- */
    render.shadowMap.enabled = true;
    const g1 = this.shadowExample();
    const g2 = this.copyExample();
    scene.add(g1, g2);
    g1.translateX(+5);
    // scene.remove(g2)
    let fTest = () => {
      if (!this.componentActive) {
        return;
      }
      // g1.rotateX(0.003);
      g2.rotateY(0.003);
      this.rafFns.forEach(fn => {
        fn();
      });
      renderFn();

      requestAnimationFrame(fTest);
    };
    // let buf = new THREE.Vector3();
    // let buf2 = g1.getWorldPosition(buf);
    // console.log(buf === buf2, buf);

    fTest();

    // console.log(g1.matrix, g1.matrixWorld);
    // scene.traverse(obj => {
    //   console.log(obj.id, obj.name);
    // });

    // const light = new THREE.SpotLight(0xfe9843, 1);
    // light.position.set(-70, 460, -70);
    // light.angle = Math.PI / 4;
    // light.castShadow = true;
    // light.shadow.camera.near = 0.5;
    // light.shadow.camera.far = 3300;
    // light.shadow.camera.fov = 20;
    // light.shadow.mapSize.set(2024, 2024);
    // scene.add(light);
    /* -------------------------------------------------------------------------------------------------------------- */
  }
};
</script>
<style scoped>
.btn {
  cursor: pointer;
  vertical-align: top;
}
.active {
  border-color: black;
  color: black;
  background-color: black;
}
</style>