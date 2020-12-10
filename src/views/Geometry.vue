<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  methods: {
    /**
     * 内有辅助坐标系代码  ----- 辅助坐标系必须在 camera和scene关联起来后使用！
     */
    init() {
      const scene = new THREE.Scene();
      const point = new THREE.PointLight(0xffffff);
      point.position.set(500, 500, 500);
      scene.add(point);
      const ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);
      const canvasW = this.$refs.cvs.clientWidth;
      const canvasH = this.$refs.cvs.clientHeight;
      const render = new THREE.WebGLRenderer({ canvas: this.$refs.cvs });
      const camera = new THREE.OrthographicCamera(
        -canvasW / 2,
        canvasW / 2,
        canvasH / 2,
        -canvasH / 2,
        1,
        1000
      );
      camera.position.set(200, 300, 200);
      camera.lookAt(scene.position);

      render.setSize(canvasW, canvasH);
      render.setClearColor(0xb9d3ff, 1);

      new OrbitControls(camera, this.$refs.cvs);

      // 辅助坐标系:
      var axisHelper = new THREE.AxisHelper(canvasH);
      scene.add(axisHelper);

      return { scene, camera, render };
    },

    /**
     ** 模型：由几何体（geometry）和材质（material）构建。有3类：点模型，线模型，mesh模型。
     ** 前面常见的几何体（如球体，圆柱体，长方体……）就是mesh模型，本质就是取geometry中的顶点，3个一组绘制三角形（凑不齐3个的将被忽略），一个球中三角形个数越多，绘制的就越接近球。
     ** 点模型，取geometry中的顶点处绘制小矩形。
     ** 线模型，依次链接顶点形成折线（最后一条不自动封闭）。
     ** 每种模型对应的材质也不同，mesh模型必须用mesh系列材质，point模型必须用PointsMaterial材质，线模型必须用line系列材质
     ** 定义几何体，由系列点组成 （坐标，颜色，法向量 都是一一对应的）
     *
     *
     */
    getGeometry1() {
      const geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象

      geometry.attributes.position = new THREE.BufferAttribute(
        new Float32Array([
          ...[0, 0, 0], //顶点1坐标
          ...[70, 0, 0], //顶点2坐标
          ...[0, 100, 0], //顶点3坐标
          ...[0, 0, 0], //顶点4坐标
          ...[0, 0, 90], //顶点5坐标
          ...[70, 0, 0] //顶点6坐标
        ]),
        3
      );
      geometry.attributes.color = new THREE.BufferAttribute(
        new Float32Array([
          ...[1, 0, 0], //顶点1颜色
          ...[0, 1, 0], //顶点2颜色
          ...[0, 0, 1], //顶点3颜色
          ...[1, 1, 0], //顶点4颜色
          ...[0, 1, 1], //顶点5颜色
          ...[1, 0, 1] //顶点6颜色
        ]),
        3
      );

      geometry.attributes.normal = new THREE.BufferAttribute(
        new Float32Array([
          ...[0, 0, 1], //顶点1法向量
          ...[0, 0, 1], //顶点2法向量
          ...[0, 0, 1], //顶点3法向量
          ...[0, 1, 0], //顶点4法向量
          ...[0, 1, 0], //顶点5法向量
          ...[0, 1, 0] //顶点6法向量
        ]),
        3
      );

      return geometry;
    },

    /**
     * BufferGeometry  BufferAttribute 添加两个三角形组成的蓝色矩形
     ** 注意各种属性的运用
     * 矩形（定义6个点，借助索引简化为定义4个点）
     * 经常会有重复的顶点（重复的坐标，颜色，法向量），借助索引可以简化顶点数据配置
     */
    addGeometry2(scene) {
      const geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象

      geometry.attributes.position = new THREE.BufferAttribute(
        new Float32Array([
          ...[0, -90, 0], //顶点1坐标
          ...[70, -90, 0], //顶点2坐标
          ...[70, -90, 70], //顶点3坐标
          // ...[0, -90, 0], //顶点4坐标
          ...[0, -90, 70] //顶点5坐标
          // ...[70, -90, 70], //顶点6坐标
        ]),
        3
      );

      geometry.attributes.color = new THREE.BufferAttribute(
        new Float32Array([
          ...[1, 0, 0], //顶点1颜色
          ...[0, 1, 0], //顶点2颜色
          ...[0, 0, 1], //顶点3颜色

          // ...[1, 1, 0], //顶点4颜色
          ...[0, 1, 1] //顶点5颜色
          // ...[1, 0, 1], //顶点6颜色
        ]),
        3
      );

      geometry.attributes.normal = new THREE.BufferAttribute(
        new Float32Array([
          ...[0, 0, -1], //顶点1法向量
          ...[0, 0, -1], //顶点2法向量
          ...[0, 0, -1], //顶点3法向量

          // ...[0, 0, -1], //顶点4法向量
          ...[0, 0, -1] //顶点5法向量
          // ...[0, 0, -1], //顶点6法向量
        ]),
        3
      );

      // 索引数据赋值给几何体的index属性 Uint16Array类型数组创建顶点索引数据
      geometry.index = new THREE.BufferAttribute(
        new Uint16Array([...[0, 1, 2], ...[0, 2, 3]]),
        1
      ); //1个为一组

      var mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          color: 0x0000ff, //三角面颜色
          // vertexColors: THREE.VertexColors, //以顶点颜色为准
          side: THREE.DoubleSide //两面可见
        })
      );
      scene.add(mesh);
    },

    /**
     * 添加一个彩色三角形
     ** Geometry  Vector3  Color  Face3 这些对象定义形状
     */
    addGeometry3(scene) {
      var geometry = new THREE.Geometry();
      var p1 = new THREE.Vector3(50, 0, 100); //顶点1坐标
      var p2 = new THREE.Vector3(0, 70, 100); //顶点2坐标
      var p3 = new THREE.Vector3(80, 70, 100); //顶点3坐标
      geometry.vertices.push(p1, p2, p3);

      var color1 = new THREE.Color(0x00ff00); //顶点1颜色
      var color2 = new THREE.Color(0xff0000); //顶点2颜色
      var color3 = new THREE.Color(0x0000ff); //顶点3颜色

      geometry.colors.push(color1, color2, color3);

      /* -------------------------------------------------------------------------------------------------------------- */
      let face = new THREE.Face3(0, 1, 2);
      var n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
      // face.vertexNormals.push(n1,n1,n1)
      face.normal = n1;
      geometry.faces.push(face);
      // face.color = color1
      face.vertexColors = [color1, color2, color3];

      /* -------------------------------------------------------------------------------------------------------------- */
      // scene.add(
      //   new THREE.Line(
      //     geometry,
      //     new THREE.LineDashedMaterial({
      //       vertexColors: THREE.VertexColors //以顶点颜色为准
      //     })
      //   )
      // );
      scene.add(
        new THREE.Mesh(
          geometry,
          new THREE.MeshLambertMaterial({
            vertexColors: THREE.VertexColors,
            side: THREE.DoubleSide
          })
        )
      );
    },

    /**
     * 综合运用，添加三个模型(8个点，矩形，正方体的一部分)
     */
    addGeometry4(scene) {
      let box = new THREE.BoxGeometry(400, 400, 400);
      scene.add(
        new THREE.Points(
          box,
          new THREE.PointsMaterial({
            size: 5.5,
            color: 0xfb9f11
          })
        )
      );
      console.log(box.vertices, box.faces, box.colors);

      var geometry = new THREE.PlaneBufferGeometry(100, 100);
      geometry.translate(-60, -60, -60);
      scene.add(
        new THREE.Mesh(
          geometry,
          new THREE.MeshLambertMaterial({
            color: 0xaa6600,
            side: THREE.DoubleSide
          })
        )
      );
      console.log(geometry.attributes.position, geometry.index);

      var box2 = new THREE.BoxGeometry(60, 60, 60); //创建一个立方体几何对象Geometry
      box2.translate(0, -100, 0);
      box2.rotateY(1);
      box2.rotateX(1);
      box2.rotateZ(1);

      box2.faces.forEach(face => {
        // 设置三角面face三个顶点的颜色
        face.vertexColors = [
          new THREE.Color(0xffff00),
          new THREE.Color(0xff00ff),
          new THREE.Color(0x00ffff)
        ];
      });
      box2.faces.pop();     
      box2.faces.shift();
      scene.add(
        new THREE.Mesh(
          box2,
          new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            transparent: false,
            opacity: 0.5
          })
        )
      );
    }
  },
  mounted() {
    const { scene, camera, render } = this.init();

    this.addGeometry2(scene);
    this.addGeometry3(scene);
    this.addGeometry4(scene);
    /* -------------------------------------------------------------------------------------------------------------- */
    const geometry1 = this.getGeometry1();
    geometry1.translate(6, 6, 6);
    var points = new THREE.Points(
      geometry1,
      new THREE.PointsMaterial({
        vertexColors: THREE.VertexColors,
        size: 5.0
      })
    );
    scene.add(points);

    var line = new THREE.Line(
      geometry1,
      new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
      })
    );
    scene.add(line);
    /* -------------------------------------------------------------------------------------------------------------- */

    function customRender() {
      render.render(scene, camera);
      scene.rotateY(0.003);
      window.requestAnimationFrame(customRender);
    }
    customRender();
  }
};
</script>
