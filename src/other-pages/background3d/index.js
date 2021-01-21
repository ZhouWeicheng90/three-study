// @ts-check
import { PerspectiveCamera, Scene, WebGLRenderer, CubeTextureLoader } from 'three'
import addDroppingSnow from './addDropingSnows'


/**
 * @type {PerspectiveCamera}
 */
let camera;

/**
 * @type {Scene}
 */
let scene;

/**
 * @type {WebGLRenderer}
 */
let renderer;

let W, H;

let cameraX = 0;
let cameraY = 0;

function init() {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.style.zIndex = '-2'
    document.body.append(canvas)

    const mask = document.createElement('div')
    mask.style.position = 'fixed'
    mask.style.left = '0';
    mask.style.top = '0';
    mask.style.right = '0';
    mask.style.bottom = '0';
    mask.style.zIndex = '-1';
    mask.style.background = "rgba(255, 255, 255, .2)"
    document.body.append(mask)


    W = window.innerWidth;
    H = window.innerHeight;
    scene = new Scene()
    renderer = new WebGLRenderer({ canvas });
    renderer.setSize(W, H)
    camera = new PerspectiveCamera(60, W / H, 1, 100000)
    camera.position.z = 100


    const imgs = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"]
    scene.background = new CubeTextureLoader().setPath("/envs/").load(imgs);
}

function onWindowSizeChange() {
    W = window.innerWidth;
    H = window.innerHeight;

    camera.aspect = W / H;
    camera.updateProjectionMatrix()
    renderer.setSize(W, H)
}

window.addEventListener('mousemove', event => {
    cameraX = (event.clientX - W / 2) * 0.01;
    cameraY = (H / 2 - event.clientY) * 0.01;

    console.log(cameraX, cameraY)
})


init();
window.addEventListener('resize', onWindowSizeChange)

let snowDropingFn = addDroppingSnow(scene)
function easeOffset(offset) {
    let sign = Math.sign(offset)
    let abs = Math.abs(offset)
    if (abs <= 0.01) {
        return sign * abs
    }
    return sign * abs / 32

}
function rafRender() {
    snowDropingFn(camera)

    camera.position.x += easeOffset(cameraX - camera.position.x)
    camera.position.y += easeOffset(cameraY - camera.position.y)

    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    requestAnimationFrame(rafRender)
}
rafRender()