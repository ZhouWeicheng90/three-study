<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";


export default {
  mounted() {
    const scene = new THREE.Scene();
    const material = new THREE.MeshLambertMaterial({ color: 0x0000ff }); // 材质定义颜色
    const geometry = new THREE.BoxGeometry(100, 50, 60); // 长方体
    const mesh = new THREE.Mesh(geometry, material); // 网格-模型：融合了形状和颜色，形成mesh
    scene.add(mesh);

    const point = new THREE.PointLight(0xffffff); // 定义发光点，并加入到场景中！
    point.position.set(400, 200, 300);
    scene.add(point);
    const ambient = new THREE.AmbientLight(0x444444); // 定义环境光，加入scene
    scene.add(ambient);
    /* -------------------------------------------------------------------------------------------------------------- */
    const canvasW = this.$refs.cvs.clientWidth;
    const canvasH = this.$refs.cvs.clientHeight;
    const camera = new THREE.OrthographicCamera(
      -canvasW / 2,
      canvasW / 2,
      canvasH / 2,
      -canvasH / 2,
      1,
      1000
    ); // 正射投影 的摄像机！
    camera.position.set(200, 300, 200);
    camera.lookAt(scene.position);

    const render = new THREE.WebGLRenderer({ canvas: this.$refs.cvs });
    render.setSize(canvasW, canvasH); // 这个很重要，保证render的size就是canvas的size，让渲染不变形，分辨率不降低。
    render.setClearColor(0xb9d3ff, 1);
   
    function customRender() {            
      render.render(scene, camera);           
    }
    customRender();
    /* -------------------------------------添加鼠标动作：-------------------------------------------------------------- */
    
   
    
  }
};
</script>
