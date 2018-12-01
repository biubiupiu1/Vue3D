// Ϊ�˱༭��������ʾ����webpack�Ĳ������õ�����д��
const webpack = require('./webpack.config.js')
module.exports = {
    baseUrl: '/',

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: null, // ���ô���
        before: app => {
        }
    },

    configureWebpack: webpack,

    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
    }
}