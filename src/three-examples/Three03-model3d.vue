<template>
  <canvas ref="cvs"></canvas>
</template>

<script>
import * as THREE from "three";
import { init } from "./service.js";
export default {
  methods: {
    addLight(scene) {
      const light = new THREE.PointLight(0xffffff, 1);

      light.position.set(230, 350, 110);
      scene.add(light);

      scene.add(new THREE.AmbientLight(0xaaaaaa, 1));
    },
    latheTest(scene) {
      // let shape = new THREE.Shape(); //创建Shape对象
      // shape.setFromPoints([new THREE.Vector2(50, 60)]);
      // shape.splineThru([
      //   new THREE.Vector2(50, 60),
      //   new THREE.Vector2(25, 0),
      //   new THREE.Vector2(50, -60)
      // ]); //顶点带入样条插值计算函数,splineThru 表示创建的是样条曲线
      // let splinePoints = shape.getPoints(20); //插值计算细分数20  (2个顶点之间细分出20个？)

      let curve = new THREE.SplineCurve([
        new THREE.Vector2(50, 60),
        new THREE.Vector2(25, 0),
        new THREE.Vector2(50, -60)
      ]);
      let splinePoints = curve.getPoints(20);

      let latheGroup = new THREE.Group();
      let geo = new THREE.BufferGeometry();
      geo.setFromPoints(splinePoints);
      let line = new THREE.Line(
        geo,
        new THREE.LineBasicMaterial({
          color: 0xff6789
        })
      );
      latheGroup.add(line);
      var geometry = new THREE.LatheGeometry(splinePoints, 30); //旋转造型
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          color: 0x456733,
          side: THREE.DoubleSide
          // wireframe: true,
          // transparent: true,
          // opacity: 0.5
        })
      );
      latheGroup.add(mesh);
      latheGroup.position.set(300, 300, 0);

      scene.add(latheGroup);
    },
    arc_line_test(scene) {
      var arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI * 2);
      let points = arc.getPoints(20);
      let geo = new THREE.Geometry();
      // geo.vertices.push(...points.map(v2 => new THREE.Vector3(v2.x, v2.y, 0)));
      geo.setFromPoints(points);

      let ptM = new THREE.Points(
        geo,
        new THREE.PointsMaterial({ color: 0xff0000, size: 2 })
      );

      // 关于直线的 (个人感觉直线无需这样吧，直接往geometry中设两个点，绘制就行！)
      // 如：geometry.vertices.push(p1, p2);
      var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

      // 三维直线LineCurve3:
      var lineCurve = new THREE.LineCurve3(
        new THREE.Vector3(50, 0, 30),
        new THREE.Vector3(0, 70, -30)
      );

      // // 二维直线LineCurve
      // var lineCurve = new THREE.LineCurve(
      //   new THREE.Vector2(50, 0),
      //   new THREE.Vector2(0, 70)
      // );

      geometry.setFromPoints(lineCurve.getPoints(10));

      //线条模型对象
      var line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color: 0xffff00
        })
      );

      let group = new THREE.Group();
      group.add(ptM);
      group.add(line);
      group.position.set(-100, 60, -30);
      scene.add(group);
    },
    tube_test(scene) {
      var R = 80;
      var arc = new THREE.CatmullRomCurve3([
        new THREE.Vector3(R, 0, 0),
        new THREE.Vector3(0, -R, 0),
        new THREE.Vector3(-R, 0, 0)
      ]);

      var curvePath = new THREE.CurvePath();
      curvePath.curves.push(arc);

      var geometry = new THREE.TubeGeometry(curvePath, 60, 10, 30, false);
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          color: 0xb99923,
          side: THREE.DoubleSide
          // wireframe:true
        })
      );
      mesh.position.set(-120, 30, 10);

      scene.add(mesh);

      // var geometry = new THREE.Geometry();
      // geometry.setFromPoints(curvePath.getPoints(30));
      // var material = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // });
      // //线条模型对象
      // var line = new THREE.Line(geometry, material);
      // scene.add(line); //线条对象添加到场景中
    },
    shape_test(scene) {
      // ---通过顶点定义轮廓 ---------------------------
      // var points = [
      //   new THREE.Vector2(-50, -50),
      //   new THREE.Vector2(-60, 0),
      //   new THREE.Vector2(0, 50),
      //   new THREE.Vector2(60, 0),
      //   new THREE.Vector2(50, -50),
      //   new THREE.Vector2(-50, -50)
      // ];
      // var shape = new THREE.Shape(points);

      // // ---先创建Shape，然后调用方法，生成 ---------------------------
      // var shape = new THREE.Shape();
      // shape.absarc(0, 0, 50, 0, 2 * Math.PI); //圆弧轮廓
      // // 例2：-------------
      // var shape = new THREE.Shape(); //Shape对象
      // var R = 50;
      // shape.absarc(0, 0, R, 0, Math.PI);
      // shape.lineTo(-R, -200);
      // shape.absarc(0, -200, R, Math.PI, 2 * Math.PI);
      // shape.lineTo(R, 0);

      //
      // 一个外轮廓圆弧嵌套三个内圆弧轮廓
      var shape = new THREE.Shape();
      shape.arc(100, 100, 20, 0, 2 * Math.PI);

      var path1 = new THREE.Path();
      path1.arc(100, 100, 6, 0, 2 * Math.PI);
      var path2 = new THREE.Path();
      path2.arc(113, 100, 4, 0, 2 * Math.PI);
      var path3 = new THREE.Path();
      path3.arc(87, 100, 4, 0, 2 * Math.PI);
      var path4 = new THREE.Path();
      path4.arc(100, 113, 4, 0, 2 * Math.PI);
      var path5 = new THREE.Path();
      path5.arc(100, 87, 4, 0, 2 * Math.PI);

      shape.holes.push(path1, path2, path3, path4, path5);

      var extrudePath = new THREE.CatmullRomCurve3([
        new THREE.Vector3(80, 80, 0),
        new THREE.Vector3(160, 160, -80),
        new THREE.Vector3(200, 200, 0)
        // new THREE.Vector3(160, 160, 80),
        // new THREE.Vector3(80, 80, 0)
      ]);

      // var geometry = new THREE.ShapeGeometry(shape, 55); // ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
      var geometry = new THREE.ExtrudeGeometry(shape, {
        // amount: 20, //
        bevelEnabled: true, // 挤出 斜面开启（具体表现就是衔接处变平滑了，变厚了）
        curveSegments: 50, // 截面上的曲线细分度
        extrudePath,
        steps: 100
        // depth: 60
      });
      geometry.scale(0.5, 0.5, 0.5);
      geometry.rotateY(Math.PI);
      geometry.rotateZ(Math.PI / 3);
      // geometry.center();

      let type = 3; // 1 点，2 线，3 mesh
      if (3 === type) {
        let mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshLambertMaterial({
            color: 0x64a3d0,
            // wireframe: true,
            side: THREE.DoubleSide
            // transparent:true,
            // opacity:.5
          })
        ); //网格模型对象
        scene.add(mesh);
      } else if (2 === type) {
        let line = new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({
            color: 0x000000
          })
        );
        scene.add(line);
      } else {
        let points = new THREE.Points(
          geometry,
          new THREE.PointsMaterial({
            color: 0x000000
          })
        );
        scene.add(points);
      }
    }
  },
  mounted() {
    const { scene, renderFn } = init({
      canvas: this.$refs.cvs,
      clearColor: 0xb9d3ff,
      addAxesHelper: true
    });
    this.addLight(scene);
    /* -------------------------------------------------------------------------------------------------------------- */
    this.latheTest(scene);
    this.arc_line_test(scene);
    this.tube_test(scene);
    this.shape_test(scene);
    /* -------------------------------------------------------------------------------------------------------------- */
    renderFn();
  }
};
</script>
