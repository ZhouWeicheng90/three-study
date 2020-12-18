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
      rafFns:[]
    };
  },
  beforeUnmount() {
    this.componentActive = false;
  },
  methods: {},
  mounted() {
    const { scene,renderFn } = init({
      canvas: this.$refs.cvs,
      clearColor: 0xb9d3ff,
      addAxesHelper: true
    });
    /* -------------------------------------------------------------------------------------------------------------- */
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(100, 100, 100),
      new THREE.MeshLambertMaterial({
        color: 0x456733
      })
    );
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(230, 350, 110);
    scene.add(light);

    /* -------------------------------------------------------------------------------------------------------------- */
    let fn = ()=>{
      if (!this.componentActive) {
        return;
      }
      this.rafFns.forEach(f=>{f()})
      scene.rotateY(0.005)
      renderFn()
      requestAnimationFrame(fn)
    }
    fn()
  }
};
</script>
