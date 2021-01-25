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

/** 窗口宽高 */
let W, H;

/** camera的 x，y 将要移动的位置 */
let cameraX = 0;
let cameraY = 0;

function easeOffset(offset) {
    // 移动的ease系数：
    let ease = 32

    let sign = Math.sign(offset)
    let abs = Math.abs(offset)
    if (abs <= 0.02) {
        return sign * abs
    }
    return sign * abs / ease
}

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
    mask.className = "bg-mask"
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
    // 背景移动幅度系数,符号代表方向：
    let rate = -0.005;

    cameraX = (event.clientX - W / 2) * rate;
    cameraY = (H / 2 - event.clientY) * rate * camera.aspect;
})


init();
window.addEventListener('resize', onWindowSizeChange)

let snowDropingFn = addDroppingSnow(scene)

function rafRender() {
    snowDropingFn(camera)

    camera.position.x += easeOffset(cameraX - camera.position.x)
    camera.position.y += easeOffset(cameraY - camera.position.y)

    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    requestAnimationFrame(rafRender)
}
rafRender()