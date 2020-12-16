<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { init } from "../assets/service.js";
const url = "/imgs/earth.jpg";
const url2 = "/imgs/earth2.jpg";
export default {
  methods: {
    baseTexture(scene, renderFn) {
      var textureLoader = new THREE.TextureLoader();
      const successFn = texture => {
        var material = new THREE.MeshLambertMaterial({
          // wireframe:true,
          map: texture // 这里是纹理！
        });

        /**
         *  添加一个球形的地球，内含设置所有faceVertexUvs为图片上的同一个点
         */
        function getGeo1(sameUv) {
          var geometry = new THREE.SphereGeometry(150, 30, 30);
          if (!sameUv) {
            return geometry;
          }
          // 设置所有纹理坐标为同一个地方的：
          geometry.faceVertexUvs[0].forEach(v2s => {
            v2s.forEach(v2 => {
              v2.set(0.7, 0.1);
            });
          });
          return geometry;
        }

        /**
         * 添加一个4*4的方块组成的矩形地图，内含将第3个矩形缩小展示整张地图
         */
        function getGeo2(smallShow) {
          var geometry = new THREE.PlaneGeometry(304, 252, 4, 4);
          if (!smallShow) {
            return geometry;
          }
          // 图片的坐标原点在右下角，x轴指向左方，y轴指向右方，
          // 为什么x轴时反的？想象一个那个坐标映射，从图片背面看x轴确应该返回来
          var t1 = new THREE.Vector2(0, 0); //图片右下角
          var t2 = new THREE.Vector2(1, 0); //图片右上角
          var t3 = new THREE.Vector2(1, 1); //图片左上角
          var t4 = new THREE.Vector2(0, 1); //图片左下角

          var uv1 = [t4, t1, t3]; // 注意书写顺序
          var uv2 = [t1, t2, t3];
          // 设置第五、第六个三角形面（即第3个矩形）纹理坐标刚好对应整张图片
          geometry.faceVertexUvs[0][4] = uv1;
          geometry.faceVertexUvs[0][5] = uv2;
          return geometry;
        }

        let geo1 = getGeo1(false);
        const mesh1 = new THREE.Mesh(geo1, material);
        mesh1.position.set(-150, 0, 150);
        scene.add(mesh1);

        let geo2 = getGeo2(true);
        const mesh2 = new THREE.Mesh(geo2, material);
        mesh2.position.set(100, 0, -100);
        scene.add(mesh2);
        renderFn();

        // 可以动态设置模型的纹理，5s后：
        let currentUrl = url;
        setInterval(() => {
          if (url === currentUrl) {
            currentUrl = url2;
          } else {
            currentUrl = url;
          }
          textureLoader.load(currentUrl, function(texture) {
            mesh1.material.map = texture; // 设置球体网格模型材质的map属性
            // mesh.material.needsUpdate = true; // （经过测试不设置也可以）告诉threejs渲染器系统，材质对象的map属性已更新，
            renderFn();
          });
        }, 2500);
      };

      textureLoader.load(url, function(texture) {
        // console.log(texture.image);
        successFn(texture);
      });

      // var imageLoader = new THREE.ImageLoader();
      // imageLoader.load(url, function(img) {
      //   var texture = new THREE.Texture(img);
      //   texture.needsUpdate = true;  // 这个必须开启，否则无法渲染纹理
      //   successFn(texture)
      // });
    },
    textureTransform(scene, renderFn) {
      var geometry = new THREE.BoxBufferGeometry(20, 200, 300); //立方体

      var material_1 = new THREE.MeshLambertMaterial({
        color: 0xffff3f
      });
      var textureLoader = new THREE.TextureLoader(); // 纹理加载器
      var texture = textureLoader.load(url); // 加载图片，返回Texture对象

      // 设置阵列模式   默认ClampToEdgeWrapping  RepeatWrapping：阵列  镜像阵列：MirroredRepeatWrapping
      //   texture.wrapS = THREE.RepeatWrapping;
      //   texture.wrapT = THREE.RepeatWrapping;
      //   texture.repeat.set(2, 2);
      texture.offset.set(0.25, 0.25);

      //   texture.rotation = Math.PI / 3;
      // 设置纹理的旋转中心，默认(0,0)
      //   texture.center.set(0.5, 0.5);

      var material_2 = new THREE.MeshLambertMaterial({
        map: texture // 设置纹理贴图
        // wireframe:true,
      });
      // 设置材质数组
      var materialArr = [
        material_2,
        material_1,
        material_1,
        material_1,
        material_1,
        material_1
      ];

      // 设置数组材质对象作为网格模型材质参数
      var mesh = new THREE.Mesh(geometry, materialArr); //网格模型对象Mesh
      mesh.translateY(300);
      scene.add(mesh); //网格模型添加到场景中
      renderFn();
    },
    walkTube(scene, renderFn) {
      let line = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-80, -40, 0),
        new THREE.Vector3(-70, 40, 0),
        new THREE.Vector3(70, 40, 0),
        new THREE.Vector3(80, -40, 0)
      ]);

      var geometry = new THREE.TubeGeometry(line, 200, 6, 20);
      geometry.rotateX(Math.PI);

      var texture = new THREE.TextureLoader().load("/imgs/run.png");
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(20, 1);
      var material = new THREE.MeshPhongMaterial({
        map: texture,
        side:THREE.DoubleSide,
        specular:0x4488ee,
        shininess:2
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.translateY(-300);
      scene.add(mesh);
      let fn = () => {
        renderFn();
        texture.offset.x -= 0.06;
        requestAnimationFrame(fn);
      };
      fn();
    }
  },
  mounted() {
    const { scene, renderFn } = init(this.$refs.cvs, 0xb9d3ff, true);
    /* -------------------------------------------------------------------------------------------------------------- */
    this.baseTexture(scene, renderFn);
    this.textureTransform(scene, renderFn);
    this.walkTube(scene, renderFn);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(230, 150, 110);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x999999, 1));
    /* -------------------------------------------------------------------------------------------------------------- */
  }
};
</script>
