const { merge } = require("webpack-merge");
const path = require("path");
const dev = require("./dev");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(dev, {
    mode: "production",
    output: {
        filename: "bundle.min.js"
    },
    devtool: false,
    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
});