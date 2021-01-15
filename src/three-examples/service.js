import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function init({ canvas, clearColor = null, addAxesHelper = false, addController = true, isOrthographicCamera = true }) {
  const scene = new THREE.Scene();

  const W = canvas.clientWidth;
  const H = canvas.clientHeight;
  const render = new THREE.WebGLRenderer({ canvas });
  render.setSize(W, H);

  if (null !== clearColor) {
    render.setClearColor(clearColor, 1);
  }

  let camera
  if (isOrthographicCamera) {
    camera = new THREE.OrthographicCamera(
      -W / 2,
      W / 2,
      H / 2,
      -H / 2,
      -2000,
      2000
    );
    camera.position.set(200, 300, 200);
    camera.lookAt(scene.position);

  } else {
    camera = new THREE.PerspectiveCamera(60, W / H, 1, 100000);    
  }

  function customRender() {    
    render.render(scene, camera);
  }

  if (addAxesHelper) {
    scene.add(new THREE.AxesHelper(H));
  }
  if (addController) {
    const controller = new OrbitControls(camera, canvas);
    controller.addEventListener("change", customRender);
  }
  return { scene, camera, render, renderFn: customRender };
}