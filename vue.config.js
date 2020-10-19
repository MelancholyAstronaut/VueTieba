const webpack = require("webpack");
const path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // assetsDir:"static",
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9999',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
}