## 资料
|   |   |
| ---------------- | ----- |
| [Physijs](https://github.com/chandlerprall/Physijs) | Physijs是一款物理引擎，可以协助基于原生WebGL或使用three.js创建模拟物理现象，比如重力下落、物体碰撞等物理现 |
| [stats.js](https://github.com/mrdoob/stats.js)      | JavaScript性能监控器，同样也可以测试webgl的渲染性能          |
| [dat.gui](https://github.com/dataarts/dat.gui)      | 轻量级的icon形用户界面框架，可以用来控制Javascript的变量，比如WebGL中一个物体的尺寸、颜色 |
| [tween.js](https://github.com/tweenjs/tween.js/)    | 借助tween.js快速创建补间动画，可以非常方便的控制机械、游戏角色运动 |
| [ThreeBSP](https://github.com/sshirokov/ThreeBSP)   | 可以作为three.js的插件，完成几何模型的布尔，各类三维建模软件基本都有布尔的概念 |

>  通常需要加载外部贴图和模型文件
>
> webgl，着色器语言，理解GPU渲染管线的渲染流程，WebGl代码是如何执行的
>
>  有一定基础后，可以选择一些图形学的书籍，深入学习图形学相关的算法。
>
> 尝试阅览Three.js-master文件src目录下的源码，这样可以深入理解Three.js，Three.js是如何封装WebGL API和着色器代码的。
>
> 底层WebGL知识和Three.js基础知识，还有实战中不同Web3D应用项目，如何去开发，程序员和3D美术之间又应该如何配合，需要去学习实战项目的开发流程。
>
> 几何体、材质、相机、模型、光源等概念

## API总览

### 基础（封装好的）

```js
Mesh
Points
Line
LineSegments   // 未使用
LineLoop    // 未使用


OctahedronGeometry
DodecahedronGeometry
IcosahedronGeometry
BoxGeometry
PlaneGeometry  // 长方形
SphereGeometry
CylinderGeometry
// 基本上所有的形状都有对应的buffer类型，两种不同的实现而已。buffer类型数据放在了 attributes.position（color,normal)，index中, 普通类型则放在了 vertices faces（或colors）中

PointsMaterial
LineBasicMaterial
MeshLambertMaterial
MeshPhysicalMaterial   // 未使用
MeshPhongMaterial
MeshBasicMaterial 
   side: DoubleSide
   vertexColors: VertexColors    // 采用顶点颜色 （当值为 NoColors（默认）时，采用color属性，直接定义所有顶点颜色）
   

PointLight
AmbientLight
SpotLight   // 未使用
DirectionalLight    // 未使用


Scene
OrthographicCamera       // Ortho graphic 正交投影
WebGLRenderer

AxisHelper  // 使用了，但无d.ts

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
```

### 自定义形状（坐标，颜色，【法向量】）


```js
BufferGeometry
BufferAttribute    // 设置顶点坐标 、颜色、法向量、索引 的。
    geometry.attributes.color
    geometry.attributes.position
    geometry.attributes.normal   // 顶点法向量，不明白！
	geometry.attributes.uv    // 未使用 纹理贴图
	geometry.attributes.uv2   // 未使用 光照贴图
    geometry.index

// 仅下面三个 不适合构建mesh，只能构建line 和point 模型：
Geometry  
     geometry.vertices.push(p1, p2, p3);   // p是顶点，Vector类型
     geometry.colors.push(color1, color2, color3);  // 这样设置color对mesh无效，mesh的color必须通过face来设置
     // 以上的 点和颜色一一对应。
Vector3  // 矢量，同理还有 Vector2 Vector4
Color   // 定义颜色: new Color(0xff00ff);

// 要构建 mesh 必须借助 Face3，face定义法向量和三角形（只有mesh才有法向量的概念，face的颜色只用于mesh）
Face3  // face 才有法向量!  下面法向量n也是一个Vector3
    new Face3(0, 1, 2);   // 构建一个三角形，采用索引为0,1,2的顶点。 注意：一个face就是一个三角形
    face.vertexNormals.push(n1,n2,n3)  //通过设置三个顶点的法向量，来确定三角形的法向量。 或：
    face.normal=n     // 直接设置三角形的法向量

    face.color = color1   // 颜色1
    face.vertexColors = [color1,color2,color3]   //颜色2
    geometry.faces.push(face)

// Geometry类型比BufferGeometry类型更好使用，但前者最终都会转化成后者进行绘制
// Threejs加载外部模型的时候，都解析为BufferGeometry，所以这个还是很重要的

```

颜色的插值计算 （渐变）。线中间的颜色 由线两端的颜色计算得到（均匀），三角形中间的颜色 由三个顶点处的颜色计算得到。

### 材质



### 变换

``` js
scale translate rotateX rotateY rotateZ
// 变换可以用于  geometry、mesh、scene……，作用的都是本身，改变的矩阵也是自身！！
```

