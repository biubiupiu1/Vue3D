/**
 * Vue3d 推荐配置
 */
export default {
    // WebGLRenderer Constructor parameters
    renderer: {
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
    },
    // plugin : grid helper
    grid: {
        size: 1000,
        divisions: 10,
        colorCenterLine: 'rgb(136,136,136)',
        colorGrid: 'rgb(68,68,68)',
    },
    // plugin : box helper
    box: {
        color: 'rgb(255,255,0)'
    }
}
