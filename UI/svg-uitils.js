// @ts-check
/** 
 * @typedef {{order:string, nums:number[]}} Command 
 * */



/**
 * 
 * @param {string} str 
 * @param {boolean} toAbsolute 
 */
export function translatePath(str, toAbsolute) {
    const commands = parseCommands(str)
    let buf = [];
    let x = 0, y = 0;
    for (let cmd of commands) {
        let res = transCommandCore(cmd, toAbsolute, x, y)
        x = res.x
        y = res.y;
        buf.push(res.cmd)
    }
    return stringifyCommands(buf)
}
/**
 * @returns {{cmd:Command,x:number,y:number}}
 * @param {Command} p 
 */
function transCommandCore({ order, nums }, toAbsolute, x, y) {
    _validateCommand(order, nums);
    const len = nums.length;
    if (/[csqtzml]/i.test(order)) {
        // 普通指令
        if (len === 0) {
            order = toAbsolute ? order.toUpperCase() : order.toLowerCase()
            return { cmd: { order, nums: [] }, x, y }
        }
        if (toAbsolute && order.toUpperCase() === order || !toAbsolute && order.toLowerCase() === order) {
            let cmdX = nums[len - 2]
            let cmdY = nums[len - 1]
            if (toAbsolute) {
                x = cmdX;
                y = cmdY;
            } else {
                x += cmdX;
                y += cmdY;
            }
            return { cmd: { order, nums: nums.slice() }, x, y }
        }
        let nums2 = []
        if (toAbsolute) {
            // 相对转绝对           
            for (let i = 0; i < len; i += 2) {
                nums2.push(nums[i] + x, nums[i + 1] + y)
            }
            x = nums2[len - 2]
            y = nums2[len - 1]
            return { cmd: { order: order.toUpperCase(), nums: nums2 }, x, y }
        } else {
            // 绝对转相对            
            for (let i = 0; i < len; i += 2) {
                nums2.push(nums[i] - x, nums[i + 1] - y)
            }
            x = nums[len - 2]
            y = nums[len - 1]
            return { cmd: { order: order.toLowerCase(), nums: nums2 }, x, y }
        }

    }
    // 特殊的 h(垂直),v（水平）,a（弧线）暂不支持
    throw new Error('暂不支持的指令')
}

/**
 * 
 * @param {string} order 
 * @param {number[]} nums 
 */
function _validateCommand(order, nums) {
    let len = nums.length;
    if (['z', 'Z'].includes(order) && 0 === len) {
        return;
    }
    if (['m', 'M', 'l', 'L', 't', 'T'].includes(order) && 2 === len) {
        return;
    }
    if (['q', 'Q', 's', 'S'].includes(order) && 4 === len) {
        return;
    }
    if (['c', 'C'].includes(order) && 6 === len) {
        return;
    }
    if (['h', 'H', 'v', 'V'].includes(order) && 1 === len) {
        return;
    }
    if (['a', 'A'].includes(order) && 7 === len) {
        return;
    }
    throw new Error(`错误的指令识别：${order} ${nums.join(' ')}`)
}

/**
 * 
 * @param {string} str 
 * @returns {Command[]}
 */
function parseCommands(str) {
    str = str.replace(/,/g, ' ');
    let buf = [];
    do {
        let res = parseOneCommand(str)
        str = res.str
        buf.push(res.cmd)
    } while (str)
    return buf;
}

/**
 * @returns {string}
 * @param {Command[]} commands 
 */
function stringifyCommands(commands) {
    let str = ''
    for (let cmd of commands) {
        let { order, nums } = cmd
        let coodexs = []
        for (let i = 0; i < nums.length; i += 2) {
            coodexs.push([nums[i], nums[i + 1]].join(','))
        }
        str += order + coodexs.join(' ')

    }
    return str;

}

/**
 * 
 * @param {string} s 
 */
function parseOneCommand(s) {
    s = s.trim()
    let order = s[0];
    s = s.substring(1);
    let nums = [];

    while (!Number.isNaN(Number.parseFloat(s))) {
        let num = Number.parseFloat(s);
        nums.push(num);
        s = s.replace(/^\s*[+-]?[0-9]*(\.[0-9]*)?/, '');
    }

    return { str: s, cmd: { order, nums } }
}
