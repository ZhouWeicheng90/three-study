// @ts-check
/**
 * 返回“0 0 2r 2r”区域中的起点和终点
 * @returns {[[number,number],[number,number]]} 
 * @param {number} start
 * @param {number} end
 * @param {number} r 半径
 * @param {number} rate 圆心到线的距离，相对于半径的比率
 *
 */
function _getRadiusPath(start, end, r, rate = 1) {
    let rad1 = (Math.PI * start) / 180;
    let rad2 = (Math.PI * end) / 180;
    let p1 = [Math.sin(rad1) * rate + 1, Math.cos(rad1) * rate + 1].map(
        n => n * r
    );
    let p2 = [Math.sin(rad2) * rate + 1, Math.cos(rad2) * rate + 1].map(
        n => n * r
    );
    // @ts-ignore
    return [p1, p2];
}

/**
 * 
 * @param {number} gap 
 * @param {number} inRate 
 */
function _getInfo(gap, inRate) {
    const degStart = 120;
    const degEnd = degStart + 120;
    const r = 0.5;

    // 逆时针的4个顶点
    let d1 = degStart + gap;
    let d2 = degEnd - gap;
    let d3 = degEnd - gap / inRate;
    let d4 = degStart + gap / inRate;

    let [p1, p2] = _getRadiusPath(d1, d2, r);
    let [p3, p4] = _getRadiusPath(d3, d4, r, inRate);

    let fanbladePath = `M ${p1.join(",")} 
      A ${r} ${r} 0 0 0 ${p2.join(",")} 
      L ${p3.join(",")} 
      A ${r * inRate} ${r * inRate} 0 0 1 ${p4.join(",")} 
      Z`;

    const tRate = (inRate + 1) / 2;
    let [txtP1, txtP2] = _getRadiusPath(d3, d4, r, tRate);
    let innerTextPath = `M ${txtP1.join(",")} 
      A ${r * tRate} ${r * tRate} 0 0 1 ${txtP2.join(",")} `;

    return {
        fanbladePath,
        innerTextPath,
        textXStart: 29 - gap + "%",
        textSize: 0.14 * r + ''
    };
}
/**
 * @type { Map<string,{fanbladePath:string,innerTextPath:string,textXStart:string,textSize:string}>}
 */
let caches = new Map()
let keys = [];
export default function (gap = 2, inRate = 0.3) {
    const key = gap + '#' + inRate
    if (!keys.includes(key)) {
        let res = _getInfo(gap, inRate);
        keys.push(key)
        caches.set(key, res)
        while (keys.length > 20) {
            let k = keys.shift()
            caches.delete(k)
        }
    }
    return caches.get(key)
}