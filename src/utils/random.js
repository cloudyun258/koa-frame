/**
 *  随机返回 min ~ max整数, 包含 min和 max 在内
 */
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = getRandom
