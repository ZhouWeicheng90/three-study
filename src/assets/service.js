import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function init(canvas, clearColor, addAxesHelper) {
  const scene = new THREE.Scene();

  const W = canvas.clientWidth;
  const H = canvas.clientHeight;
  const render = new THREE.WebGLRenderer({ canvas });
  render.setSize(W, H);
  render.setClearColor(clearColor, 1);

  //   how to she camera ？？？？
  const camera = new THREE.OrthographicCamera(
    -W / 2,
    W / 2,
    H / 2,
    -H / 2,
    -2000,
    2000
  );
  camera.position.set(200, 300, 200);
  camera.lookAt(scene.position);

  if (addAxesHelper) {
    scene.add(new THREE.AxesHelper(H));
  }
  const controller = new OrbitControls(camera, canvas);
  function customRender() {
    render.render(scene, camera);
  }
  controller.addEventListener("change", customRender);
  Promise.resolve().then(customRender);
  return { scene, camera, render,renderFn:customRender };
}