// @ts-check
import { TextureLoader, SpriteMaterial, Sprite, Group, AdditiveBlending } from 'three'
// 定义雪花纹理和大小
const textureArr = [
    {
        texture: new TextureLoader().load("/envs/snowflake1.png"),
        scale: 1.5
    },
    {
        texture: new TextureLoader().load("/envs/snowflake2.png"),
        scale: 2
    },
    {
        texture: new TextureLoader().load("/envs/snowflake3.png"),
        scale: 2
    },
    {
        texture: new TextureLoader().load("/envs/snowflake4.png"),
        scale: 1
    },
    {
        texture: new TextureLoader().load("/envs/snowflake5.png"),
        scale: 1
    },
];
const len = textureArr.length;

// 雪花范围和数量定义：
const W = 400;
const H = 200;
const D = 400;
const num = 2000;

// 在随机位置，生成一个随机雪花
function generateOneSnow() {
    const textureObj = textureArr[Math.floor(len * Math.random())];
    const material = new SpriteMaterial({
        blending: AdditiveBlending,
        map: textureObj.texture,
        transparent: true,
    })
    const sprite = new Sprite(material)
    sprite.scale.set(textureObj.scale, textureObj.scale, 1)

    let k1 = Math.random() - 0.5;
    let k2 = Math.random() - 0.5;
    let k3 = Math.random() - 0.5;
    sprite.position.set(W * k1, H * k2, D * k3);
    return sprite;
}

/**
 * @returns snowDropingFn 雪花下降的函数，需要在raf中调用
 * @param {import('three').Scene} scene 
 */
export default function (scene) {
    // 生成num个雪花，并加入容器spritesGroup中：
    const spritesGroup = new Group()
    const sprites = []
    for (let i = 0; i < num; i++) {
        let sprite = generateOneSnow();
        spritesGroup.add(sprite)
        sprites.push(sprite)
    }
    // 定义风的方向，调节雪花的区域，并加入：
    scene.add(spritesGroup);
    // spritesGroup.translateY();
    spritesGroup.rotateZ(Math.PI / 3);
    spritesGroup.rotateX(-Math.PI / 6);

    /**
     * 
     * @param {import('three').Camera} camera 
     */
    function dropingFn(camera) {
        // 越远的雪花越不可见，这里定义最远可见的雪花：
        const maxtDisToSee = 200;

        // 远近是相对于相机的坐标的：
        let { x: cx, y: cy, z: cz } = camera.position;
        spritesGroup.position.set(cx, cy, cz)

        sprites.forEach(sprite => {
            const distance = 0.1 * (Math.random() - 0.5) + 0.2; // 随机下降距离： 0.2+/-0.05的偏差
            sprite.translateY(-distance)

            // 处理落地了雪花：
            if (sprite.position.y <= -H * 0.5) {
                sprite.position.setY(H * 0.5);
            }

            // 雪花远近 更新透明度：
            let { x, y, z } = sprite.position;
            let dis2 = Math.pow(x - cx, 2) + Math.pow(y - cy, 2) + Math.pow(z - cz, 2);
            sprite.material.opacity = 1 - Math.sqrt(dis2) / maxtDisToSee;
        })
    }
    return dropingFn
}